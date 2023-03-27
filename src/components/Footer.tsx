export default function Footer() {
  return (
    <footer className="flex w-full prose absolute bottom-0 py-4 lg:px-0 md:px-8 px-8">
      <p className="text-zinc-400 m-0 text-sm">
        <a
          className="dark:text-zinc-300 text-zinc-800 hover:text-zinc-200 duration-300 underline decoration-dotted underline-offset-4"
          href="https://opensource.org/licenses/MIT"
          target={"_blank"}
          rel="noreferrer"
        >
          MIT
        </a>{" "}
        2023-present &#169;{" "}
        <a
          className="text-green-500 hover:text-zinc-200 duration-300 underline decoration-dotted underline-offset-4"
          href="https://github.com/neolawz"
          target={"_blank"}
          rel="noreferrer"
        >
          neolawz
        </a>
      </p>
    </footer>
  );
}
