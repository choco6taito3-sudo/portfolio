import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type ResendError = {
  message?: string;
  name?: string;
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

function normalizeFromEmail(value: string) {
  const trimmed = value.trim().replace(/^["']|["']$/g, "");
  if (trimmed.includes("<") && trimmed.includes(">")) return trimmed;
  if (isValidEmail(trimmed)) return `Portfolio <${trimmed}>`;
  return trimmed;
}

function formatResendError(error: ResendError) {
  const message = error.message ?? "";

  if (
    message.includes("only send testing emails") ||
    message.includes("verify a domain") ||
    message.includes("resend.dev")
  ) {
    return "送信元ドメインが未認証です。Resend でドメインを認証するか、テスト用に CONTACT_FROM_EMAIL を「Portfolio <onboarding@resend.dev>」、CONTACT_TO_EMAIL を Resend 登録メールに設定してください。";
  }

  if (
    message.includes("not verified") ||
    message.includes("domain") ||
    message.includes("Domain")
  ) {
    return "送信元メールのドメインが Resend で未認証です。Resend の Domains で DNS 認証を完了してください。";
  }

  if (message.includes("API key") || message.includes("api_key")) {
    return "API キーが無効です。Vercel の RESEND_API_KEY（re_ で始まるキー）を確認してください。";
  }

  if (message) {
    return `送信に失敗しました: ${message}`;
  }

  return "送信に失敗しました。時間をおいて再度お試しください。";
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
  const fromEmail = normalizeFromEmail(
    getEnv("CONTACT_FROM_EMAIL", "contact_from_email") ??
      "Portfolio <onboarding@resend.dev>",
  );

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
      { error: formatResendError(error) },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
