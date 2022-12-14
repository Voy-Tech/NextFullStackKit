import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">Which Crypto Will Pump?</div>
        <div className="p-2" />
        <div className="border rounded-lg p-8 flex justify-between max-w-2xl items-center">
          <div className="w-16 h-16 bg-yellow-400" />
          <div className="p-8">Vs.</div>
          <div className="w-16 h-16 bg-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
