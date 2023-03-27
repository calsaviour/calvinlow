import type { RecentBlogs } from "../lib/types";
import { FiHeart, FiArrowRight } from "react-icons/fi";

export default function RecentBlogs(props: { recentBlogs: RecentBlogs }) {
  return (
    <section className="prose mb-20 flex w-full flex-col gap-6 prose-a:no-underline">
      <h2
        className="m-0 text-[2.5rem] font-extrabold leading-none text-zinc-900 dark:text-zinc-200"
        id="blogs"
      >
        Recent Blogs
      </h2>
      <div className="grid w-full grid-cols-1 gap-6 sm:justify-center md:grid-cols-3 lg:grid-cols-3">
        {props.recentBlogs.map((post) => (
          <a
            key={post.slug}
            href={`${post.url}`}
            target="_blank"
            rel="noreferrer"
            className="stone-500 gap-4 rounded-lg border border-zinc-500 p-1 duration-300 hover:scale-[103%] hover:border-[#4d9375]"
          >
            <div className="flex h-full cursor-pointer flex-col justify-between p-4 pb-2">
              <div>
                <h3 className="m-0 mb-6 w-full text-lg font-semibold tracking-tight text-green-500 no-underline">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-purple font-semibold">
                <FiHeart />
                <p className="m-0">{post.public_reactions_count}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://dev.to/neolawz"
        target="_blank"
        rel="noreferrer"
        className="group flex cursor-pointer items-center gap-2 text-zinc-500 no-underline duration-200 hover:text-zinc-700 dark:hover:text-zinc-400"
      >
        Read More{" "}
        <span className="duration-200 group-hover:translate-x-1">
          <FiArrowRight />
        </span>
      </a>
    </section>
  );
}
