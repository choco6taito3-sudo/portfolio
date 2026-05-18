import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Growth Partner | 中小企業向けWeb制作・SNS連携",
  description:
    "ホームページ作成、改修、SNS連携、チャットボット構築で中小企業の問い合わせ獲得を支援するポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
