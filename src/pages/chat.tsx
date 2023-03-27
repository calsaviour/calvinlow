import NavBar from "~/components/Nav";
import { ChatBot } from "~/components/chat/ChatBot";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Chat() {
  const currentRoute = useRouter().pathname;

  return (
    <main className="font-clash max-h-auto bg-black-500 relative flex min-h-screen flex-col items-center overflow-x-hidden selection:bg-violet-800/30">
      <section className="flex w-full flex-col gap-3 ">
        <div className="lg:w-2/3">
          <Link href="/" className="p-2 text-2xl text-green-500 lg:hidden">
            Home
          </Link>
          <div className="flex h-full w-full md:w-2/3">
            <div className="fixed left-0 z-50 hidden h-full w-[6%] md:block lg:block">
              <NavBar path={currentRoute} />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-20 lg:float-right pt-5">
            <ChatBot />
          </div>
        </div>
      </section>
    </main>
  );
}
