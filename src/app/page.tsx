import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
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
  {
    title: "ツール作成",
    description:
      "業務効率化や運用に必要なWebアプリ・ダッシュボードを、目的に合わせて設計から開発します。",
    tag: "Tool",
    cardClass:
      "border-teal-200/80 bg-gradient-to-br from-teal-300 via-cyan-200 to-sky-100 shadow-teal-950/30 hover:shadow-teal-500/35",
    tagClass: "bg-slate-950 text-teal-100",
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
    title: "引き寄せる逹磨",
    category: "サービスLP（架空デモ）",
    description:
      "Next.js + Tailwind で構築。6色のカラーバリエーション、コンセプト・料金・FAQ・お問い合わせ導線を実装。",
    href: "https://lp-daruma.vercel.app/",
    image: "/works/lp-daruma.png",
    imageAlt: "引き寄せる逹磨のトップページ",
  },
  {
    title: "みずいろクリニック 採用LP",
    category: "採用LP（架空デモ）",
    description:
      "Next.js + Tailwind で構築。募集職種、働く魅力、1日の流れ、募集要項、応募導線を実装。",
    href: "https://lp-mizuiro-clinickyuuzinn.vercel.app/",
    image: "/works/lp-mizuiro-clinic.png",
    imageAlt: "みずいろクリニック採用LPのトップページ",
  },
  {
    title: "焼き鳥絵画展",
    category: "イベントLP（架空デモ）",
    description:
      "Next.js + Tailwind で構築。コンセプト、作品紹介、スケジュール、FAQ、予約導線を実装。",
    href: "https://lp-yakitorikaiga.vercel.app/",
    image: "/works/lp-yakitorikaiga.png",
    imageAlt: "焼き鳥絵画展のトップページ",
  },
];

const snsWorks: Work[] = [
  {
    title: "IG Ops",
    category: "SNS連携",
    description:
      "Next.js + Tailwind で構築。Instagram運用ダッシュボード、フォロワー分析、競合分析、予約投稿、ハッシュタグ管理、AIレポートを実装。",
    href: "https://instagram-web-three.vercel.app/",
    image: "/works/instagram-web-three.png",
    imageAlt: "IG Ops Instagram運用ツールのダッシュボード",
  },
];

const otherWorks: Work[] = [
  {
    title: "Omoide",
    category: "プライベート型思い出共有アプリ",
    description:
      "プライベートな世界の思い出を記録・共有できるWebアプリ。認証、Googleログイン、招待制の空間設計を実装。",
    href: "https://omoide-demo.vercel.app/",
    image: "/works/omoide.png",
    imageAlt: "Omoideのログイン画面",
  },
  {
    title: "勤怠管理",
    category: "プライベート型勤怠管理アプリ",
    description:
      "Google認証で利用できる勤怠管理Webアプリ。出退勤記録、勤怠データの確認・管理をシンプルなUIで実装。",
    href: "https://private-kintaikanri.web.app/",
    image: "/works/kintaikanri.png",
    imageAlt: "勤怠管理のログイン画面",
  },
];

