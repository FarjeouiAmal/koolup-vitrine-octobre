import React from 'react';

const Telephone = () => {
  return (
    <div className="flex">
      <img src="/rectt.png" alt="Rect"  className=" pr-10 pl-28" />
      <div className="absolute  py-80 pl-52 text-left text-white">
        <h2 className="text-3xl mb-5 font-Mastery-Kingdom text-orange-500">Try our app now</h2>
        <div>
          <p>
            Discover the most convenience in food <br />ordering. 
            Explore irresistible discounts and <br /> step into a realm of delightful
            culinary <br /> delights.
          </p>
          <p className=" font-Mastery-Kingdom mt-4">Available on</p>
          <div className="flex mt-4">
            <button className="flex items-center px-4 py-1 bg-orange-500 text-white mr-7 font-bold" style={{ borderRadius: '20px' }}>
              <img src="/play.png" alt="Logo 1" className=" mr-3" />
              PlayStore
            </button>
            <button className="flex items-center px-4 py-2 bg-orange-500 text-white font-bold ml-5" style={{ borderRadius: '20px' }}>
              <img src="/app.png" alt="Logo 2" className=" mr-3" />
              AppStore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telephone;
