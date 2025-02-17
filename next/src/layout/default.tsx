import clsx from "clsx";
import { Metadata } from "next";
import Head from "next/head";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const DefaultLayout = (props: LayoutProps) => {
  const description = "Assemble, configure, and deploy autonomous AI Agents in your browser.";

  return (
    <div
      className={clsx(
        "flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]",
        props.centered && "items-center justify-center"
      )}
    >
      <Head>
        <title>Allinix</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="Allinix" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Allinix" />
        <meta name="twitter:description" content={description} />
        <meta property="og:title" content="Allinix: Autonomous AI in your browser 🤖" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={clsx("min-w-screen min-h-screen", props.className)}>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
