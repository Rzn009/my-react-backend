import React from "react";
import laptop from "../assets/laptop.png";

const Analis = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-green-400 font-bold">SOFTWARE ENGGINER DASHBOARD</p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Software Centrally </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            eaque maxime dolores ipsum tempora voluptates?
          </p>
          <button className="bg-black text-green-200 w-[200px] rounded-md mx-auto font-medium md:mx-0 my-6 py-3 ">Lest start</button>
        </div>
      </div>
    </div>
  );
};

export default Analis;
