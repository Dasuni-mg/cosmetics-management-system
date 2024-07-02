import React from "react";
import Makeup from "../assests/makeup1.png";
import { Label, TextInput,Textarea  } from "flowbite-react";
export default function Contact() {
  return (
    <>
      <div className="bg-white  min-h-screen h-screen" id="contact">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:w-11/12 mx-auto gap-12">
            {/* Second column with heading and paragraph */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-3xl font-bold text-neutralDGray mb-4">
                Contact Us
              </h3>
              <div className="flex max-w-md flex-col gap-4">
                <Label >Name</Label>
                <TextInput
                  type="text"
                  id="nameInput"
                  placeholder="Enter Your Name"
                  
                />
                <Label htmlFor="disabledInput2">Phone Number</Label>
                <TextInput
                  type="text"
                  id="mobileInput"
                  placeholder="Enter your Mobile No"
             
                />
                  <Label htmlFor="disabledInput2">Email</Label>
                 <TextInput
                  type="text"
                  id="emailInput"
                  placeholder="Enter your Email"
             
                />
                  <Label htmlFor="messageInput">Message</Label>
                <Textarea id="messege" placeholder="Leave a message..." required rows={4} />
              </div>
              <button className="w-[120px] bg-brandPrimary text-white mt-8 py-2 px-4 rounded hover:bg-neutralDGray transition-all duration-300  hover-translate-y-4">
                Submit
              </button>
            </div>

            {/* First column with image */}
            <div className="flex items-center justify-center">
              <img
                src={Makeup}
                alt="About Us"
                className="rounded-md shadow-md mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
