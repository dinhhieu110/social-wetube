/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Self Import
import { BellRegular, BellSolid } from '@/components/icons';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const VideoDetail = () => (
  <div className="flex gap-6 mx-12 my-6">
    <div className="flex-3 flex-col">
      <div>
        <iframe
          className="rounded-xl"
          width={850}
          height={480}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/ZLk1qsz1B8s?modestbranding=1&rel=0&showinfo=0&autohide=1&controls=1"
        />
        <p className="font-bold text-xl mt-4">
          Beautiful Piano Music 🌿 Bamboo, Relaxing Music, Nature Sounds, Relieves Stress Music, Calming music
        </p>
        {/* Channel info  */}
        <div className="flex mt-4 items-center">
          <div className="flex-3 flex">
            <div className="mr-8 flex gap-2 items-center">
              <img
                className="rounded-full w-10 h-10 object-cover cursor-pointer"
                src="/avatar.png"
                alt="image_avatar"
              />
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
          <div className="flex-2 flex items-center gap-4">
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
              <span>Chia sẽ</span>
            </div>
          </div>
        </div>
        {/* End Channel info */}

        {/* Video Description */}
        <div className="flex flex-col bg-neutral-800 mt-4 rounded-xl p-3">
          <div className="flex gap-3">
            <p className="font-semibold">683.280 lượt xem</p>
            <p className="font-semibold">15 tháng 9,2023</p>
          </div>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam omnis est quod tempore consequatur
            dolor repudiandae iure fugit consequuntur cumque eos odit, aliquam esse velit ducimus nihil consectetur
            minima.
          </p>
          <p>
            Source code:
            <a className="text-blue-500" href=" https://github.com/dinhhieu110" target="_blank">
              {' '}
              https://github.com/dinhhieu110
            </a>
          </p>
        </div>
        {/* End Video Description */}

        {/* Comments */}
        <div className="flex direction-col">
          <p>129 bình luận</p>
        </div>
        {/* End Comments */}
      </div>
    </div>
    <div className="flex-2">Card list</div>
  </div>
);

export default VideoDetail;
