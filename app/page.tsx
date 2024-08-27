"use client";

import React from "react";

const Home = () => {
  const message = "Hello World!";

  return (
    <main className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
        Chat Page
      </h1>
      <section className="max-w-3xl mx-auto w-full">
        <div className="bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-xl text-gray-300">{message}</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
