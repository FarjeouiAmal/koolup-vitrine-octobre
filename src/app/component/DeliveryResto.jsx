"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link component from Next.js

const Restaurant = ({ name, adresse, imagePath }) => (
  <div className="max-w-md mx-auto shadow-lg p-8 mb-5 bg-white">
    <img src={imagePath} alt={`${name} logo`} className="w-full mb-4" />
    <p>Dining & Delivery</p>
    <h2 className="font-bold mb-2">{name}</h2>
    <p className="text-gray-700">{adresse}</p>
  </div>
);

const DeliveryResto = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3004/users?role=resto');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Mettre à jour l'URL complète de l'image pour chaque restaurant
        const updatedRestaurants = data.map(restaurant => ({
          ...restaurant,
          imagePath: `http://localhost:3004/uploads/${restaurant.imagePath}`
        }));
        setRestaurants(updatedRestaurants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <div className="ml-14 pt-28">
        <h1 className="font-MasteryKingdom text-3xl font-Poppins font-bold text-gray-900">
          Restaurants delivery in Sousse
        </h1>
      </div>

      <div className="flex flex-wrap justify-center mt-8 ml-14">
        <div className="grid grid-cols-3 gap-2 justify-items-center">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="mr-5 mb-2">
              <Link href={`/KFC`}> {/* Use Link component with 'href' prop */}
                <a>
                  <Restaurant
                    name={restaurant.name}
                    adresse={restaurant.adresse}
                    imagePath={restaurant.imagePath}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="flex -space-x-p m-20 pl-32">
          {/* Pagination links */}
        </ul>
      </nav>
    </div>
  );
};

export default DeliveryResto;
