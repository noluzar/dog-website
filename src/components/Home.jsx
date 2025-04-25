import React from "react";
import { MdHotel } from "react-icons/md";
import { GiDogBowl } from "react-icons/gi";
import { FaCut } from "react-icons/fa";

const Home = () => {
  const services = [
    {
      Icon: MdHotel,
      title: "Hotel",
      decription: "Comfortable stays for your pet.",
    },
    {
      Icon: GiDogBowl,
      title: "Pet Store",
      decription: "Quality products for all your needs.",
    },
    {
      Icon: FaCut,
      title: "Grooming",
      decription: "Expert grooming for a fresh look.",
    },
    {
      Icon: MdHotel,
      title: "Hotel",
      decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center pt-24">
        <div className="md:w-[50%] space-y-4 pl-8 ml-8">
          <div className="space-y-8">
            <h1 className="font-bold md:text-[100px] font-bowlby text-[30px]">
              YOUR DOG'S <br />
              SECOND HOME
            </h1>
            <p className="md:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              earum dolores totam necessitatibus quia debitis maxime beatae
              sapiente? Fuga ipsa consequuntur deserunt iure et id sunt animi
              rem tempore facilis!
            </p>
            <button className="bg-[#ff6726] rounded-full p-4 text-white text-xl">
              Schedule a visit
            </button>
          </div>
        </div>
        <div className="md:w-[40%] hidden md:block" >
        <img src="./tails.png" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center transform translate-y-[70px] px-4 pb-4">
        <div className="bg-white rounded-lg flex flex-wrap md:flex-nowrap items-start justify-evenly p-8 w-full max-w-[90%] md:w-[70%]">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 w-full sm:w-[50%] mb-6 md:mb-0"
            >
              <item.Icon md:size={40} size={20} />
              <div className="md:w-[75%]">
                <p className="font-bold text-xl">{item.title}</p>
                <p className="text-sm">{item.decription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
