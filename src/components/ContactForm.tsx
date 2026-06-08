export function ContactForm() {
  return (
    <form className="space-y-5 rounded-[2rem] border border-stone-500/15 border-t-2 border-t-teal-700/30 bg-stone-900/40 p-6 shadow-lg shadow-black/10 backdrop-blur md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-stone-300">
          お名前
          <input
            type="text"
            name="name"
            placeholder="山田 太郎"
            className="w-full rounded-2xl border border-stone-500/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-stone-300">
          メールアドレス
          <input
            type="email"
            name="email"
            placeholder="sample@example.com"
            className="w-full rounded-2xl border border-stone-500/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium text-stone-300">
        ご相談内容
        <select
          name="service"
          className="w-full rounded-2xl border border-stone-500/15 bg-stone-950/60 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40"
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
          placeholder="現在の課題や実現したいことをお聞かせください。"
          className="w-full resize-none rounded-2xl border border-stone-500/15 bg-stone-950/40 px-4 py-3 text-stone-100 outline-none transition focus:border-teal-600/40"
        />
      </label>
      <button
        type="button"
        className="w-full rounded-2xl border border-teal-700/30 bg-teal-900/40 px-6 py-4 text-sm font-bold text-teal-50 shadow-md shadow-black/20 transition hover:border-teal-500/40 hover:bg-teal-800/50"
      >
        相談内容を送信する
      </button>
      <p className="text-xs leading-6 text-stone-500">
        現在はデモフォームです。送信機能はメール配信サービスやCRMに合わせて接続できます。
      </p>
    </form>
  );
}
