import React from 'react';
import headerImg from '../assets/header-img.jpg';

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100" id="main">
      <div className="md:w-1/2">
        <h5 className="text-xl font-bold">Hey, I am Niraj Tiwari</h5>
        <h3 className="text-2xl mt-2">I create <span className="text-blue-500">Frontend UI Developer</span> at Cognizant.</h3>
        <p className="mt-4">
          I am a Software Engineer (Frontend UI Developer) at Cognizant, Post Graduate from RGPV, Bhopal. 
          This is Our Youtube channel where I make videos related to college life, Engineering College, IT Coding 
          Skills, career guidance & other programming stuff. You can subscribe to my channel to get quality content.
          Thanks!
        </p>
        <button className="mt-4 bg-blue-500 px-4 py-2 rounded">Get In Touch</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src={headerImg} alt="Header" className="rounded" />
      </div>
    </div>
  );
}

export default Main;
