import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";

type Work = {
  title: string;
  category: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

const services = [
  {
    title: "ホームページ作成",
    description:
      "会社の強み、サービス、問い合わせ導線を整理し、信頼されるWebサイトを設計から公開まで支援します。",
    tag: "Build",
    cardClass:
      "border-orange-200/80 bg-gradient-to-br from-orange-300 via-amber-200 to-yellow-100 shadow-orange-950/30 hover:shadow-orange-500/35",
    tagClass: "bg-slate-950 text-orange-100",
  },
  {
    title: "ホームページ改修",
    description:
      "古くなったデザインや分かりにくい導線を見直し、集客と採用に使えるサイトへ改善します。",
    tag: "Improve",
    cardClass:
      "border-amber-200/80 bg-gradient-to-br from-amber-300 via-orange-200 to-rose-100 shadow-amber-950/30 hover:shadow-amber-500/35",
    tagClass: "bg-slate-950 text-amber-100",
  },
  {
    title: "SNS連携",
    description:
      "Instagram、LINE、Xなどの運用導線をサイトに組み込み、継続的な接点づくりを進めます。",
    tag: "Connect",
    cardClass:
      "border-rose-200/80 bg-gradient-to-br from-rose-300 via-orange-200 to-amber-100 shadow-rose-950/30 hover:shadow-rose-500/35",
    tagClass: "bg-slate-950 text-rose-100",
  },
  {
    title: "チャットボット構築",
    description:
      "よくある質問や初回相談を自動化し、営業時間外の問い合わせ機会を逃さない仕組みを整えます。",
    tag: "Automate",
    cardClass:
      "border-yellow-200/80 bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-100 shadow-yellow-950/30 hover:shadow-yellow-500/35",
    tagClass: "bg-slate-950 text-yellow-100",
  },
];

const stats = [
  { value: "48社", label: "中小企業の導入支援" },
  { value: "32%", label: "問い合わせ獲得率アップ" },
  { value: "28%", label: "運用コスト削減" },
  { value: "21日", label: "平均初期公開期間" },
];

const cases = [
  {
    industry: "地域工務店",
    issue: "施工実績が伝わらず、紹介以外の問い合わせが少なかった。",
    result: "事例ページとLINE導線を整備し、月間相談数が2.1倍に増加。",
  },
  {
    industry: "士業事務所",
    issue: "専門性は高いが、初回相談への心理的ハードルが高かった。",
    result: "FAQと無料相談CTAを再設計し、フォーム離脱率を24%改善。",
  },
  {
    industry: "美容サロン",
    issue: "SNS投稿と予約ページが分断され、来店予約につながりにくかった。",
    result: "Instagram導線と予約導線を統合し、新規予約が月18件増加。",
  },
];

const works: Work[] = [
  {
    title: "みずいろクリニック",
    category: "クリニックサイト（架空デモ）",
    description:
      "Next.js + Tailwind で構築。爽やかなUI、スマホ対応、お知らせ（MDX）、予約導線を実装。",
    href: "https://mizuiro-clinic.vercel.app/",
    image: "/works/mizuiro-clinic.png",
    imageAlt: "みずいろクリニックのトップページ",
  },
  {
    title: "colorful-neil",
    category: "ネイルサロンサイト（架空デモ）",
    description:
      "Next.js + Tailwind で構築。作品集、予約・SNS導線、お問い合わせをシンプルなUIで実装。",
    href: "https://colorful-neil.vercel.app/",
    image: "/works/colorful-neil.png",
    imageAlt: "colorful-neilのトップページ",
  },
  {
    title: "輸入雑貨カフェ-taka-",
    category: "カフェ・雑貨ショップサイト（架空デモ）",
    description:
      "Next.js + Tailwind で構築。コンセプト紹介、メニュー、雑貨ショップ、アクセス・お問い合わせ導線を実装。",
    href: "https://imported-goods-cafe.vercel.app/",
    image: "/works/imported-goods-cafe.png",
    imageAlt: "輸入雑貨カフェ-taka-のトップページ",
  },
  {
    title: "Corporate Growth Site",
    category: "企業サイト",
    description: "採用と問い合わせを両立する、信頼感重視のコーポレートサイト。",
  },
  {
    title: "Local Service LP",
    category: "サービスLP",
    description: "地域商圏で選ばれる理由を短時間で伝えるランディングページ。",
  },
  {
    title: "SNS Funnel Hub",
    category: "SNS連携",
    description: "SNSから問い合わせまでの流れを1画面で分かりやすく可視化。",
  },
];

const voices = [
  {
    name: "製造業 代表取締役",
    comment:
      "専門用語を使わず、経営目線で必要な導線を提案してくれました。公開後の問い合わせも明らかに増えています。",
  },
  {
    name: "飲食店 オーナー",
    comment:
      "SNSとホームページがつながったことで、投稿を見たお客さまが予約まで進みやすくなりました。",
  },
  {
    name: "士業事務所 所長",
    comment:
      "古いサイトを刷新しただけでなく、相談前の不安を減らすコンテンツまで整えてもらえました。",
  },
];

const steps = [
  "無料相談",
  "課題整理",
  "設計・制作",
  "公開",
  "改善運用",
];

const faqs = [
  {
    question: "制作期間はどのくらいですか？",
    answer:
      "小規模なコーポレートサイトやLPであれば、素材がそろってから約3週間が目安です。ページ数や機能に応じて事前にスケジュールを提示します。",
  },
  {
    question: "既存サイトの一部改修だけでも相談できますか？",
    answer:
      "可能です。トップページの改善、スマホ対応、問い合わせ導線の見直し、表示速度改善など、必要な範囲に絞って対応できます。",
  },
  {
    question: "SNS連携では何ができますか？",
    answer:
      "Instagram投稿の見せ方、LINE公式アカウントへの導線、SNSキャンペーン用LPなど、サイトとSNSの役割を整理して接続します。",
  },
  {
    question: "公開後の運用も依頼できますか？",
    answer:
      "はい。文章の更新、アクセス解析、問い合わせ改善、チャットボットの内容調整など、継続的な改善も支援します。",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-9 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pb-32 pt-12 md:px-10 md:pb-40 md:pt-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            Web Growth Partner
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border border-sky-300/30 px-5 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-300/10 md:inline-flex"
          >
            無料相談へ
          </a>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 pt-28 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-32">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200">
              中小企業のWeb集客を、制作から連携まで伴走
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              ビジネスを次のステージへ
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-10 text-slate-300">
              ホームページ作成、改修、SNS連携、チャットボット構築を一気通貫で支援。
              「見られるだけ」で終わらない、問い合わせにつながるサイトを作ります。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-center text-sm font-bold text-slate-950 shadow-xl shadow-sky-500/25 transition hover:-translate-y-1"
              >
                無料で相談する
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-bold text-white transition hover:border-sky-200/60 hover:bg-white/10"
              >
                サービスを見る
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative rounded-[2.5rem] border border-sky-300/20 bg-white/[0.06] p-5 shadow-2xl shadow-sky-950/40 backdrop-blur">
              <div className="absolute -right-10 -top-10 size-36 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="rounded-[2rem] bg-slate-950/80 p-6">
                <div className="mb-8 flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-yellow-300" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-5">
                  {["問い合わせ導線", "SNS連携", "FAQ自動化"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-sky-300/15 bg-sky-300/[0.06] p-5"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <p className="font-semibold text-white">{item}</p>
                        <span className="text-sm text-sky-200">
                          {index === 0 ? "+32%" : index === 1 ? "連携済" : "24h"}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-sky-300 to-blue-500"
                          style={{ width: `${86 - index * 13}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="必要なWeb施策をまとめて相談できます"
            description="新規制作から既存サイトの改善、SNSと問い合わせ導線の接続まで、経営課題に合わせて組み合わせます。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article
                className={`h-full rounded-[2rem] border p-6 shadow-2xl transition hover:-translate-y-1 ${service.cardClass}`}
              >
                <span
                  className={`mb-8 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${service.tagClass}`}
                >
                  {service.tag}
                </span>
                <h3 className="mb-4 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="text-sm leading-8 text-slate-600">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-sky-300/15 bg-slate-950/55 p-6 shadow-2xl shadow-sky-950/20 md:p-10">
          <Reveal>
            <SectionHeading
              eyebrow="Results"
              title="数字で見る実績"
              description="問い合わせ獲得、運用効率、公開スピードを重視して、経営判断しやすいWeb施策に落とし込みます。"
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center">
                  <p className="text-4xl font-black text-sky-200 md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Cases"
            title="導入事例"
            description="業種ごとの課題に合わせて、必要な情報設計と導線改善を行います。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal key={item.industry} delay={index * 100}>
              <article className="h-full rounded-[2rem] border border-sky-300/15 bg-white/[0.05] p-7">
                <p className="mb-5 text-sm font-bold text-sky-200">{item.industry}</p>
                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                      課題
                    </p>
                    <p className="leading-8 text-slate-300">{item.issue}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                      成果
                    </p>
                    <p className="leading-8 text-white">{item.result}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Works"
            title="制作実績"
            description="公開済みの制作事例を掲載しています。業種や目的に合わせて見せ方を調整します。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {works.map((work, index) => {
            const card = (
              <article
                className={`overflow-hidden rounded-[2rem] border border-sky-300/15 bg-white/[0.05] shadow-2xl shadow-slate-950/20 ${
                  work.href
                    ? "transition hover:-translate-y-1 hover:border-sky-300/35"
                    : ""
                }`}
              >
                {work.image ? (
                  <div className="relative h-56 overflow-hidden bg-slate-950">
                    <Image
                      src={work.image}
                      alt={work.imageAlt ?? work.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <span className="absolute left-5 top-5 w-fit rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-xs font-bold text-sky-100 backdrop-blur-sm">
                      {work.category}
                    </span>
                  </div>
                ) : (
                  <div className="relative h-56 bg-gradient-to-br from-sky-300/25 via-blue-500/20 to-slate-950 p-5">
                    <div className="absolute inset-6 rounded-3xl border border-white/15 bg-slate-950/30" />
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-sky-100">
                        {work.category}
                      </span>
                      <div>
                        <div className="mb-3 h-3 w-28 rounded-full bg-sky-200/60" />
                        <div className="h-3 w-44 rounded-full bg-white/25" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">{work.title}</h3>
                  <p className="text-sm leading-8 text-slate-300">{work.description}</p>
                  {work.href ? (
                    <p className="mt-4 text-sm font-semibold text-sky-200">
                      サイトを見る →
                    </p>
                  ) : null}
                </div>
              </article>
            );

            return (
              <Reveal key={work.title} delay={index * 100}>
                {work.href ? (
                  <a href={work.href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Voices"
            title="お客さまの声"
            description="制作だけでなく、経営課題の整理から公開後の改善まで相談できる点を評価いただいています。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {voices.map((voice, index) => (
            <Reveal key={voice.name} delay={index * 100}>
              <figure className="h-full rounded-[2rem] border border-sky-300/15 bg-slate-950/50 p-7">
                <blockquote className="text-lg leading-10 text-white">
                  &quot;{voice.comment}&quot;
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-sky-200">
                  {voice.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="導入の流れ"
            description="初回相談から公開後の改善まで、必要なステップを明確にして進行します。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 80}>
              <div className="relative rounded-3xl border border-sky-300/15 bg-white/[0.05] p-5 text-center">
                <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-sky-300 text-lg font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="font-bold text-white">{step}</p>
                <p className="mt-3 text-xs leading-7 text-slate-400">
                  {index === 0
                    ? "課題や目標を整理"
                    : index === 1
                      ? "導線と優先順位を設計"
                      : index === 2
                        ? "デザインと実装"
                        : index === 3
                          ? "公開と初期確認"
                          : "分析と改善提案"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                FAQ
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                よくある質問
              </h2>
              <p className="mt-5 text-base leading-9 text-slate-300">
                検討段階でよくいただく質問をまとめました。具体的な費用や範囲は無料相談で確認できます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-sky-300/15 bg-white/[0.05] p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-300/20 to-blue-900/20 p-6">
              <div className="grid aspect-square place-items-center rounded-[1.5rem] border border-white/15 bg-slate-950/50 text-center">
                <div className="grid place-items-center">
                  <div className="relative grid size-48 place-items-center overflow-hidden rounded-full border-4 border-sky-200/70 bg-gradient-to-br from-sky-100 via-sky-300 to-blue-900 shadow-2xl shadow-sky-950/50">
                    <div className="absolute inset-3 rounded-full border border-white/35" />
                    <svg
                      aria-label="Mikeyのプロフィール写真"
                      className="relative z-10 size-36 drop-shadow-2xl"
                      role="img"
                      viewBox="0 0 160 160"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="80" cy="82" fill="#fff7ed" r="52" />
                      <path
                        d="M36 70c4-28 22-46 44-46s40 18 44 46c-13-9-27-14-44-14S49 61 36 70Z"
                        fill="#fb7185"
                      />
                      <circle cx="45" cy="87" fill="#f9a8d4" r="16" />
                      <circle cx="115" cy="87" fill="#f9a8d4" r="16" />
                      <circle cx="62" cy="78" fill="#0f172a" r="6" />
                      <circle cx="98" cy="78" fill="#0f172a" r="6" />
                      <circle cx="80" cy="92" fill="#ef4444" r="12" />
                      <path
                        d="M58 108c12 14 32 14 44 0"
                        fill="none"
                        stroke="#0f172a"
                        strokeLinecap="round"
                        strokeWidth="6"
                      />
                      <path
                        d="M52 53c10-14 46-14 56 0"
                        fill="none"
                        stroke="#facc15"
                        strokeLinecap="round"
                        strokeWidth="8"
                      />
                      <circle cx="80" cy="30" fill="#facc15" r="10" />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg font-black text-white">
                    Mikey
                  </p>
                  <p className="mt-1 text-sm font-semibold text-sky-200">
                    Profile Photo
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Profile
              </p>
              <p className="mb-4 text-2xl font-black text-white md:text-3xl">
                Mikey
              </p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                経営者の言葉を、成果につながるWeb導線へ。
              </h2>
              <p className="mt-6 leading-9 text-slate-300">
                Web制作、UI設計、SNS導線設計、業務自動化を横断して支援しています。
                きれいなサイトで終わらせず、会社の強みが伝わり、相談につながる仕組みを一緒に作ることを大切にしています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Next.js", "Tailwind CSS", "UI設計", "SNS連携", "チャットボット", "改善運用"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-6 py-32 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Contact
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                まずは現在の課題をお聞かせください
              </h2>
              <p className="mt-5 text-base leading-9 text-slate-300">
                新規制作、改修、SNS連携、チャットボットなど、必要な範囲が決まっていなくても相談できます。
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  hello@example.com
                </p>
                <p>
                  <span className="font-semibold text-white">Tel:</span>{" "}
                  03-0000-0000
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Instagram", "LINE", "X"].map((sns) => (
                    <a
                      key={sns}
                      href="#"
                      className="rounded-full border border-white/15 px-4 py-2 font-semibold text-white transition hover:border-sky-200 hover:bg-sky-300/10"
                    >
                      {sns}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
