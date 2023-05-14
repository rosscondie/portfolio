import React from 'react';

export const Video = () => {
  return (
    <div className="video-container">
      <iframe
        width="385"
        height="200"
        src="https://www.youtube.com/embed/591Hzn0-AJU"
        title="YouTube video player"
        frameborder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
