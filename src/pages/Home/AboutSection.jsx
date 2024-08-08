import React from 'react';
import aboutImage from '../../assets/aboutImg.jpg'; 

function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center py-12 px-20 ">
      <div className="flex-1 mb-6 md:mb-0 md:mr-8"> 
        <img
          src={aboutImage}
          alt="About Us"
          className="w-[80%] h-auto object-cover shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      
      <div className="flex-1 mx-4 md:mx-8"> 
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Selected materials designed for comfort and sustainability
        </h3>
        <p className="text-lg text-gray-600 mb-6 break-words">
          Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.
        </p>
        <a href="#read-more" className="inline-block px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default AboutSection;
