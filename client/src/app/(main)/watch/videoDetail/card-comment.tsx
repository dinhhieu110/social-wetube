/* eslint-disable @next/next/no-img-element */
' user client ';
import React from 'react';

function CardComment() {
  return (
    <div className="flex items-center mt-2">
      <div className="flex-1">
        <img className=" rounded-full w-14 h-14 object-cover cursor-pointer" src="/goku.png" alt="image_avatar" />
      </div>
      <div className="flex-10 flex-col justify-between">
        <div className="flex gap-2 items-center">
          <span className="font-semibold">Đình Hiệu</span>
          <span className="font-thin text-sm">1 day a ago</span>
        </div>
        <p>This is the best tutorial, thank you.</p>
      </div>
    </div>
  );
}

export default CardComment;
