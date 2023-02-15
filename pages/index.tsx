import type { NextPage } from "next";
import Head from "next/head";
import { Landing } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Donation for African students</title>
        <meta
          name="description"
          content="This is the donation application for African students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
};

export default Home;
