import Layout from "../components/Layout";
import Footer from "../components/Footer";
import LinksComponent from "../components/Links";

export default function Links() {
  return (
    <Layout emoji="🔗" description="all of my links in one place">
      <div className="relative flex h-full min-h-screen w-full flex-col items-center p-8 mb-20 lg:mb-0 hero-bg">
        <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <div>
            <h1 className="mb-3 leading-none text-zinc-900 dark:text-zinc-200">
              Links
            </h1>
            <p className="m-0 leading-tight text-zinc-800 dark:text-zinc-400">
              All my profile links to find me on the web.
            </p>
          </div>
          <LinksComponent />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
