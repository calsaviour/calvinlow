import Layout from "~/components/Layout";
import Footer from "~/components/Footer";
import type { Repo, Blog } from "~/lib/types";

const Home = (props: {
  pinnedRepos: Repo[];
  latestPosts: Blog[];
}) => {
  return (
    <Layout emoji="👾" description="Calvin Low // Software Engineer">
      <div className="relative mb-20 flex h-full flex-col items-center justify-center p-8 lg:mb-0 lg:p-0 lg:pt-8 lg:pb-8 hero-bg">
        <section className="prose mb-20 mt-16 flex w-full flex-col-reverse items-start justify-between gap-4 md:mt-0 md:flex-row md:gap-8 lg:mt-0 lg:flex-row lg:gap-14">
          <div className="leading-none">
            <h2 className="m-0 text-[2.5rem] font-extrabold text-zinc-200">
              Calvin
            </h2>
            <p className="m-0 mb-4 text-zinc-300"></p>
            <p className="m-0 text-sm text-zinc-400">
              Always Be Coding
            </p>
          </div>
          <div className="min-w-fit">
            <img
              src="https://avatars.githubusercontent.com/u/4803152?v=4"
              alt="avatar"
              className="min-w-32 m-0 h-32 rounded-full shadow-xl grayscale"
            />
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 43200,
  };
}

export default Home;
