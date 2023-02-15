import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </Head>
      <body className="scroller">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
