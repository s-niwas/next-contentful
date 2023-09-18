const getVideoType = (url: any) => {
  if (url.includes("youtube.com")) {
    return "youtube";
  } else {
    return "normal";
  }
};

export default function HandleLinks({ links }: any) {
  const link = links.content.find((item: any) => {
    return item.nodeType === "embedded-entry-inline";
  });
  const videoUrl = link.data.target.fields.video;

  const videoType = getVideoType(videoUrl);
  switch (videoType) {
    case "youtube":
      return (
        <div className="flex justify-center">
          <iframe
            title="YouTube Video"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          ></iframe>
        </div>
      );
    default:
      return (
        <div className="flex justify-center">
          <video
            src={videoUrl}
            controls={true}
            // allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            // allowFullScreen
            className="aspect-video w-full"
          ></video>
        </div>
      );
  }
}
