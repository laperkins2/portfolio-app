import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="mb-2">
            Hello, I am Louis, a passionate Respiratory therapist/ future coder.
          </p>
          <p className="mb-2">
            I believe in the power of technology to solve problems and enhance
            lives, which is why I am dedicated to creating innovative solutions.
          </p>
          <p className="mb-2">
            Throughout my journey, I have had the opportunity to work on a
            variety of projects that showcase my skills and expertise.
          </p>
          <h2 className="text-xl font-bold mb-2">
            A brief description of my about my projects. To view them click onto
            the projects tab and click the links.
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">
              Project 1: Portfolio page
            </h3>
            <p className="mb-2">
              This was my very first capstone I accomplish. It is a very vanilla
              setup as this was my introduction to coding
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">
              Project 2: Level 2 capstone.
            </h3>
            <p className="mb-2">
              With this project I used API to accomplish the communication
              between two systems. I use a nba api to get a player along with
              there stats.
            </p>
          </div>

          <p className="mb-4">
            These projects represent just a glimpse of what I am capable of, and
            I am constantly seeking new opportunities to learn and grow.
          </p>
          <p className="mb-4">
            Thank you for taking the time to learn more about me and my work.
            Feel free to explore my portfolio to see more of my projects!
          </p>
        </div>
      </div>
    </div>
  );
}
