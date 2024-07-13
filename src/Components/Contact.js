import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex justify-center items-center bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 bg-gray-900 text-white" />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 bg-gray-900 text-white" />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 bg-gray-900 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 p-2 text-white">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
