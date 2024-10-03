import React from 'react';
import Head from 'next/head';

const Restaurant = ({ name, address, logo, url }) => (
  <div className="max-w-md mx-auto shadow-lg p-8 mb-5 bg-white">
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={`${name} logo`} className="w-full mb-4" />
      </a>
    ) : (
      <img src={logo} alt={`${name} logo`} className="w-full mb-4" />
    )}
    <fonction> Dining & Delivery </fonction>
    <h2 className="font-bold mb-2">{name}</h2>
    <p className="text-gray-700">{address}</p>
  </div>
);

const restaurantData = [
  {
    name: 'Baguette & baguette ',
    address: '123 Main St, City, Country',
    logo: '/bagette.png',
  },
  {
    name: 'Chaneb Plus Sahloul',
    address: '456 Elm St, City, Country',
    logo: '/chaneb.png',
  },
  {
    name: 'Crépes Factory',
    address: '456 Elm St, City, Country',
    logo: '/factory.png',
  },
  {
    name: 'KFC ',
    address: '456 Elm St, City, Country',
    logo: '/mac.png',
    url: '/KFC', // Add the URL for KFC
  },
  {
    name: 'Papa Jhons',
    address: '789 Oak St, City, Country',
    logo: '/papa.png',
  },
  {
    name: 'Plan B',
    address: '101 Pine St, City, Country',
    logo: '/plan.png',
  },
  {
    name: 'Spart’n Tacos',
    address: '111 Maple St, City, Country',
    logo: '/spartan.png',
  },
  {
    name: 'Tabouna Food 8',
    address: '222 Spruce St, City, Country',
    logo: '/tabouna.png',
  },
];

const Restaurants = () => {
  const firstRowRestaurants = restaurantData.slice(0, 8);

  return (
    <div>
      <Head>
        <title>Available Restaurants</title>
      </Head>

      <div className="text-center py-12">
        <h1 className="font-MasteryKingdom text-6xl font-bold leading-9 text-center text-gray-900 mb-12">
          Available Restaurants
        </h1>
      </div>

      <div className="flex flex-wrap justify-center mt-7 ml-14">
        <div className="grid grid-cols-4 gap-2 justify-items-center">
          {firstRowRestaurants.map((restaurant, index) => (
            <div key={index} className="mr-8 mb-8">
              <Restaurant
                name={restaurant.name}
                address={restaurant.address}
                logo={restaurant.logo}
                url={restaurant.url} // Pass the URL to the Restaurant component
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="py-5 px-6 text-orange-500 text-xl font-bold"
          style={{ background: 'rgba(255, 242, 232, 1)', borderRadius: '30px' }}
        >
          Explore more places &gt;
        </button>
      </div>
    </div>
  );
};

export default Restaurants;