import Image from 'next/image';
import profilePic from './images/profileImg.png';
import pat1 from './images/pat1.png';
import { jost } from './fonts';
import { Allura } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <section
      className={`min-h-screen flex items-center bg-gray-900 text-white relative overflow-hidden ${jost.className}`}
    >
      {/* Background Images - Now smaller and in the top-right corner */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10 z-0">
        <Image
          src={pat1}
          alt="Decorative circle pattern"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
      {/* Decorative Text - Positioned Behind Other Elements */}
      <div
        className="fixed bottom-4 right-4 px-4 py-2 text-4xl md:text-9xl font-bold text-gray-800 opacity-10 z-10 text-right"
        aria-hidden="true"
      >
        Web, Mobile & Blockchain Developer
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-20">
            <div className="mb-4">
              <span className="text-3xl font-bold text-green-500">Hello, </span>
              <span className="text-3xl font-bold text-500">MY NAME IS</span>
            </div>
            <h1 className="text-6xl font-extrabold mb-4 uppercase">
              <span className="text-green-400 relative">
                Lambert
                <span className="absolute -inset-0.5 text-gray-900 -z-10 name-outline">Lambert</span>
              </span>
              <span className="text-white relative ml-2">
                Nnadi
                <span className="absolute -inset-0.5 text-gray-900 -z-10 name-outline">Nnadi</span>
              </span>
            </h1>
            <div className="mb-6">
              <span className="text-xl">
                Flutter, React, Blockchain{' '}
                <strong>Developer</strong>
              </span>
            </div>
            <p className="mb-6">
              I have rich experience in web, blockchain and mobile application development. I also have 6 years of experience in game development using Unity. I love to talk with you about our unique.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-2xl">
                <FontAwesomeIcon icon={faPhone} className="text-2xl text-green-500" />
              </a>
              <a href="#" className="text-2xl">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500" />
              </a>
              <a href="#" className="text-2xl">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-green-500" />
              </a>
              <a href="#" className="text-2xl">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl text-green-500" />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
                Download CV
              </a>
              <a href="#skills-section" className="text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-gray-900 transition duration-300">
                My Skills
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <div className="relative w-96 h-96 mx-auto z-20">
              {/* Glassy circle background */}
              <div className="absolute inset-0 bg-green-100 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-full"></div>
              
              {/* Profile image */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src={profilePic}
                  alt="Lambert Nnadi"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 right-0 bg-opacity-30 backdrop-filter backdrop-blur-md bg-gray-800 text-white py-2 px-4 rounded-full z-30">
                <span className="text-xl font-bold">12 <span className="text-green-500">+</span></span>
                <span className="text-xs ml-1">YEARS OF <br/>EXPERIENCE</span>
              </div>
              
              {/* Projects badge */}
              <div className="absolute -top-4 -left-4 bg-opacity-30 backdrop-filter backdrop-blur-md bg-gray-800 text-white py-2 px-4 rounded-full z-30">
                <span className="text-xl font-bold">330</span>
                <span className="text-xs ml-1">COMPLETED <br/>PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}