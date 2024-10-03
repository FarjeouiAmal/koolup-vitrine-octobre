"use client"; // Place this at the very top of the file

import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { useRouter } from 'next/navigation';
import SidebarResto from '../component/sidebarResto';
import Subscribe from '../component/Subscribe';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '../component/Pagination';

const Page = () => {
    const [cart, setCart] = useState([]);
    const router = useRouter();

    const handleSearch = () => {
        console.log("Recherche de:");
        // Ajoutez ici la logique de recherche si nécessaire
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log("Item added to cart:", item);
    };
    const menuItems = [
        {
            id: 1,
            name: "Tower Burger Menu",
            description: "2 filets de poulets épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise, 1 large frite, canette au choix",
            image: "/tower.png",
            price: "12.99 dt"
        },
        {
            id: 2,
            name: "Mighty Zinger Menu",
            description: "2 filets de poulet épicés, laitue, fromage cheddar, sauce chili, sauce mayonnaise, 1 moyenne frite, canette au choix",
            image: "/zinger.png",
            price: "11.99 dt"
        },
        {
            id: 3,
            name: "Tower Burger",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/3.png",
            price: "9.99 dt"
        },
        {
            id: 4,
            name: "Tower Burger Menu",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/4.png",
            price: "12.99 dt"
        },
        {
            id: 5,
            name: "Shot's N Wings Snacker",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/5.png",
            price: "8.99 dt"
        },
        {
            id: 6,
            name: "Shot's N Wings Snacker",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/6.png",
            price: "8.99 dt"
        },
        {
            id: 7,
            name: "Shot's N Wings Snacker",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/4.png",
            price: "8.99 dt"
        },
        {
            id: 8,
            name: "Strips 3pcs",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/8.png",
            price: "7.99 dt"
        },
        {
            id: 9,
            name: "Onion Rings",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/9.png",
            price: "4.99 dt"
        },
        {
            id: 10,
            name: "Hot Wings 10 Pieces",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/100.png",
            price: "10.99 dt"
        },
        {
            id: 11,
            name: "Frites Large",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/11.png",
            price: "3.99 dt"
        },
        {
            id: 12,
            name: "Frites Medium",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/11.png",
            price: "2.99 dt"
        },
        {
            id: 13,
            name: "Coca-Cola 24cl",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/cola.png",
            price: "1.99 dt"
        },
        {
            id: 14,
            name: "Boga Lime 24cl",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/13.png",
            price: "1.99 dt"
        },
        {
            id: 15,
            name: "Fanta Orange 24cl",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/fanta.png",
            price: "1.99 dt"
        },
        {
            id: 16,
            name: "Eau 0.5L",
            description: "2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.",
            image: "/eau.png",
            price: "0.99 dt"
        },
    ];

    
    const viewCart = () => {
        const cartQueryParam = encodeURIComponent(JSON.stringify(cart));
        router.push(`/cart?cart=${cartQueryParam}`);
    };

    return (
        <div className='w-full flex flex-col'>
                 
            <div className="bg-cover relative w-full flex justify-center" style={{ backgroundImage: "url('/kfc.png')" }}>
                <img src="/kfc.png" alt="restaurant" className="w-full" />
                <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(52, 23, 72, 0.5)' }}>
                    <img src="/profil.png" alt="restaurant" className="relative w-full top-[30%]" />
                </div>
            </div>
            <div className="flex justify-normal">
                <div className="flex relative py-14 w-1/2">
                    <SidebarResto />
                </div>
                <div className="flex flex-col w-full px-4">
                    <div className="flex w-1/2 items-center pt-32 mb-4">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full border-orange-400 rounded-l-3xl ml-4 px-3 py-1 mb-5 bg-orange-400 bg-opacity-20"
                            onChange={handleSearch}
                        />
                        <button
                            className="text-white px-3 py-1 mb-5 rounded-r-3xl"
                            style={{ background: 'rgba(226, 112, 61, 1)' }}
                        >
                            <SearchIcon />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {menuItems.map((item) => (
                            <div key={item.id} className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative">
                                <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src={item.image} alt={item.name} />
                                <div className="flex flex-col p-3 leading-normal">
                                    <h5 className="mb-1 font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                    <p className="mb-2 text-gray-700 dark:text-gray-400">{item.description}</p>
                                    <p className="mb-2 font-semibold text-gray-900 dark:text-gray-200">{item.price}</p> {/* Ajout du prix ici */}
                                    <button 
                                        onClick={() => addToCart(item)}
                                        className="mt-2 px-4 py-2 rounded-full bg-orange-500 text-white"
                                    >
                                        Ajouter au panier
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={viewCart}
                        className="mt-6 px-4 py-2 rounded-full     bg-purple-950 text-white"
                    >
                        Voir le panier
                    </button>
                </div>
            </div>
            <div className="pl-80"><Pagination /></div>
            <Subscribe />
        </div>
    );
};

export default Page;