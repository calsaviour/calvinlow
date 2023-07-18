/* eslint-disable @typescript-eslint/no-unused-vars */

import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./Nav";
import MobileNavBar from "./MobileNav";
//import { useEffect, useRef } from "react";
// import { loadCursor } from "../lib/cursor";

export default function Layout({
  children,
  description,
  emoji,
  image,
}: {
  // https://stackoverflow.com/questions/62382324/react-typescript-this-jsx-tags-children-prop-expects-a-single-child-of-type
  children?: JSX.Element | JSX.Element[];
  description: string;
  emoji: string;
  image?: string;
}) {
  const currentRoute = useRouter().pathname;
  // const ballRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (typeof window === "undefined" || !ballRef.current) {
  //     return;
  //   }

  //   return loadCursor(ballRef.current);
  // }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href={`https://fmj.asrvd.me/${emoji}`}></link>
        <title>
          {currentRoute === "/"
            ? "Calvin // Software Engineer"
            : `Law // ${currentRoute.slice(1)}`}
        </title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#121212" />
        <meta property="og:site_name" content="Calvin" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
      </Head>
      <main className="font-clash max-h-auto bg-black-500 relative flex min-h-screen flex-col items-center overflow-x-hidden selection:bg-violet-800/30">
        <div className="flex h-full w-full md:w-2/3">
          <div className="fixed left-0 z-50 hidden h-full w-[6%] md:block lg:block">
            <NavBar path={currentRoute} />
          </div>
          <div className="fixed bottom-0 z-50 block w-full pt-4 md:hidden lg:hidden">
            <MobileNavBar path={currentRoute} />
          </div>
          {children}
        </div>
      </main>
      {/* <div
        ref={ballRef}
        className="ball-transitions pointer-events-none fixed z-[1000] h-6 w-6 rounded-full bg-zinc-800/20 dark:bg-zinc-200/20 shadow-md duration-200"
      /> */}
    </div>
  );
}
