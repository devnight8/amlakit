import React from "react";
import SearchIcon from "../../../public/icons/SearchIcon";

function HeroSection() {
  return (
    <section className="bg-hero-section md:h-[695px] bg-cover bg-center bg-no-repeat w-full relative before:bg-black/80 before:w-full before:h-full before:absolute flex items-center justify-around rounded-tl-[10px] md:rounded-tl-[30px] rounded-tr-[10px] md:rounded-tr-[30px] rounded-br-[60px] md:rounded-br-[160px] rounded-bl-[10px] md:rounded-bl-[30px] overflow-hidden flex-col mt-4 md:mx-0 py-5">
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
