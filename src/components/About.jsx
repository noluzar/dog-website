import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4 my-8 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-bowlby text-center">
          WHY CHOOSE US?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 items-center">
          {[
            { src: './dog-food.png', title: 'Expert Care', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor blanditiis harum illum nihil cumque culpa.' },
            { src: './dog-house.png', title: 'Comfortable Stay', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor blanditiis harum illum nihil cumque culpa.' },
            { src: './brush.png', title: 'Grooming Services', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor blanditiis harum illum nihil cumque culpa.' },
            { src: './dogg.png', title: 'Play and Socialization', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor blanditiis harum illum nihil cumque culpa.' },
            { src: './product.png', title: 'Premium Products', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor blanditiis harum illum nihil cumque culpa.' },
            { src: './building.png', title: 'Convenient Location', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor blanditiis harum illum nihil cumque culpa.' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <img src={item.src} alt={item.title} className="w-24 h-24 md:w-32 md:h-32" />
              <div>
                <p className="font-bold text-lg sm:text-xl my-2">{item.title}</p>
                <p className="text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#ff6726] text-white px-6 py-3 rounded-full text-sm sm:text-base">
          Schedule a visit
        </button>
      </div>
    </div>
  );
};

export default About;