const steps = [
  {
    title: "相談（ヒアリング）",
    description: "現状や目標、お困りごとを丁寧にお聞きします。",
  },
  {
    title: "課題整理",
    description: "優先順位と進め方を一緒に整理します。",
  },
  {
    title: "設計",
    description: "情報設計とUIを、目的に沿って設計します。",
  },
  {
    title: "制作",
    description: "デザインと実装を進め、完成形を形にします。",
  },
  {
    title: "公開",
    description: "公開と初期確認まで伴走します。",
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

function WorkGrid({ items }: { items: Work[] }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((work, index) => {
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
                <p className="mt-4 text-sm font-semibold text-sky-200">サイトを見る →</p>
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
            お問い合わせ
          </a>
        </div>

        <div className="mx-auto max-w-4xl pt-28 text-center md:pt-36">
          <Reveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Welcome
            </p>
            <h1 className="bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-6xl lg:text-7xl">
              お越し頂き、
              <br />
              ありがとうございます
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-10 text-slate-300">
              このページでは、私がどのようにWeb制作やツール開発を進めているかを、
              上から順にお見せします。ゆっくりご覧ください。
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#profile"
                className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-sky-500/25 transition hover:-translate-y-1"
              >
                プロフィールから見る
              </a>
              <a
                href="#works"
                className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition hover:border-sky-200/60 hover:bg-white/10"
              >
                制作実績を見る
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="profile" className="px-6 py-32 md:px-10 md:py-36">
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
                  <p className="mt-5 text-lg font-black text-white">Mikey</p>
                  <p className="mt-1 text-sm font-semibold text-sky-200">
                    Web Growth Partner
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Chapter 01 — Profile
              </p>
              <p className="mb-4 text-2xl font-black text-white md:text-3xl">Mikey</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                経営者の言葉を、成果につながるWeb導線へ。
              </h2>
              <p className="mt-6 leading-9 text-slate-300">
                Web制作、UI設計、SNS導線設計、ツール開発を横断して支援しています。
                きれいなサイトで終わらせず、会社の強みが伝わり、相談につながる仕組みを一緒に作ることを大切にしています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "Tailwind CSS",
                  "UI設計",
                  "SNS連携",
                  "ツール作成",
                  "チャットボット",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Chapter 02 — Style"
            title="進め方"
            description="お仕事は、相談から公開までこの流れで進めます。一つひとつ丁寧に、目的に沿って形にしていきます。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="relative h-full rounded-3xl border border-sky-300/15 bg-white/[0.05] p-5 text-center">
                <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-sky-300 text-lg font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="font-bold text-white">{step.title}</p>
                <p className="mt-3 text-xs leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Chapter 03 — Services"
            title="対応できること"
            description="ホームページの新規制作・改修から、SNS連携、チャットボット、業務ツールまで。必要な範囲を組み合わせてご相談いただけます。"
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      <section id="sns-works" className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Chapter 04 — SNS Works"
            title="SNS連携の実績"
            description="SNSとホームページをつなぐ導線設計・実装の事例です。"
          />
        </Reveal>
        <WorkGrid items={snsWorks} />
      </section>

      <section id="works" className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Chapter 05 — Works"
            title="制作実績"
            description="公開済みの制作事例を掲載しています。業種や目的に合わせて見せ方を調整します。"
          />
        </Reveal>
        <WorkGrid items={works} />
      </section>

      <section className="px-6 py-32 md:px-10 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Chapter 06 — Other Works"
            title="その他作品"
            description="クライアント向けサイト以外の、自主制作アプリや実験的なプロジェクトです。"
          />
        </Reveal>
        <WorkGrid items={otherWorks} />
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Closing
            </p>
            <h2 className="bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
              御覧いただき、
              <br />
              ありがとうございました
            </h2>
            <p className="mt-6 text-base leading-9 text-slate-300 md:text-lg">
              ここまでお読みいただき、ありがとうございます。
              ご興味をお持ちいただけましたら、お気軽にお問い合わせください。
            </p>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="px-6 pb-32 pt-8 md:px-10 md:pb-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Contact
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                お問い合わせ
              </h2>
              <p className="mt-5 text-base leading-9 text-slate-300">
                新規制作、改修、SNS連携、ツール作成など、必要な範囲が決まっていなくても相談できます。
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href="mailto:choco6taito3@gmail.com"
                    className="transition hover:text-sky-200"
                  >
                    choco6taito3@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Tel:</span>{" "}
                  <a href="tel:09037767604" className="transition hover:text-sky-200">
                    090-3776-7604
                  </a>
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/_mikeypandemic?igsh=MTczYWc1aGtjNjk5YQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-lg shadow-pink-950/30 transition hover:scale-105 hover:shadow-xl hover:shadow-pink-950/40"
                  >
                    <svg
                      aria-hidden="true"
                      className="size-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://line.me/ti/p/nhwZ5KWpav"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LINE"
                    className="inline-flex size-14 items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg shadow-emerald-950/30 transition hover:scale-105 hover:shadow-xl hover:shadow-emerald-950/40"
                  >
                    <svg
                      aria-hidden="true"
                      className="size-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </a>
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
