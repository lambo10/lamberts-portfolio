"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxBackground from './components/ParallaxBackground';
import profilePic from './images/profileImg.png';
import pat1 from './images/pat1.png';
import pumpmwebDex1 from './images/pumpmwebDex1.png';
import solgateweb1 from './images/solgateweb1.png';
import tonstationweb1 from './images/tonstationweb1.png';
import { jost } from './fonts';
import { Allura } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
  const [activeFilter, setActiveFilter] = useState('all');

  const filterItems = (tag: string) => {
    setActiveFilter(tag);
  };

  return (
    <>
      <section
        className={`min-h-screen flex items-center bg-gray-950 text-white relative overflow-hidden ${jost.className}`}
      >
        {/* Parallax Background */}
        <ParallaxBackground />

        {/* Decorative Text - Positioned Behind Other Elements */}
        <div
          className="absolute inset-0 flex items-end justify-end px-4 py-2 text-4xl md:text-9xl font-bold text-gray-800 opacity-10 z-10 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="text-right whitespace-nowrap">
            Web, Mobile & Blockchain Developer
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 z-20 relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Section */}
            <div className="md:w-1/2 z-20">
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-500">Hello, </span>
                <span className="text-3xl font-bold text-500">MY NAME IS</span>
              </div>
              <h1 className="text-6xl font-extrabold mb-4 uppercase">
                <span className="text-green-400 relative">
                  Lambert
                </span>
                <span className="text-white relative ml-2">
                  Nnadi
                </span>
              </h1>
              <div className="mb-6">
                <span className="text-xl">
                  Flutter, React, Blockchain{' '}
                  <strong>Developer</strong>
                </span>
              </div>
              <p className="mb-6">
                I have rich experience in web, blockchain and mobile application development. I also have 6 years of experience in game development using Unity. I love to talk with you about your unique projects and how we can collaborate to bring your ideas to life.
              </p>
              <div className="flex space-x-4 mb-6">
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

            {/* Right Section */}
            <div className="md:w-1/2 relative mt-10 md:mt-0">
              <div className="relative w-96 h-96 mx-auto z-20">
                {/* Glassy circle background */}
                <div className="absolute inset-0 bg-green-100 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-full"></div>

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
                <div className="absolute -bottom-4 right-0 bg-green-100 bg-opacity-10 backdrop-filter backdrop-blur-md text-white py-2 px-4 rounded-full z-30">
                  <span className="text-xl font-bold">12 <span className="text-green-500">+</span></span>
                  <span className="text-xs ml-1">YEARS OF <br />EXPERIENCE</span>
                </div>

                {/* Projects badge */}
                <div className="absolute -top-4 -left-4 bg-green-100 bg-opacity-10 backdrop-filter backdrop-blur-md text-white py-2 px-4 rounded-full z-30">
                  <span className="text-xl font-bold">330</span>
                  <span className="text-xs ml-1">COMPLETED <br />PROJECTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Background Images */}
        <div className="absolute top-4 right-4 w-1/4 h-1/4 opacity-10 z-0">
          <Image
            src={pat1}
            alt="Decorative circle pattern"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>

      {/* Updated Portfolio section */}
      <section id="portfolio" className="relative bg-[#1e2024] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#28212e] to-[#7f6a94] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-2">PORTFOLIO</h2>
          <div className="flex items-center mb-10">
            <span className="text-green-500 mr-2">MY</span>
            <span className={`text-3xl ${allura.className}`}>Cases</span>
          </div>

          <div className="mb-10">
            <nav className="flex space-x-6">
              <button onClick={() => filterItems('all')} className={`${activeFilter === 'all' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2`}>ALL</button>
              <button onClick={() => filterItems('mobile-app')} className={`${activeFilter === 'mobile-app' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2`}>Mobile Apps</button>
              <button onClick={() => filterItems('blockchain-app')} className={`${activeFilter === 'blockchain-app' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2`}>Blockchain Apps</button>
              <button onClick={() => filterItems('mobile-game')} className={`${activeFilter === 'mobile-game' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2`}>Mobile Games</button>
              <button onClick={() => filterItems('microservice')} className={`${activeFilter === 'microservice' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2`}>Microservices</button>
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items */}
            {[
              { tag: 'mobile-app', image: tonstationweb1, title: 'Tonstation', category: 'Mobile Crypto Wallet' },
              { tag: 'mobile-game', image: pumpmwebDex1, title: 'Pumpmilitia', category: 'Mobile Defi Game' },
              { tag: 'mobile-app', image: solgateweb1, title: 'Solgate', category: 'Mobile Crypto Wallet' },
              { tag: 'mobile-game', video: 'https://www.youtube.com/embed/pc5j03DBYN8?si=JFf_ThjCVL61blzv&controls=0&autoplay=1&loop=1&mute=1&playlist=pc5j03DBYN8', title: 'Pumpmilitia', category: 'Mobile Defi Game' },
            ].filter(item => activeFilter === 'all' || `tag-${activeFilter}` === `tag-${item.tag}`).map((item, index) => (
              <div key={index} className={`bg-[#28212e] rounded-lg overflow-hidden tag-${item.tag}`}>
                <div className="relative h-64">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={item.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-green-500 text-sm uppercase">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <div className="flex space-x-4 mt-4">
                    <Link href="#" className="inline-flex items-center text-green-500 hover:underline">
                      See project
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href="#" className="inline-flex items-center text-green-500 hover:underline">
                      Source Code
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}