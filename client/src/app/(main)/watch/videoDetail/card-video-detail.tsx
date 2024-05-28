/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC } from 'react';

// Self Import
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Video from '@/types/video';

interface CardVideoDetailProps {
  video: Video;
}

const CardVideoDetail: FC<CardVideoDetailProps> = ({ video }) => {
  return (
    <div className="flex gap-3 mb-4">
      <img className="rounded-2xl cursor-pointer" width={200} height={200} src={video.thumbnail} alt="image_alt" />
      <div className="flex flex-col justify-evenly">
        <p className="font-semibold">{video.title}</p>
        <div className="flex items-center gap-2">
          <span className="font-thin">ENGLISH FIGHTER</span>
          <CheckCircleIcon className="text-lg rounded-full text-white" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-thin">{video.views}k lượt xem</span>
          <span className="font-thin"> . 5 tháng trước</span>
        </div>
      </div>
    </div>
  );
};

export default CardVideoDetail;
