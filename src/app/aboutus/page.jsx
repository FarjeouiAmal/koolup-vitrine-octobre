import React from 'react';
import Rectangle from '../component/Rectangle';
import Delivery from '../component/Delivery';
import Telephone from '../component/Telephone';
import Client1 from '../component/Client1';
import Subscribe from '../component/Subscribe';
const AboutUs = () => {
    return (
        <div> 
        <div style={{display:'flex',height:'70vh'}}>
          {/* Partie gauche avec l'image */}
        <div className="w-1/2 p-6" >
          <h1 className="text-5xl py-16 mt-14 font-Mastery-Kingdom  font-normal  text-left text-purple-950" >Meet, eat and enjoy the true tastes with us</h1>
     <p className='text-lg font-poppins font-normal leading-6 text-gray-600'>
      Whether you're gathering around the table with loved ones, ordering<br/> in for a cozy night at home, or exploring new culinary<br/> adventures, Kool'up is here to make every dining experience <br/>memorable. With our easy-to-use online platform,<br/> fast delivery service, intuitive app, and <br/>round-the-clock support, we ensure that every moment spent with <br/>us is filled with satisfaction and delight.
    </p>
    <img src='/foods.png' className=' py-16'/>
    
    </div>
    
          <div className="w-1/2 mt-14" >
        <img src='/frame.png' alt="Second Image" className='mx-auto' />
      </div>




        </div>
        

<div className=" pt-60 "><Rectangle/></div>
<div className="flex justify-center py-10" >
      <img src="/adham.png" alt="Logo"  />
    </div>
<Delivery/>
<Telephone/>
<Client1/>
<Subscribe/>

</div>
      );
    };
    

export default AboutUs;
