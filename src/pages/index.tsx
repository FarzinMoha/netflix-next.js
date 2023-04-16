import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Banner from "@/components/pages/banner/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/assets/clifford.webp"
        />
      </main>
    </>
  );
}
