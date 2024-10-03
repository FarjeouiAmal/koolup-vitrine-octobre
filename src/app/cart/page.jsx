"use client"; // Place this at the very top of the file

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams();
    const cartItems = JSON.parse(searchParams.get('cart') || '[]');

    // Initialiser les quantités à 1 par défaut
    const initialQuantities = cartItems.reduce((acc, item) => {
        acc[item.id] = 1;
        return acc;
    }, {});

    const [quantity, setQuantity] = useState(initialQuantities);

    const handleQuantityChange = (id, e) => {
        const newQuantity = { ...quantity, [id]: parseInt(e.target.value) || 0 };
        setQuantity(newQuantity);
    };

    const removeFromCart = async (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        const updatedSearchParams = new URLSearchParams();
        updatedSearchParams.set('cart', JSON.stringify(updatedCart));

        // Supprimer l'article dans la base de données
        try {
            const response = await fetch(`http://localhost:3004/api/cart/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert('vous voulez supprimer ce article.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur est survenue lors de la suppression de l\'article.');
        }

        window.location.href = `/cart?${updatedSearchParams.toString()}`;
    };

    const calculateItemTotal = (item) => {
        return (parseFloat(item.price) * (quantity[item.id] || 0)).toFixed(2);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemQuantity = quantity[item.id] || 0;
            if (itemQuantity > 0) {
                return total + parseFloat(item.price) * itemQuantity;
            }
            return total;
        }, 0).toFixed(2);
    };

    const handleSubmitOrder = async () => {
        const orderItems = cartItems
            .map(item => ({
                id: item.id,
                name: item.name,
                price: parseFloat(item.price),
                quantity: quantity[item.id] || 1,
            }))
            .filter(item => item.quantity > 0); // Exclure les articles avec une quantité de 0

        const order = {
            customerId: '12345', // Exemple d'ID client
            items: orderItems,
            total: parseFloat(calculateTotal()),
        };

        try {
            const response = await fetch('http://localhost:3004/api/orders', { // Mettre à jour l'URL pour pointer vers le backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (response.ok) {
                alert('Votre commande a été passée avec succès !');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert('Une erreur est survenue lors du passage de la commande.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur est survenue lors du passage de la commande.');
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-4xl font-Mastery-Kingdom text-lime-600 mb-4">Votre Panier</h2>
            <table className="w-full h-full border rounded-xl border-gray-200">
                <thead>
                    <tr className="border-b-2 rounded-xl border-gray-300">
                        <th className="px-6 py-3 text-left">Article</th>
                        <th className="px-6 py-3 text-left">Prix unitaire</th>
                        <th className="px-6 py-3 text-left">Quantité</th>
                        <th className="px-6 py-3 text-left">Total</th>
                        <th className="px-6 py-3 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-300">
                            <td className="py-10 px-6 flex items-center">
                                <img src={item.image} alt={item.name} className="w-24 h-24 mr-4 object-cover rounded-md" />
                                {item.name}
                            </td>
                            <td className="px-6 py-4">{item.price} dt</td>
                            <td className="px-6 py-4">
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity[item.id] || 0}
                                    onChange={(e) => handleQuantityChange(item.id, e)}
                                    className="w-16 border rounded-lg border-gray-300"
                                />
                            </td>
                            <td className="px-6 py-4">{calculateItemTotal(item)} dt</td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {cartItems.length > 0 && (
                <div className="mt-4">
                    <p className="font-semibold">Total de la commande: {calculateTotal()} dt</p>
                    <button
                        onClick={handleSubmitOrder}
                        className="mt-2 px-4 py-2 rounded-full bg-red-400 text-white"
                    >
                        Passer la commande
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page;