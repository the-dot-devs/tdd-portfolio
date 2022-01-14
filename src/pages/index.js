import Head from "next/head";
import Bios from "../components/Bios/Bios";
import Contact from "../components/Contact/Contact";

import Intro from "../components/Intro/intro";
import Services from "../components/Services/Services";
import Technologies from "../components/Technologies/Technologies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Dot Devs</title>
        <meta
          name="description"
          content="Software and Web Development Services"
        />
        <meta
          name="keywords"
          content="Software, Mobile, Web, Development, Programming"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      </Head>

      <main className="">
        <Intro />
        <div className="relative">
          <div className="w-full h-screen absolute bg-circuit-flipped" />
          <div className="p-6 ">
            <Services />
            <Technologies />
            <Bios />
            <Contact />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
