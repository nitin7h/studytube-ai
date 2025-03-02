import React from "react";

interface VideoPlayerProps {
  videoUrl: string; // Full YouTube URL: "https://www.youtube.com/watch?v=TlB_eWDSMt4"
}
const YouTube: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  let videoId;
  if (videoUrl.includes("youtube.com")) {
    videoId = videoUrl.split("v=")[1]?.split("&")[0];
  } else if (videoUrl.includes("youtu.be")) {
    videoId = videoUrl.split("youtu.be/")[1]?.split("?")[0];
  }

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTube;
