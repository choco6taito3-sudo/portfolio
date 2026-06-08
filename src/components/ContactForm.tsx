"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "送信に失敗しました。");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "通信エラーが発生しました。時間をおいて再度お試しください。",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-6 rounded-[2rem] border border-teal-700/25 border-t-2 border-t-teal-600/40 bg-gradient-to-br from-teal-950/45 via-stone-900/35 to-stone-950/45 p-8 text-center shadow-lg shadow-black/10 md:p-10">
        <div className="mx-auto grid size-16 place-items-center rounded-full border border-teal-600/30 bg-teal-900/50 text-2xl text-teal-100">
          ✓
        </div>
        <div>
          <h3 className="text-2xl font-bold text-stone-100">
            お問い合わせを受け付けました
          </h3>
          <p className="mt-4 text-sm leading-8 text-stone-400">
            内容を確認のうえ、ご連絡いたします。
            <br />
            しばらくお待ちください。
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-full border border-teal-700/30 bg-teal-900/40 px-6 py-3 text-sm font-semibold text-teal-50 transition hover:border-teal-500/40 hover:bg-teal-800/50"
        >
          新しいお問い合わせを送る
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[2rem] border border-stone-500/15 border-t-2 border-t-teal-700/30 bg-stone-900/40 p-6 shadow-lg shadow-black/10 backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-stone-300">
          お名前
          <input
            type="text"
            name="name"
            required
            placeholder="山田 太郎"
            disabled={status === "submitting"}
            className="w-full rounded-2xl border border-stone-500/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40 disabled:opacity-60"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-stone-300">
          メールアドレス
          <input
            type="email"
            name="email"
            required
            placeholder="sample@example.com"
            disabled={status === "submitting"}
            className="w-full rounded-2xl border border-stone-500/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40 disabled:opacity-60"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium text-stone-300">
        ご相談内容
        <select
          name="service"
          required
          disabled={status === "submitting"}
          className="w-full rounded-2xl border border-stone-500/15 bg-stone-950/60 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40 disabled:opacity-60"
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          <option>ホームページ作成</option>
          <option>ホームページ改修</option>
          <option>SNS連携</option>
          <option>チャットボット構築</option>
          <option>ツール作成</option>
        </select>
      </label>
      <label className="block space-y-2 text-sm font-medium text-stone-300">
        メッセージ
        <textarea
          name="message"
          rows={5}
          required
          placeholder="現在の課題や実現したいことをお聞かせください。"
          disabled={status === "submitting"}
          className="w-full resize-none rounded-2xl border border-stone-500/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40 disabled:opacity-60"
        />
      </label>

      {status === "error" && errorMessage ? (
        <p className="rounded-2xl border border-rose-500/25 bg-rose-950/30 px-4 py-3 text-sm leading-7 text-rose-200/90">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl border border-teal-700/30 bg-teal-900/40 px-6 py-4 text-sm font-bold text-teal-50 shadow-md shadow-black/20 transition hover:border-teal-500/40 hover:bg-teal-800/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "送信中..." : "相談内容を送信する"}
      </button>
      <p className="text-xs leading-6 text-stone-500">
        送信後、内容を確認して Gmail よりご返信いたします。
      </p>
    </form>
  );
}
