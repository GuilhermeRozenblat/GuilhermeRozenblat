// EmbedVideo.js
import React from "react";

const EmbedVideo = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            preload="auto"
            src="${props.src}"
            class="${props.className || ''}"
            style="width: 100%; height: 100%;"
          ></video>
        `,
      }}
    ></div>
  );
};

export default EmbedVideo;
