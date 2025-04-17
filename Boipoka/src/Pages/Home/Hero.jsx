import React from "react";

const Hero = () => {
  return (
    <div className="my-15 rounded">
      <section className="min-h-screen flex flex-col lg:flex-row gap-4 items-center justify-center p-6 bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            You can purchase any kind of books form here.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div>
            <img className="rounded-2xl " src="../../../boi-poka-Book-Vibe-Resources/books.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
