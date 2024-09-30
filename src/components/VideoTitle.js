import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pl-10 absolute text-white  bg-gradient-to-r from-black">
      <h1 className="pt-36 text-3xl font-bold">{title}</h1>
      <p className="py-6 w-1/4">{overview}</p>

      <div>
        <button className="bg-white px-6 py-2 rounded-md border border-black mr-4 text-black">
          Play ▶
        </button>
        <button className="bg-white px-6 py-2 rounded-md border border-black mr-4 text-black">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
