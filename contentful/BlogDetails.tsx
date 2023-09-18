import Author from "./Author";
import RichText from "./RichText";
import Tags from "./Tags";

export default function BlogDetails({ blog }: any) {
  const {
    heading,
    richText,
    tags,
    category,
    publishedOn,
    readTime,
    bannerImage,
    authorLink,
  } = blog.fields;
  const { title, description, file } = bannerImage.fields;

  return (
    <section className="mx-auto bg-gray-100 pb-10 min-[375px]:pb-5">
      <section className="mx-auto w-full">
        <article>
          <header className="h-fit w-fit">
            <div className="mb-4 flex flex-col">
              <div className="w-screen bg-red-500 flex">
                <div className="mx-10 flex max-w-5xl flex-col justify-center pt-20 md:mx-20 xl:mx-auto">
                  <div className="my-4 md:my-7 flex flex-col text-xs sm:flex-row sm:items-center">
                    <a
                      className="transform w-fit cursor-pointer rounded-[100px] border-none bg-white px-6 py-2 font-semibold text-white shadow-md transition duration-200 ease-in-out text-xs hover:scale-95"
                      href={`/category/${category
                        .toLowerCase()
                        .replaceAll(" ", "-")}/`}
                    >
                      <p className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text font-bold text-transparent text-xs sm:text-xs">
                        {category}
                      </p>
                    </a>
                  </div>

                  <h1 className="font-heading font-bold text-white text-xl md:text-4xl">
                    {title}
                  </h1>
                  <p className="my-2 mb-7 max-w-4xl font-extralight text-white text-xs sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </header>
          <Author
            author={authorLink}
            publishedDate={publishedOn}
            readTime={readTime}
          />
          <div className="relative mx-10 flex max-w-5xl flex-col  md:mx-20 md:flex-row xl:mx-auto">
            <div id="content">
              <RichText richText={richText} />
              <Tags tags={tags} />
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
