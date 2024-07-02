import React from 'react';
import Makeup from "../assests/makeup1.png";


export default function AboutUs() {
  return (
    <div className="bg-white  min-h-screen h-screen" id="about">
      <div  className="px-4 lg:px-14 max-w-screen-2xl mx-auto ">
       
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {/* First column with image */}
          <div className="flex items-center justify-center">
            <img src={Makeup} alt="About Us" className="rounded-md shadow-md mt-10"/>
          </div>
          {/* Second column with heading and paragraph */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-3xl font-bold text-neutralDGray mb-4">About Us</h3>
            <p className="text-base text-neutralDGray">
              At our beauty and cosmetics shop, we believe in enhancing your natural beauty with the finest products and expert advice. Our dedicated team is here to guide you on your beauty journey, offering personalized consultations to meet your unique needs. Join us in celebrating beauty that knows no bounds.
            </p>
            <button className="w-[120px] bg-brandPrimary text-white mt-8 py-2 px-4 rounded hover:bg-neutralDGray transition-all duration-300  hover-translate-y-4">
             Learn More
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
