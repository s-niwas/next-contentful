import { getFormattedDate } from "@/utils/common";
export default function Author({ author, publishedDate, readTime }: any) {
  const { name, designation, profileImage, linkedInUrl } = author.fields;
  const { title, file } = profileImage.fields;
  return (
    <div className="mx-10 mb-8 flex max-w-5xl flex-col justify-center border-b-2 border-red-500 md:mx-20 xl:mx-auto">
      <div className="font-light text-[#57606a] text-sm">Author</div>
      <div className="my-4 mt-2 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="flex not-italic text-black text-base">
          <img
            className="mr-2 mt-2 h-16 w-16 rounded-full shadow-md shadow-gray-400 min-[375px]:mr-4 sm:mt-0"
            src={file.url}
            alt={title}
          />
          <div>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="author"
              className="mr-3 inline-flex items-center text-sm"
            >
              <span className="font-bold text-xs hover:underline min-[375px]:text-base">
                {name}
              </span>
            </a>
            <p className="font-light opacity-80 text-xs hover:no-underline min-[375px]:text-sm">
              {designation}
            </p>
            <div className="mb-2 block flex-col text-xs sm:hidden">
              <time
                dateTime={String(publishedDate)}
                className="text-[#57606a] opacity-80"
              >
                {getFormattedDate(publishedDate)}
              </time>
              <div className="items-center text-[#57606a] opacity-80">
                {readTime} min read
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-row justify-center gap-7 font-light text-xs">
            <time
              dateTime={String(publishedDate)}
              className="text-[#57606a] opacity-80"
            >
              {getFormattedDate(publishedDate)}
            </time>
            <div className="items-center border-l-[1px] border-[#d0d7de] pl-7 text-[#57606a] opacity-80">
              {readTime} min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
