import React from 'react'

const CarteFood = () => {
  return (
    <div>
    <div>
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/tower.png" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tower Burger Menu</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">2 filets de poulets épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise, 1 large frite, canette au choix</p>
        </div>
    </a>
    
    </div>
    </div>
  )
}

export default CarteFood