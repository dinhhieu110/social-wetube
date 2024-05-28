/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container } from '@mui/material';
import CardVideoHome from '../../components/card-video-home';

import { videos } from './mock';

const Home = () => {
  return (
    <div className="grid gap-6 grid-cols-3 m-12">
      {videos.map((video) => (
        <CardVideoHome video={video} key={video._id} />
      ))}
    </div>
  );
};

export default Home;
