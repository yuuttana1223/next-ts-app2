import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Layout } from "src/layouts/AppLayout";
import { SWRConfig } from "swr";
import Head from "next/head";

const fetcher = async (url: string): Promise<any> => {
  const res: Response = await fetch(url);
  if (!res.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました。");
  }
  const json = await res.json();
  return json;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Next.js with TypeScript" />
        <link rel="icon" href="/favicon.ico" />
        <title>Next.js with TypeScript</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
