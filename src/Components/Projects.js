import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex justify-center items-center bg-white text-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4">Project 1</div>
          <div className="bg-gray-200 p-4">Project 2</div>
          <div className="bg-gray-200 p-4">Project 3</div>
          <div className="bg-gray-200 p-4">Project 4</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
