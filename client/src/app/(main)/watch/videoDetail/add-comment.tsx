/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Input from '@mui/material/Input';

function AddComment() {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <img className=" rounded-full w-14 h-14 object-cover cursor-pointer" src="/goku.png" alt="image_avatar" />
      </div>
      <div className="flex-10">
        <Input placeholder="Add a comment..." />
        <hr className="border-zinc-300	" />
      </div>
    </div>
  );
}

export default AddComment;
