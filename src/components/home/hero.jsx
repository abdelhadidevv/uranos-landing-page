import React from "react";
import Header from "../layout/header";
import Input from "../shared/Input";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-hero bg-bottom bg-no-repeat bg-cover flex flex-col">
      <Header />
      <h2 className="font-roboto font-thin text-4xl px-1 lg:text-6xl text-white text-center mt-28">
        Discover the wold of awsome <br />
        <span className="font-medium">free PSD templates</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-3.5 items-center justify-center mt-14">
        <Input inputPlaceholder="email" inputType="email"/>
        <Input inputPlaceholder="password" inputType="password"/>
        <button className="w-40 h-14 uppercase text-center text-black bg-main-yellow rounded font-roboto font-bold text-lg">register</button>
      </div>
    </div>
  );
};

export default Hero;
