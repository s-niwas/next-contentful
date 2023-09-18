import BlogCard from "./BlogCard";

export default function BlogListing({ posts }: any) {
  return (
    <ul className="mx-auto  grid max-w-7xl gap-4 flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: any) => {
        return (
          <li
            key={post.sys.id}
            className="md:mb-4 flex justify-center rounded-xl border-[1px]   
      bg-offset shadow-sm hover:translate-y-[-6px]  hover:shadow-lg hover:transition-all hover:duration-200 hover:ease-out"
          >
            <BlogCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}
