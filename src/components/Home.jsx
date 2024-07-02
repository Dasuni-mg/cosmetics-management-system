"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import "flowbite";
import Skincare from "../assests/skincare.png";
export default function Home() {
  return (
    <div className="bg-neutralSilver " id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen ">
        <Carousel className="w-full mx-auto h-screen">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={Skincare} className="w-[850px]" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-logo md:w-3/4 leading-snug">
                Crafting Beauty{" "}
                <span className="text-brandPrimary">Beyond Boundaries</span>
              </h1>
              <p className="text-neutralDGray text-base mb-8">
              Celebrating Diversity in Beauty, Enhancing Every Face
            </p>
            <button className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGray transition-all duration-300  hover-translate-y-4">
             View All
            </button>
            </div>
           
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={Skincare} className="w-[850px]" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-logo md:w-3/4 leading-snug">
                Crafting Beauty{" "}
                <span className="text-brandPrimary">Beyond Boundaries</span>
              </h1>
              <p className="text-neutralDGray text-base mb-8">
              Celebrating Diversity in Beauty, Enhancing Every Face
            </p>
            <button className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGray transition-all duration-300  hover-translate-y-4">
             View All
            </button>
            </div>
           
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={Skincare} className="w-[850px]" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-logo md:w-3/4 leading-snug">
                Crafting Beauty{" "}
                <span className="text-brandPrimary">Beyond Boundaries</span>
              </h1>
              <p className="text-neutralDGray text-base mb-8">
              Celebrating Diversity in Beauty, Enhancing Every Face
            </p>
            <button className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGray transition-all duration-300  hover-translate-y-4">
             View All
            </button>
            </div>
           
          </div>
          
        </Carousel>
      </div>
    </div>
  );
}
