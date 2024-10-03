import React from 'react';



const HeadingPage = () => {
  return (
    <div className="flex ">
      {/* Partie gauche avec l'image */}
      <div className="w-1/2 p-6 flex  justify-center items-center">
        <div className=" pl-7 ">
        <h1 className="text-5xl py-16 mt-14 font-Mastery-Kingdom  font-normal  text-left text-purple-950">
  Kool'Up Your Ultimate Dining Experience
</h1>


<p className="text-lg font-poppins font-normal leading-6 text-gray-600">
  Are you craving a delectable meal but don't want to leave the comfort of your home? Or perhaps you're seeking the perfect ambiance for a memorable dining experience? Look no further than Kool'Up - your all-in-one solution for food delivery, restaurant exploration, and table reservations.
</p>

          <span className="inline-block mt-14 px-6 p-3 rounded-full hover:-translate-y-1 hover:scale-110 duration-300 text-white text-2xl  font-normal" style={{background: "rgba(226, 112, 61, 1)"
}}>
            Explore our restaurants Gallery
          </span>
          <img src='/foods.png' className=' py-16'/>
        </div>
        
      </div>
      <div className="w-1/2 mt-14" >
        <img src='/frame.png' alt="Second Image" className='mx-auto' />
      </div>

    </div>
    
  );
};

export default HeadingPage;

