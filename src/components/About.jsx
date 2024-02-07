import React from "react";
import { ReactTyped } from "react-typed";

function About() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-lg text-[#55efc4]  font-bold p-2">
          Let's start to be a developert
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-semibold md:py-6">
          Play With Code
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Lorem ipsum dolor sit 
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={40}
            backSpeed={20}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          dolor molestias consequuntur.
        </p>
        <button className="bg-green-400 w-[200px] rounded-md mx-auto my-6 py-3 text-black">Let's Begin</button>
      </div>
    </div>
  );
}

export default About;
