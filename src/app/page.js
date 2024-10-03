// page.js

import React from 'react';
import HeadingPage from './component/HeadingPage';
import Rectangle from './component/Rectangle';
import Texte from './component/Texte';
import Box from './component/Box';
import Restaurants from './component/Restaurents';
import Delivery from './component/Delivery';
import Telephone from './component/Telephone';
import Client from './component/Client';
import Subscribe from './component/Subscribe';

const Page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-normal gap-3'>
      <HeadingPage />
      <Rectangle/>
      <Texte/>
       <Box/>
       <Restaurants/>
       <Delivery/>
       <Telephone/>
       <Client/> 
       <Subscribe/>

    </div>
  );
};

export default Page;
