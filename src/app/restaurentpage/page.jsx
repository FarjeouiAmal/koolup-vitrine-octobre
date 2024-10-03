import React from 'react';
import Sidebar from '../component/Sidebar';
import DeliveryResto from '../component/DeliveryResto';
import Subscribe from '../component/Subscribe';

const Resto = () => {
  return (
    <div>
      <div className="relative w-full flex justify-center">
        <img src="/resto1.png" alt="restaurant" className="w-full" />
        <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(52, 23, 72, 0.5)' }}>
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-white font-bold lg:text-6xl  font-Mastery-Kingdom">Restaurants</h1>
            <h1 className="text-white  font-medium lg:text-2xl  font-Mastery-Kingdom">Home &gt; Restaurants</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-normal w-full">
        
          <Sidebar />
        
          <DeliveryResto />
          
       
      </div>
      <Subscribe/>
    </div>
  );
}

export default Resto;