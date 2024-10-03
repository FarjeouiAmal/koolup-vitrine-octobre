import React from 'react';

const Texte = () => {
  return (
    <div className="flex flex-col lg:flex-row    p-32 ml-6">
      {/* Première partie */}
      <div className=" lg:w-1/2  flex flex-col justify-center items-start gap-4" >
        <h1 className="text-5xl font-normal font-Mastery-Kingdom  text-left">
          We are more than multiple services
        </h1>

        <p className="text-black text-lg lg:text-2xl  py-7 font-normal">
          Lorem ipsum sit amet consectetur. Curabitur <br />
          sit ipsum neque scelerisque adipiscing fringilla. <br />
          Est amet sapien cursus morbi non netus.
        </p>

        <button
          className="py-4 px-6  text-white   text-xl border rounded-full " style={{
            background: "rgba(226, 112, 61, 1)"
          }}>About us
         </button>
      </div>

      {/* Deuxième partie */}
      <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
        <div className="flex flex-wrap justify-center w-full">
          {/* Première image */}
          <div className="w-full lg:w-1/2 ">
            <div className="w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>
              <img src="/Group1.png" className="w-1/8 mb-5 p-6" alt="Image 1" />
              <div className="text-white text-center">
                <p className="font-bold text-lg">Online order</p>
                <p className="text-sm">order food online </p>
              </div>
            </div>
          </div>
          {/* Deuxième image */}
          <div className="w-full lg:w-1/2 p-3">
            <div className="w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>
              <img src="/Group2.png" className="w-1/8 mb-5 p-7" alt="Image 2" />
              <div className="text-white text-center">
                <p className="font-bold text-lg">Fast delivery</p>
                <p className="text-sm">order food online</p>
              </div>
            </div>
          </div>
          {/* Troisième image */}
          <div className="w-full lg:w-1/2 p-2">
            <div className="w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>
              <img src="/Group3.png" className="w-1/8 mb-5 p-3" alt="Image 3" />
              <div className="text-white text-center">
                <p className="font-bold text-lg">Easy to order</p>
                <p className="text-sm">order food online</p>
              </div>
            </div>
          </div>
          {/* Quatrième image */}
          <div className="w-full lg:w-1/2 p-2">
            <div className=" w-3/5 flex flex-col justify-center items-center" style={{ background: 'rgba(52, 23, 72, 1)', borderRadius: '25px' }}>
              <img src="/Vect.png" className="w-1/8 mb-5 p-5" alt="Image 4" />
              <div className="text-white text-center">
                <p className="font-bold text-lg">24/7 Support</p>
                <p className="text-sm">order food online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Texte;
