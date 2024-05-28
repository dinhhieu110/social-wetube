import React from 'react';

function DescriptionVideo() {
  return (
    <div className="flex flex-col bg-neutral-800 mt-4 rounded-xl p-3">
      <div className="flex gap-3">
        <p className="font-semibold">683.280 lượt xem</p>
        <p className="font-semibold">15 tháng 9,2023</p>
      </div>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam omnis est quod tempore consequatur
        dolor repudiandae iure fugit consequuntur cumque eos odit, aliquam esse velit ducimus nihil consectetur minima.
      </p>
      <p>
        Source code:
        <a className="text-blue-500" href=" https://github.com/dinhhieu110" target="_blank">
          https://github.com/dinhhieu110
        </a>
      </p>
    </div>
  );
}

export default DescriptionVideo;
