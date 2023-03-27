import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiTerminal,
} from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { useRouter } from "next/router";

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
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
  {
    name: "Chat",
    slug: "/chat",
    icon: GiBrain,
  },
];

export default function MobileNavBar({ path }: { path: string }) {
  const router = useRouter();

  return (
    <div className="flex h-full min-h-full min-w-full items-center justify-center gap-4 rounded-lg py-1 shadow-xl bg-zinc-900 border-green-500">
      <div className="flex justify-evenly w-full">
        {NavbarItems.map((item, index) => {
          return (
            <button
              key={index}
              className="flex h-16 w-full items-center justify-center p-1 rounded lg:hover:bg-violet-700"
            >
              {path === item.slug ? (
                <item.icon
                  size="2rem"
                  className="cursor-pointer rounded py-2 h-4/5 w-4/5 text-violet-700 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                  onClick={() => router.push(item.slug)}
                />
              ) : (
                <item.icon
                  size="2rem"
                  className="cursor-pointer rounded py-2 h-4/5 w-4/5 text-zinc-100 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                  onClick={() => router.push(item.slug)}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
