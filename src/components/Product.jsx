import React from "react";
import { Accordion } from "flowbite-react";

export default function Product() {
  return (
    <div className="bg-white  h-auto" id="products">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-32">
        <div className=" md:w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutralDGray  pt-20 pb-10">
            Our Products
          </h2>
        </div>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Skin Care</Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">Cleansers</p>
              <p className="text-gray-500 dark:text-gray-400">Face Wash</p>
              <p className="text-gray-500 dark:text-gray-400">Moisturizers</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Face Creams
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Night Creams
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Day Creams
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Body Lotions
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">
                Serums & Treatments
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Anti-Aging Serums
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Vitamin C Serums
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Makeup</Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">Face</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Foundations
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  BB & CC Creams
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Concealers
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Primers
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Powders
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Blushes
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">Eyes</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Eyeshadows
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Eyeliners
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Mascaras
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Eyebrow Pencils
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Eyebrow Gels
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">Lips</p>{" "}
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Lipsticks
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Lip Glosses
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Lip Liners
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Lip Balms
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Beauty Tools & Accessories</Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">Makeup Brushes</p>{" "}
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Face Brushes
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Eye Brushes
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Lip Brushes
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">
                Sponges & Applicators
              </p>{" "}
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Beauty Blenders
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Sponges
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">Tools</p>{" "}
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Eyelash Curlers
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Tweezers
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Mirrors
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Hair Accessories</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Hairbands
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Hair buns
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Combs
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Clips
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Scrunchies
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Bath & Body</Accordion.Title>
            <Accordion.Content>
             
              <p className="text-gray-500 dark:text-gray-400">
                Body Lotions & Creams
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Body Washes & Scrubs
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Hand & Foot Care Tools
              </p>{" "}
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Hand Creams
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Foot Creams
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">Fragrances</p>{" "}
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Perfumes
                </li>
                <li className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Body Mists
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
