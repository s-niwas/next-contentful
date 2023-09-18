import Layout from "@/components/layout";
import BlogListing from "@/contentful/BlogListing";
import { createClient } from "contentful";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  });
  const res = await client.getEntries({ content_type: "blogs" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Blogs({ blogs }) {
  return (
    <Head>
      <Layout>
        <header className="text-center mx-16">
          <Link href="/">
            <h1 className="p-5 leading-tighter font-heading font-bold tracking-tighter text-4xl md:text-5xl">
              Incresco Insider
            </h1>
          </Link>
        </header>
        <section className="flex mx-auto max-w-7xl px-6 py-16 justify-center">
          <BlogListing posts={blogs} />
        </section>
      </Layout>
    </Head>
  );
}
