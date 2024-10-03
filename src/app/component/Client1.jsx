import React from 'react';
import Head from 'next/head';


const Client1 = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Head>
        <title>TESTIMONIALS</title>
      </Head>
      <p className="text-center text-orange-500 text-3xl font-Mastery-Kingdom ">TESTIMONIALS</p>
      <p className="text-center text-purple-900 text-3xl font-Mastery-Kingdom  ">Our Client Reviews</p>
      <img src="/client1.png" alt="Logo" className="" />
    </div>
  );
}

export default Client1;
