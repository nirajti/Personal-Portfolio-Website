import React from 'react';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        
        <a href="https://youtube.com/@nirajtiwari242" target="_blank" rel="noopener noreferrer">
          Niraj Tiwari
        </a>
      </div>
      <ul className="hidden md:flex space-x-4">
        <li><a href="#main">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About Me</a></li>
      
        <li><a href="#feedback">Feedback</a></li>
      </ul>
      <div className="flex space-x-4">
        <button className="bg-blue-500 px-4 py-2 rounded">Contact Me</button>
        <button id="menuButton" className="md:hidden">
          <i className='bx bx-menu'></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
