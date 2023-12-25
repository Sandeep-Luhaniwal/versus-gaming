import Header from "@/components/common/Header";
// import Wallet from "@/components/common/Wallet";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Versus</title>
      </Head>
      <Header />
      <h1 className="text-white">hey Hello</h1>
      {/* <Wallet /> */}
    </>
  )
}
