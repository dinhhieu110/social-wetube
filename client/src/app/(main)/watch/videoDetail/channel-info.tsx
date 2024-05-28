/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BellRegular, BellSolid } from '@/components/icons';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
function ChannelInfo() {
  return (
    <div className="flex mt-4 items-center">
      <div className="flex-3 flex">
        <div className="mr-8 flex gap-2 items-center">
          <img className="rounded-full w-10 h-10 object-cover cursor-pointer" src="/avatar.png" alt="image_avatar" />
          <div>
            <p className="font-bold">Đình Hiệu</p>
            <p className="font-light text-xs">302k subscribers</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-slate-100 px-5 py-3 rounded-3xl text-black font-semibold hover:text-slate-500">
            Tham gia
          </button>
          <div className="flex items-center gap-2 bg-neutral-800 px-5 py-3 rounded-3xl cursor-pointer hover:text-slate-300">
            <BellRegular className="text-2xl" />
            <span className="font-semibold">Đăng ký</span>
          </div>
        </div>
      </div>
      <div className="flex-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-neutral-800 px-5 py-3 rounded-3xl">
          <div className="flex items-center gap-2 cursor-pointer px-3 font-semibold hover:text-slate-300">
            <ThumbUpOutlinedIcon />
            <span>13k</span>
          </div>
          <div className="cursor-pointer border-l px-3 hover:text-slate-300">
            <ThumbDownOffAltOutlinedIcon />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-neutral-800 px-5 py-3 rounded-3xl cursor-pointer font-semibold hover:text-slate-300">
          <ShareOutlinedIcon />
          <span>Chia sẻ</span>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfo;
