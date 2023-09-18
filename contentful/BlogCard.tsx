import Link from "next/link";

export default function BlogCard({ post }: any) {
  const {
    heading,
    slug,
    richText,
    bannerImage,
    category,
    publishedOn,
    readTime,
  } = post.fields;
  const { file, title, description } = bannerImage.fields;
  return (
    <main className="flex flex-col mx-auto grid max-w-md md:max-w-none ">
      <div className="relative h-52 overflow-hidden rounded  shadow-lg   ">
        <Link href={`/blogs/${slug}/`}>
          {file.url && (
            <img
              src={file.url}
              className="rounded object-cover h-full w-full shadow-lg"
              alt={title}
              loading="lazy"
              decoding="async"
            />
          )}
        </Link>
      </div>

      <div className=" p-5 flex flex-col justify-between ">
        <div className="flex pb-2">
          <a
            className="w-fit capitalize"
            href={`/category/${category.toLowerCase().replaceAll(" ", "-")}/`}
          >
            <p className="w-fit border-b-2 border-red-500 capitalize text-xs hover:text-red-500">
              {category}
            </p>
          </a>
        </div>
        <a
          className="transition duration-200 ease-in hover:text-red-500"
          href={`/blogs/${slug}/`}
        >
          <h2 className="font-heading my-1 font-bold leading-tight text-sm">
            {heading}
          </h2>
        </a>
        <div className="my-2 line-clamp-3">
          {description && (
            <p className="flex-grow select-none text-offset text-xs ">
              {description}
            </p>
          )}
        </div>
      </div>
      {/*<div className="m-4 mb-6 flex flex-col justify-end xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-row items-center">
            <img
              className="mr-2 h-10 w-10 rounded-full text-xs"
              src={author.content.profileImage.filename}
              alt={author?.name}
            />
            <div className="flex flex-col">
              <a
                className="font-bold capitalize text-xs hover:underline xl:text-sm"
                //   href=`/author/${author?.name?.toLowerCase().replaceAll(' ', '-')}/`
              >
                {author?.name}
              </a>
              <p className="block font-extralight text-xs xl:hidden">
                <time datetime={String(publishedDate)}>
                  {getFormattedDate(publishedDate)}
                </time>
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-3 font-extralight text-xs xl:block">
            <time datetime={String(publishedDate)}>
              {getFormattedDate(publishedDate)}
            </time>
          </div>
        </div> */}
    </main>
  );
}
