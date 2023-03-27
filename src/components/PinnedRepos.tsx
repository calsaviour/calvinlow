import type { PinnedRepos } from "../lib/types";
import { FiArrowRight } from "react-icons/fi";

export default function PinnedRepos(props: { pinnedRepos: PinnedRepos }) {
  return (
    <section className="prose prose-a:no-underline mb-10 flex w-full flex-col gap-6 z-10">
      <h2
        className="m-0 text-[2.5rem] font-extrabold leading-none text-zinc-200"
        id="projects"
      >
        My Projects
      </h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:justify-center">
        {props.pinnedRepos.map((repo, index) => (
          <a
            key={index}
            href={`${repo.url}`}
            target="_blank"
            rel="noreferrer"
            className="gap-4 stone-500 p-1 border rounded-lg border-zinc-500 duration-300 lg:hover:scale-[103%] lg:hover:border-[#4d9375]"
          >
            <div className="flex h-full cursor-pointer flex-col justify-between p-4 pb-2">
              <div>
                <h3 className="m-0 mb-6 w-full text-lg font-semibold leading-none tracking-tight text-green-500">
                  {repo.name}
                </h3>
                <p className="m-0 mb-6 w-full text-sm tracking-tight text-zinc-700 dark:text-zinc-300">
                  {repo.description}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-purple text-sm">
                  <p className="m-0">{repo.language}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/neolawz?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="group flex cursor-pointer items-center gap-2 text-zinc-500 no-underline duration-200 hover:text-zinc-700 dark:hover:text-zinc-400 "
      >
        View More{" "}
        <span className="duration-200 group-hover:translate-x-1">
          <FiArrowRight />
        </span>
      </a>
    </section>
  );
}
