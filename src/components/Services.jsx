import React from "react";
import sunCream from "../assests/sun-cream.png";
import Tips from "../assests/tips.png";
import Lipstick from "../assests/lipstick.png";
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Expert Beauty Counseling",
      description:
        "Our expert beauty counseling service offers one-on-one sessions to address your specific skin concerns and beauty goals.",
      image: Tips,
    },
    {
      id: 2,
      title: "Product Procurement Service",
      description:
        "Our expert beauty counseling service offers one-on-one sessions to address your specific skin concerns and beauty goals.",
      image: sunCream,
    },
    {
      id: 3,
      title: "Product Procurement Service",
      description:
        "Our expert beauty counseling service offers one-on-one sessions to address your specific skin concerns and beauty goals.",
      image: Lipstick,
    },
  ];

  return (
    <div className="bg-neutralSilver" id="services">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <div className=" md:w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutralDGray mb-4 pt-20">
            Our Services
          </h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 bg-white text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-logo transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className=" bg-brandPrimary ackgroundImg mb-4 h-16 w-16 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img src={service.image} alt="" className="-ml-5" />
                </div>
                <h4 className="text-xl font-bold text-logo">{service.title}</h4>
                <p className="text-base text-neutralDGray">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
