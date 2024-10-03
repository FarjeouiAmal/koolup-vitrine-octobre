import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mx-auto p-5 text-white" style={{ background: 'rgba(52, 23, 72, 1)'}}>
        <div className="flex flex-wrap justify-between items-center"style={{ paddingTop:'2%'}}>
          {/* Row 1: Logo et "Ready to get started" */}
          <div className="flex items-center" >
            <img src="/logo2.png" alt="Logo" className="mr-4" style={{marginLeft: '27%'}}/>
          </div> 

          <div className="mb-4 flex items-center" style={{justifyContent: "space-between", marginRight: '5%'}}>
            <p className="text-lg mr-2" style={{left: '30%'}}>Ready to get started</p>
            <a href="http://localhost:3003/Login">
            <button style={{ background: 'rgba(226, 112, 61, 1)' }} className="text-white px-4 py-2 rounded hover:bg-rgba226-112-61">
              Get Started
            </button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-500 my-2" style={{marginLeft: '5%', marginRight: '5%'}}></div>

        {/* Row 2: Subscribe et Liens */}
        <div className="flex flex-wrap mt-4 " style={{marginLeft: '5%', marginRight: '5%', paddingTop:'3%'}}>
          {/* Colonne 1: Subscribe */}
          <div className="w-full md:w-1/2 lg:w-1/4">
  <p className="text-3xl font-bold mb-2 my-7">Subscribe to our<br/> newsletter</p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-b border-gray-500 rounded-l mb-2"
                style={{ width: 'calc(90% - 40px)', background: 'rgba(52, 23, 72, 1)' }}
              />
              <button
                className="text-white px-3 py-2 rounded-r-lg mb-2"
                style={{ background: 'rgba(226, 112, 61, 1)'}}
              >
                 &gt;
              </button>
            </div>
          </div>

          {/* Colonne 2: Liens Restaurants, Order Food, Gallery */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <p className="text-lg font-semibold mb-2" style={{color: 'rgba(226, 112, 61, 1)'}}>Links</p>
            <ul>
              <li className="mb-1">Restaurants</li>
              <li className="mb-1">Order Food</li>
              <li className="mb-1">Gallery</li>
              {/* Ajoutez d'autres liens selon vos besoins */}
            </ul>
          </div>

          {/* Colonne 3: Liens About, Our Story, How it Works, Blogs, Careers */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <p className="text-lg font-semibold mb-2" style={{color: 'rgba(226, 112, 61, 1)'}}>About</p>
            <ul>
              <li className="mb-1">Our Story</li>
              <li className="mb-1">How it Works</li>
              <li className="mb-1">Blogs</li>
              <li className="mb-1">Careers</li>
              {/* Ajoutez d'autres liens selon vos besoins */}
            </ul>
          </div>

          {/* Colonne 4: Liens Help, FAQs, Contact Us */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <p className="text-lg font-semibold mb-2" style={{color: 'rgba(226, 112, 61, 1)'}}>Help</p>
            <ul>
              <li className="mb-1">FAQs</li>
              <li className="mb-1">Contact Us</li>
              {/* Ajoutez d'autres liens selon vos besoins */}
            </ul>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between "  style={{marginLeft: '5%', marginRight: '70%', paddingTop:'6%'}}>
          <div>
            <p className="text-lg">Term & Condition</p>
          </div>
          <div>
            <p className="text-lg">Privacy Policy</p>
          </div>
        </div>

        <div className="footer-bottom "style={{marginLeft: '50%', marginRight: '30%'}}>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
