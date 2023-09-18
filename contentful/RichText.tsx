import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import HandleLinks from "./HandleLinks";
import Author from "./Author";

export default function RichText({ richText }: any) {
  const options = {
    renderNode: {
      [BLOCKS.QUOTE]: (node, children) => {
        return (
          <div className="pl-6 mb-4 border-l-4 border-black border-opacity-30">
            {children}
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const links = node.content.find((item) => {
          return item.nodeType === "embedded-entry-inline";
        });

        const codeBlock = node.content[0].marks.find(
          (item) => item.type === "code"
        );
        if (codeBlock) {
          return (
            <pre className="bg-gray-200 p-2 rounded-lg md:max-w-2xl lg:max-w-4xl xl:max-w-full overflow-x-auto">
              <code>{children}</code>
            </pre>
          );
        } else if (links) {
          return <HandleLinks links={node} />;
        } else {
          return <div className="my-4">{children}</div>;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const asset = node.data.target.fields.file;
        if (asset.contentType === "image/png") {
          return (
            <div className="flex justify-center ">
              <img src={asset.url} alt={asset.fileName} className="h-96" />
            </div>
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // console.log(node. data.target, "embedded entry");
        return (
          <Author
            author={node.data.target}
            publishedDate="25/09/2022"
            readTime="3"
          />
        );
      },
    },
  };
  console.log(richText);
  return (
    <div
      id="richtextcontent"
      className="prose-md  bg-gray-100 text-justify prose-headings:font-heading prose-headings:leading-tighter prose-lg relative text-justify text-xs dark:prose-invert lg:prose-xl prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-red-500 prose-li:list-disc prose-img:rounded-md prose-img:shadow-lg dark:prose-a:text-blue-400 sm:text-base  md:mt-0 "
    >
      {documentToReactComponents(richText, options)}
    </div>
  );
}
