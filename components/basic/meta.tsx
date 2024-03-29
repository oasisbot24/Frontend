import Head from "next/head";
import { NAME } from "@lib/constants";
import Script from "next/script";

const Meta = () => {
  const googleFunction =
    " \
    window.dataLayer = window.dataLayer || []; \
    function gtag(){dataLayer.push(arguments);} \
    gtag('js', new Date()); \
    gtag('config', 'G-BN5LDJV7MM');";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="ALL" />
      <meta name="title" content="OASIS" />
      <meta
        name="description"
        content="OASIS : Your Optimus Bot, 오아시스 봇으로 가상화폐 자동매매를 경험해보세요."
      />
      <meta name="theme-color" content="#3AB4F2" />
      <meta
        name="keywords"
        content="OASIS,OASIS BOT,코인,비트코인,가상화폐,봇,자동매매,NFT,메타버스"
      />
      <meta name="author" content="DeveloperRyou" />
      <meta name="reply-to" content="teamprivateclub@gmail.com" />
      <meta name="content-language" content="kr" />
      <meta name="content-language" content="en" />
      <meta property="og:url" content="https://oasisbot24.com/" />
      <meta property="og:url" content="https://home.oasisbot24.com/" />
      <meta property="og:title" content="OASIS" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/static/logo/logo_share.jpg" />
      <meta
        property="og:description"
        content="OASIS : Your Optimus Bot, 오아시스 봇으로 가상화폐 자동매매를 경험해보세요."
      />
      <meta name="twitter:title" content="OASIS" />
      <meta
        name="twitter:description"
        content="OASIS : Your Optimus Bot, 오아시스 봇으로 가상화폐 자동매매를 경험해보세요."
      />
      <meta name="twitter:image" content="/static/logo/logo_share.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="naver-site-verification"
        content="40eb312ac05c49dfd059663a8b2c73331ee2ffea"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BN5LDJV7MM"
      ></script>
      <script dangerouslySetInnerHTML={{ __html: googleFunction }}></script>

      <link rel="icon" href="/static/icon/favicon.svg" />
      <link rel="apple-touch-icon" href="/static/icon/favicon.svg" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,user-scalable=no"
      />

      <title>{NAME}</title>
    </Head>
  );
};

export default Meta;
