import React from 'react';

const Rectangle = () => {


  return (
    <div className="w-full  flex text-white h-44" >
      <div className=" w-full grid grid-cols-4 items-center pl-16 text-white" style={{ background: 'rgba(52, 23, 72, 1)' }}>
  <div className="flex-col  text-center">
    <p className="text-6xl  font-Mastery-Kingdom">99+</p>
    <br/>
    <p className="text-2xl">Satisfied clients</p>
  </div>
  <div className=" flex-col text-center">
    <p className="text-6xl  font-Mastery-Kingdom">2+</p>
    <br/>
    <p className="text-2xl">Years of experience</p>
  </div>
  <div className="flex-col text-center">
    <p className="text-6xl  font-Mastery-Kingdom">200+</p>
    <br/>
    <p className="text-2xl">Daily visitors</p>
  </div>
  <div className="flex-col text-center">
    <p className="text-6xl  font-Mastery-Kingdom">35+</p>
    <br/>
    <p className="text-2xl">Achievements</p>
  </div>
</div>

    </div>
  );
};

export default Rectangle;
