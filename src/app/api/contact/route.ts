import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getEnv(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return undefined;
}

export async function POST(request: Request) {
  const resendApiKey = getEnv("RESEND_API_KEY", "resend_api_key");

  if (!resendApiKey) {
    return NextResponse.json(
      {
        error:
          "メール送信の設定が完了していません。Vercel に RESEND_API_KEY（re_ で始まる API キー）を設定してください。",
      },
      { status: 503 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "送信内容を読み取れませんでした。" },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const service = body.service?.trim();
  const message = body.message?.trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "すべての項目を入力してください。" },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "メッセージが長すぎます。" },
      { status: 400 },
    );
  }

  const toEmail =
    getEnv("CONTACT_TO_EMAIL", "contact_to_email") ??
    "choco6taito3@gmail.com";
  const fromEmail =
    getEnv("CONTACT_FROM_EMAIL", "contact_from_email") ??
    "Portfolio <onboarding@resend.dev>";

  const { Resend } = await import("resend");
  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `【Portfolio】${service} のお問い合わせ（${name} 様）`,
    text: [
      "ポートフォリオサイトからお問い合わせがありました。",
      "",
      `お名前: ${name}`,
      `メール: ${email}`,
      `ご相談内容: ${service}`,
      "",
      "メッセージ:",
      message,
      "",
      "※ Gmail の「返信」からお客様へご連絡いただけます。",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
