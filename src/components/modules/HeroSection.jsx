import React from "react";
import SearchIcon from "../../../public/icons/SearchIcon";

function HeroSection() {
  return (
    <section className="bg-hero-section h-[695px] bg-cover bg-center bg-no-repeat w-full relative before:bg-black/80 before:w-full before:h-full before:absolute flex items-center justify-around rounded-tl-lg rounded-tr-lg rounded-br-[100px] rounded-bl-lg overflow-hidden flex-col mt-4">
      <div className="flex flex-col items-center justify-center relative">
        <div className=" text-white relative text-center space-y-8">
          <h1 className="text-5xl font-bold">
            اجاره آنلاین ویلا و سوئیت در شمال و سراسر ایران
          </h1>
          <h2 className="text-3xl font-thin ">املاکیت کنار شماست</h2>
        </div>
        <div className="relative flex bg-white/90 w-1/2 p-1 pr-4 rounded-full mt-8">
          <input
            type="text"
            placeholder="کجا دوس داری بری ..."
            className="bg-transparent outline-none flex-1"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="bg-white/10 relative text-white text-xl font-thin p-2 rounded ">
        <span>بهترین تجربه را برای شما آرزو میکنیم...</span>
      </div>
    </section>
  );
}

export default HeroSection;
