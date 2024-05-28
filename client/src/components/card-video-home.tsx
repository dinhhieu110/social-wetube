/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Video from '@/types/video';

interface CardVideoHomeProps {
  video: Video;
}

const CardVideoHome: FC<CardVideoHomeProps> = ({ video }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <img className="rounded-2xl cursor-pointer aspect-video" src={video.thumbnail} alt="image_alt" />
      <div className="flex mt-2 gap-4">
        <img className="w-10 h-10 flex-shrink-0 rounded-full object-cover" src="/avatar.png" alt="" />
        <div className='flex flex-col gap-2"'>
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
    </div>
  );
};

export default CardVideoHome;
