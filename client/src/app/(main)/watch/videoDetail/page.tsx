/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Self Import
import CardVideoDetail from './card-video-detail';
import CardComment from './card-comment';
import AddComment from './add-comment';
import DescriptionVideo from './description-video';
import ChannelInfo from './channel-info';
import { videos } from './mock';

const VideoDetail = () => (
  <div className="flex gap-6 mx-12 my-6">
    <div className="flex-3 flex-col">
      <div>
        <iframe
          className="rounded-xl"
          width={950}
          height={480}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/ZLk1qsz1B8s?modestbranding=1&rel=0&showinfo=0&autohide=1&controls=1"
        />
        <p className="font-bold text-xl mt-4">
          Beautiful Piano Music 🌿 Bamboo, Relaxing Music, Nature Sounds, Relieves Stress Music, Calming music
        </p>
        <ChannelInfo />
        <DescriptionVideo />
        <div className="flex flex-col gap-3 mt-4 p-4">
          <p className="font-semibold text-2xl">129 bình luận</p>
          <AddComment />
          <CardComment />
        </div>
      </div>
    </div>
    <div className="flex-2 px-4">
      {videos.map((video) => (
        <CardVideoDetail video={video} key={video._id} />
      ))}
    </div>
  </div>
);

export default VideoDetail;
