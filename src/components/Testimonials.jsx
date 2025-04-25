import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#f1e6db] pt-[20px] py-4 overflow-hidden">
      <h1 className="font-bowlby md:text-[100px] text-[30px] text-center">TESTIMONIALS</h1>
      <div className="md:flex items-center md:space-x-8 justify-center px-4 space-y-2">
        <div className="md:h-[80vh] h-[50vh] w-full relative cursor-pointer hover:bg-black hover:opacity-75 hover:rounded-xl">
          <img src="./blue.jpeg" className="h-full w-full rounded-xl" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
          <div className="absolute top-0 left-0 p-4 h-full flex flex-col items-center justify-center">
            <h1 className="font-bowlby md:text-[80px] text-[20px]">Rex, the Happy Pup</h1>
            <p className="font-bowlby md:text-[30px] text-[20px] md:w-[80%]">
              " Woof! I had the best time at Fur Seasons! I made so many new
              friends and got lots of treats. I can't wait to come back! "
            </p>
          </div>
        </div>
        <div className="md:h-[80vh] h-[50vh] w-full relative cursor-pointer hover:bg-black hover:opacity-75 hover:rounded-xl">
          <img src="./bella.jpeg" className="h-full w-full rounded-xl" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl"></div>
          <div className="absolute top-0 left-0 p-4 h-full flex flex-col items-center justify-center">
            <h1 className="font-bowlby md:text-[80px] text-[20px]">Bella, the Playful Pup</h1>
            <p className="font-bowlby md:text-[30px] text-[20px] md:w-[80%]">
              " Thanks to the Fur Seasons hotel, I had the comfiest bed and lots
              of playtime! My humans got cute pictures of me, and I felt so
              loved. "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
