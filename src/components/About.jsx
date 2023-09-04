import React from 'react';
import { aboutus } from '../assets';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between items-center py-8 md:py-12 px-4 md:px-12 bg-white"
    style={{height: 'auto md:65vh'}}>
      
      {/* Image on the Left */}
      <div className="flex-1 mb-8 md:mb-0">
        <img src={aboutus} alt="Okanagan valley" className="sm:max-w-[600px] max-w-[450px] h-auto mx-auto" />
      </div>
      
      {/* Text Content on the Right */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#183049]">Who are we?</h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
          We're thrilled to introduce Okanagan Marine Design at UBC Okanagan. We have two main focus areas: Electric Propulsion Boats and Autonomous Underwater Vehicles. This is the first and only club at UBCO dedicated to autonomous vehicles! If you're as passionate about engineering and technology as we are, this club is your next port of call.
        </p>
        <Link to="/joinus" className="inline-block px-6 py-3 font-semibold text-white bg-[#183049] hover:bg-opacity-95 rounded-md">
            Join Us
        </Link>
      </div>
    </section>
  );
}

export default About;