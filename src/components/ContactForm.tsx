export function ContactForm() {
  return (
    <form className="space-y-5 rounded-[2rem] border border-sky-300/20 bg-slate-950/60 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-200">
          お名前
          <input
            type="text"
            name="name"
            placeholder="山田 太郎"
            className="w-full rounded-2xl border border-sky-300/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-sky-300/60"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-200">
          メールアドレス
          <input
            type="email"
            name="email"
            placeholder="sample@example.com"
            className="w-full rounded-2xl border border-sky-300/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-sky-300/60"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium text-slate-200">
        ご相談内容
        <select
          name="service"
          className="w-full rounded-2xl border border-sky-300/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-300/60"
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          <option>ホームページ作成</option>
          <option>ホームページ改修</option>
          <option>SNS連携</option>
          <option>チャットボット構築</option>
        </select>
      </label>
      <label className="block space-y-2 text-sm font-medium text-slate-200">
        メッセージ
        <textarea
          name="message"
          rows={5}
          placeholder="現在の課題や実現したいことをお聞かせください。"
          className="w-full resize-none rounded-2xl border border-sky-300/15 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-sky-300/60"
        />
      </label>
      <button
        type="button"
        className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:-translate-y-0.5 hover:shadow-sky-500/35"
      >
        相談内容を送信する
      </button>
      <p className="text-xs leading-6 text-slate-400">
        現在はデモフォームです。送信機能はメール配信サービスやCRMに合わせて接続できます。
      </p>
    </form>
  );
}
