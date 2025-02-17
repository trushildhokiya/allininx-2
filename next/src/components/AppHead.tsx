import Head from "next/head";

const AppHead = ({ title, ogTitle }: { title?: string; ogTitle?: string }) => {
  // Do not translate. Head attributes won't have access to i18n.
  const description = "AI Agents that Scrape Web Data for You on the Go";
  return (
    <Head>
      <title>{"Allinix: AI Agents that Scrape Web Data for You on the Go"}</title>
      <meta name="description" content={description} />
      <meta name="twitter:site" content="Allinix" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ?? "Allinix"} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={ogTitle ?? "Allinix: AI Agents that Scrape Web Data for You on the Go"} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      <link rel="mask-icon" href="/favicon.ico" />
    </Head>
  );
};

export default AppHead;
