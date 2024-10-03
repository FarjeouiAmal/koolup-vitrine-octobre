import React from 'react';
import Head from 'next/head';

const Client = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Head>
        <title>TESTIMONIALS</title>
      </Head>
      <p className="text-center font-Mastery-Kingdom text-orange-500 text-3xl ">TESTIMONIALS</p>
      <p className="text-center font-Mastery-Kingdom text-purple-900 text-3xl ">Our Client Reviews</p>
      <img src="/client.png" alt="Logo"  />
    </div>
  );
}

export default Client;
