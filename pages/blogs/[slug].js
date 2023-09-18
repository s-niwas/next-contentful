import BlogDetails from "@/contentful/BlogDetails";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogs" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogs",
    "fields.slug": params.slug,
  });

  return {
    props: {
      blog: items[0],
    },
  };
};

export default function BlogDetail({ blog }) {
  return <BlogDetails blog={blog} />;
}
