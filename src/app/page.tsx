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
import pm_tg_bot_screens from './images/pm_tg_bot_screens.png';
import greedygames_screens from './images/greedygames_screens.png';
import evp_referral_service_flow_chart from './images/evp-referral-service_flow_chart.png';
import evp_token_minner_service from './images/evp-token-minner-service.png';
import evp_match_reward_token_minner_service_flow_chart from './images/evp-match-reward-token-minner-service.png';
import gv_seed_sale from './images/gv_seed_sale.png';
import gv_nfts from './images/gv_nfts.png';
import pos_blockchain from './images/pos_blockchain.png';

import { jost } from './fonts';
import { Allura } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faLinkedin,
  faTwitter,
  faGithub, // Add this line
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
                <span className="text-xl sm:text-3xl font-bold text-green-500">Hello, </span>
                <span className="text-xl sm:text-3xl font-bold text-500">MY NAME IS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 uppercase">
                <span className="text-green-400 relative">
                  Lambert
                </span>
                <span className="text-white relative ml-2">
                  Nnadi
                </span>
              </h1>
              <div className="mb-6">
                <span className="text-lg sm:text-xl">
                  Flutter, React, Blockchain{' '}
                  <strong>Developer</strong>
                </span>
              </div>
              <p className="mb-6 text-sm sm:text-base">
                I have rich experience in web, blockchain and mobile application development. I also have 6 years of experience in game development using Unity. I love to talk with you about your unique projects and how we can collaborate to bring your ideas to life.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="https://github.com/lambo10" className="text-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500" />
                </a>
                <a href="https://www.linkedin.com/in/lambert-nnadi-842743178" className="text-2xl">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-green-500" />
                </a>
                <a href="https://x.com/nnadi_lambert" className="text-2xl">
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl text-green-500" />
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://drive.google.com/file/d/1seyCzDKAFNcYUvszxoosA74qwMB_kt4a/view?usp=sharing" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
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

          <div className="mb-10 overflow-x-auto">
            <nav className="flex space-x-6 min-w-max">
              <button onClick={() => filterItems('all')} className={`${activeFilter === 'all' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2 whitespace-nowrap`}>ALL</button>
              <button onClick={() => filterItems('mobile-app')} className={`${activeFilter === 'mobile-app' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2 whitespace-nowrap`}>Apps</button>
              <button onClick={() => filterItems('mobile-game')} className={`${activeFilter === 'mobile-game' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2 whitespace-nowrap`}>Games</button>
              <button onClick={() => filterItems('blockchain-app')} className={`${activeFilter === 'blockchain-app' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2 whitespace-nowrap`}>Blockchain</button>
              <button onClick={() => filterItems('microservice')} className={`${activeFilter === 'microservice' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2 whitespace-nowrap`}>Microservices</button>
              <button onClick={() => filterItems('contract')} className={`${activeFilter === 'contract' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-green-500'} transition-colors pb-2 whitespace-nowrap`}>Contracts</button>
            </nav>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items */}
            {[
              { tags: ['mobile-app', 'blockchain-app'], image: tonstationweb1, title: 'Solgate', category: 'Mobile Crypto Wallet', projectUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git', sourceCodeUrl: 'https://github.com/PixelDat/Solgate-mobile-app.git' },
              { tags: ['mobile-app', 'blockchain-app'], image: pumpmwebDex1, title: 'Pumpmilitia-web', category: 'Web-App', projectUrl: 'https://pumpmilitia.io', sourceCodeUrl: 'https://github.com/PixelDat/pumpmilitia.git' },
              { tags: ['mobile-game', 'blockchain-app'], video: 'https://www.youtube.com/embed/pc5j03DBYN8?si=JFf_ThjCVL61blzv&controls=0&autoplay=1&loop=1&mute=1&playlist=pc5j03DBYN8', title: 'Pumpmilitia', category: 'Mobile Defi Game', projectUrl: 'https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en' },
              { tags: ['mobile-app', 'blockchain-app'], image: greedygames_screens, title: 'GreedyGames wallet', category: 'Mobile Crypto Wallet', projectUrl: 'https://drive.google.com/file/d/18Esy4sRWaDbgU3LRudFp5nQJDmLqUF6l/view?usp=sharing', sourceCodeUrl: 'https://github.com/lambo10/greedyGames.git' },
              { tags: ['mobile-game', 'blockchain-app'], video: 'https://www.youtube.com/embed/975aAJ0DFCg?si=TTdwMvUXEhHqlhy9&controls=0&autoplay=1&loop=1&mute=1&playlist=975aAJ0DFCg', title: 'GreedyClans', category: 'Mobile Defi Game', projectUrl: 'https://github.com/lambo10/GreedyClans.git', sourceCodeUrl: 'https://github.com/lambo10/GreedyClans.git' },
              { tags: ['mobile-app', 'blockchain-app'], image: pm_tg_bot_screens, title: 'Pumpmilitia-Telegram-App', category: 'Telegram-App', projectUrl: 'https://github.com/PixelDat/pumpmilitia.git', sourceCodeUrl: 'https://github.com/PixelDat/pumpmilitia.git' },

              { tags: ['microservice', 'blockchain-app'], image: evp_referral_service_flow_chart, title: 'evp-referral-service', category: 'Micro-Service', projectUrl: 'https://github.com/PixelDat/evp-referral-service.git', sourceCodeUrl: 'https://github.com/PixelDat/evp-referral-service.git' },
              { tags: ['microservice', 'blockchain-app'], image: evp_token_minner_service, title: 'evp-token-minner-service', category: 'Micro-Service', projectUrl: 'https://github.com/PixelDat/evp-token-minner-service.git', sourceCodeUrl: 'https://github.com/PixelDat/evp-token-minner-service.git' },
              { tags: ['microservice', 'blockchain-app'], image: evp_match_reward_token_minner_service_flow_chart, title: 'evp-match-reward-token-minner-service', category: 'Micro-Service', projectUrl: 'https://github.com/PixelDat/evp-match-reward-token-minner-service.git', sourceCodeUrl: 'https://github.com/PixelDat/evp-match-reward-token-minner-service.git' },

              // New contract items
              { tags: ['contract', 'blockchain-app'], image: gv_nfts, title: 'GV_NFTs', category: 'Smart Contract', projectUrl: 'https://github.com/lambo10/Greedyverse-contracts.git', sourceCodeUrl: 'https://github.com/lambo10/Greedyverse-contracts.git' },
              { tags: ['contract', 'blockchain-app'], image: gv_seed_sale, title: 'GV_SeedSale', category: 'Smart Contract', projectUrl: 'https://github.com/lambo10/Greedyverse-contracts.git', sourceCodeUrl: 'https://github.com/lambo10/Greedyverse-contracts.git' },

              { tags: ['microservice', 'blockchain-app'], image: pos_blockchain, title: 'Proof of Stake Chain Development', category: 'Full Blockchain', projectUrl: 'https://github.com/lambo10/PosBlockchain.git', sourceCodeUrl: 'https://github.com/lambo10/PosBlockchain.git' },

            ].filter(item => activeFilter === 'all' || item.tags.includes(activeFilter)).map((item, index) => (
              <div key={index} className="bg-[#28212e] rounded-lg overflow-hidden">
                <div className="relative h-48 md:h-64">
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
                <div className="p-4 md:p-6">
                  <span className="text-green-500 text-xs md:text-sm uppercase">{item.category}</span>
                  <h3 className="text-lg md:text-xl font-bold mt-2">{item.title}</h3>
                  <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                    {item.projectUrl && (
                      <Link href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-500 hover:underline text-sm md:text-base mb-2 md:mb-0">
                        See project
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    )}
                    {item.sourceCodeUrl && (
                      <Link href={item.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-500 hover:underline text-sm md:text-base">
                        Source Code
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated "What I Do" section */}
      <section id="what-i-do" className="relative bg-[#1e2024] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7f6a94] to-[#28212e] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-2">WHAT I DO</h2>
          <div className="flex items-center mb-10">
            <span className="text-green-500 mr-2">MY</span>
            <span className={`text-3xl ${allura.className}`}>Services</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-[#28212e] rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10">WEB DEVELOPMENT</h3>
                <h4 className="text-lg font-semibold mb-2">Web Design & Logo</h4>
                <p className="mb-4">Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.</p>
                
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <Image
                  src={pat1}
                  alt="Decorative dot pattern"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Apps Development */}
            <div className="bg-[#28212e] rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10">APPS DEVELOPMENT</h3>
                <h4 className="text-lg font-semibold mb-2">iOS & Android</h4>
                <p className="mb-4">Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.</p>
                
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <Image
                  src={pat1}
                  alt="Decorative dot pattern"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Game Development */}
            <div className="bg-[#28212e] rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10">GAME DEVELOPMENT</h3>
                <h4 className="text-lg font-semibold mb-2">Unity & Unreal Engine</h4>
                <p className="mb-4">Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games.</p>
               
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                <Image
                  src={pat1}
                  alt="Decorative dot pattern"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Professional Skills section */}
       <section id="skills-section" className="relative bg-[#1e2024] text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#28212e] to-[#7f6a94] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-2">PROFESSIONAL SKILLS</h2>
          <div className="flex items-center mb-10">
            <span className="text-green-500 mr-2">MY</span>
            <span className={`text-3xl ${allura.className}`}>Talent</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: "Node.js", percentage: 90, description: "Building scalable and efficient server-side applications with Node.js" },
              { skill: "React", percentage: 95, description: "Creating dynamic and responsive user interfaces using React" },
              { skill: "Next.js", percentage: 95, description: "Developing high-performance, SEO-friendly React applications with Next.js" },
              { skill: "PHP", percentage: 90, description: "Crafting robust backend solutions and content management systems with PHP" },
              { skill: "Unity", percentage: 85, description: "Designing and developing interactive 2D and 3D games using Unity engine" },
              { skill: "TypeScript", percentage: 90, description: "Enhancing JavaScript development with static typing and advanced features" },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{item.skill}</h3>
                  <span className="text-green-500">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer section */}
      <footer className="relative bg-[#1e2024] text-white py-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#28212e] to-[#28212e] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://github.com/lambo10" className="text-2xl hover:text-green-500 transition-colors">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/lambert-nnadi-842743178" className="text-2xl hover:text-green-500 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/nnadi_lambert" className="text-2xl hover:text-green-500 transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="text-sm">
              &copy; 2024 LambertNnadi.com
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
