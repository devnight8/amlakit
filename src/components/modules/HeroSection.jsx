import React from "react";
import SearchIcon from "../../../public/icons/SearchIcon";

function HeroSection() {
  return (
    <section className="style-hero-section">
      <div className="flex flex-col items-center justify-center relative">
        <div className=" text-white relative text-center space-y-2 md:space-y-8">
          <h1 className="md:text-3xl lg:text-4xl font-bold">
            اجاره آنلاین ویلا و سوئیت در شمال و سراسر ایران
          </h1>
          <h2 className="md:text-3xl font-thin ">املاکیت کنار شماست</h2>
        </div>
        <div className="relative flex bg-white/90 w-full md:w-10/12 p-1 pr-4 rounded-full mt-8">
          <input
            type="text"
            placeholder="کجا دوس داری بری ..."
            className="bg-transparent outline-none flex-1 placeholder:text-[13px]"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="bg-white/10 relative text-white text-[13px] md:text-xl font-thin mt-4 p-2 rounded ">
        <span>بهترین تجربه را برای شما آرزو میکنیم...</span>
      </div>
    </section>
  );
}

export default HeroSection;
