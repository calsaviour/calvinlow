import Layout from "~/components/Layout";
import Footer from "~/components/Footer";
import fs from "fs";
import showdown from "showdown";


export default function About(props: { html: string}) {
  return (
    <Layout emoji="👾" description="about">
      <div className="relative mb-20 flex h-full min-h-screen flex-col items-center p-8 lg:mb-0 hero-bg">
        <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <div
            className="prose prose-zinc w-full leading-none dark:prose-invert prose-h1:mb-0 prose-h1:text-zinc-900 prose-h2:mt-0 prose-h2:text-zinc-800 prose-h3:mt-0 prose-h3:text-zinc-800 prose-h4:mt-0 prose-h4:mb-4 prose-h4:font-normal prose-h4:text-zinc-700 prose-p:text-base prose-p:text-zinc-700 prose-a:decoration-wavy prose-a:underline-offset-2 prose-code:rounded-sm prose-code:bg-zinc-400/60 prose-code:px-1 prose-code:font-normal dark:prose-h1:text-zinc-200 dark:prose-h2:text-zinc-300 dark:prose-h3:text-zinc-400 dark:prose-h4:text-zinc-400 dark:prose-p:text-zinc-200 dark:prose-code:bg-zinc-400/20"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdown = fs.readFileSync("src/content/about.md", "utf8");
  const converter = new showdown.Converter({ metadata: true });
  const html = converter.makeHtml(markdown);

  return {
    props: {
      html,
    },
  };
}