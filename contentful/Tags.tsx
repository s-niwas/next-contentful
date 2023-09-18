export default function Tags({ tags }) {
  return (
    <div className="my-5 flex max-w-5xl flex-col justify-between  lg:mx-auto ">
      <p className="mb-1 h-1 w-5 bg-black"></p>
      <div className="flex flex-col">
        <ul className="mt-3 w-full text-sm">
          {tags?.map((item) => (
            <li className="mb-4 mr-2 inline-block md:mb-4 md:mr-2" key={item}>
              <a
                className="rounded-[30px] bg-red-500 bg-opacity-10 px-3 py-1.5 font-medium capitalize leading-3 text-red-400 text-xs hover:bg-opacity-20 hover:text-red-500"
                href={`/tag/${item.toLowerCase().replaceAll(" ", "-")}/`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
