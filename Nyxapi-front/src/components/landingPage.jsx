import React from 'react';
import Navbar1 from './navbar1';
import bg from '../assets/bg.webp'; // Background image for hero section
import aboutMeImage from '../assets/aboutMeImage.webp'; // About section image

// Importing feature images
import endpointsImage from '../assets/endpoints.webp';
import jsonImage from '../assets/json.webp';
import frontendImage from '../assets/frontend.webp';

const LandingPage = () => {
  return (
    <div className="bg-[#131319] text-white font-sans">
      {/* Navbar */}
      <Navbar1 />

      {/* Hero Section with Background Image */}
      <section
        className="relative flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          height: '100vh',
          color: '#d3d7da',
        }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[#131319] opacity-80"></div>
        
        {/* Hero Text */}
        <div className="relative z-10 max-w-2xl px-4 mt-10">
          <p className="text-3xl font-light text-gray-300 mb-2">Introducing</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span style={{ color: '#4A90E2' }}>NyxAPI</span>
          </h1>
          <p className="text-xl mb-8 max-w-lg mx-auto opacity-80">
            Accelerating frontend development with powerful mock APIs.
          </p>
          <button className="bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold text-white hover:bg-blue-500 shadow-lg focus:outline-none">
            Get started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white dark:bg-[#131319] py-10">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="text-6xl font-extrabold mb-4 text-gray-300 text-center">What It's All About</h2>

          <main className="relative z-20 w-full mt-8 rounded-2xl p-1 dark:bg-[#131319]">
            {/* Glassmorphic Inner Container */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#0D121A] backdrop-blur-lg border border-white/20 rounded-xl">
              <img 
                className="h-22 w-26 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" 
                src={aboutMeImage} 
                alt="About NyxAPI" 
              />
              
              <div className="mt-2 md:mx-6 p-8 text-white">
                <p className="text-lg leading-relaxed">
                  Empowering Developers with Seamless Mock API Generation.
                  Streamlined Development Workflow for Frontend and Backend Independence.
                  NyxAPI offers a dynamic and reliable platform for generating mock APIs, designed to facilitate the development of front-end features even before the backend is fully developed. With NyxAPI, frontend developers can start creating and testing their interfaces independently, bridging the gap between front-end and back-end teams. This accelerates project timelines and minimizes dependency bottlenecks, allowing seamless collaboration between all development team members.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 dark:bg-[#131319] text-center">
        <h2 className="text-6xl font-extrabold mb-4 text-gray-300">Powerful Features just for you</h2>
        <p className="mb-10 max-w-2xl mx-auto text-gray-400 text-2xl">
          Our platform offers a range of powerful features designed to elevate your web3 experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Feature Card 1 */}
          <div className="relative dark:bg-[#131319]  p-6 rounded-lg shadow-lg backdrop-blur-lg border border-blue-500/30">
            <img src={endpointsImage} alt="Custom Endpoints" className="w-18 h-18 mx-auto mb-4 rounded-xl" />
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Custom Endpoints Creation</h3>
            <p className="text-gray-400 mb-2 text-lg">Easily set up RESTful endpoints to simulate real API responses, mirroring backend functionality and enabling frontend development to continue smoothly without a complete backend.</p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="relative dark:bg-[#131319] p-6 rounded-lg shadow-lg backdrop-blur-lg border border-blue-500/30">
            <img src={jsonImage} alt="Flexible JSON" className="w-18 h-18 mx-auto mb-4 rounded-xl" />
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Flexible JSON Data Generation</h3>
            <p className="text-gray-400 mb-2 text-lg">Choose from various data types and structures to generate randomized responses that simulate production data.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="relative dark:bg-[#131319]  p-6 rounded-lg shadow-lg backdrop-blur-lg border border-blue-500/30">
            <img src={frontendImage} alt="Independent Frontend" className="w-18 h-18 mx-auto mb-4 rounded-xl" />
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Independent Frontend Development</h3>
            <p className="text-gray-400 text-lg">Empower your frontend team to progress independently, eliminating the need to wait for backend availability.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-[#131319] py-6 text-center">
        <div className="text-2xl font-bold text-blue-400 mb-2">NyxAPI</div>
        <hr className="border-gray-600 w-1/2 mx-auto mb-4" />
        <p className="text-gray-500 text-sm mb-4">&copy; Copyright 2021. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-400"><i className="fab fa-reddit"></i></a>
          <a href="#" className="text-gray-500 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-500 hover:text-gray-400"><i className="fab fa-github"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
