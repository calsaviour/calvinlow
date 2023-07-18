/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  FiHome,
  FiClock,
  FiPaperclip,
} from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const NavbarItems = [
  {
    name: "Home",
    slug: "/",
    icon: FiHome,
  },
  {
    name: "About",
    slug: "/about",
    icon: FaUserAstronaut,
  },
  {
    name: "Current",
    slug: "/current",
    icon: FiClock,
  },
  {
    name: "All-knowing Friend",
    slug: "/chat",
    icon: GiBrain,
  },
];

export default function NavBar({ path }: { path: string }) {
  const router = useRouter();
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="w-full min-h-full h-full flex flex-col justify-start items-center pt-6">
      <div className="flex flex-col gap-4 w-3/4 h-full">
        {NavbarItems.map((item, index) => {
          return (
            <div key={item.slug} className="h-1/5">
              {path === item.slug ? (
                <button
                  key={index}
                  className="relative flex w-full h-full items-center justify-center rounded shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl bg-violet-800 hover:bg-violet-800 focus:bg-violet-800"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1.5rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute left-20 min-w-full rounded bg-violet-800 p-[0.62rem] text-[0.75rem] leading-none text-zinc-200 shadow-xl">
                      {item.name}
                    </span>
                  )}
                </button>
              ) : (
                <button
                  key={index}
                  className="relative flex w-full h-full items-center justify-center rounded bg-zinc-800 shadow duration-300 ease-in-out hover:scale-110 hover:bg-violet-800 hover:shadow-xl focus:bg-violet-800"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1.5rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute left-20 rounded p-[0.62rem] text-[0.75rem] leading-none text-zinc-200 shadow-xl bg-violet-800">
                      {item.name}
                    </span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="border-r-2 border-green-500 h-full mt-4"></div>
    </div>
  )
}