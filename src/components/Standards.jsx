const Standards = () => {
  const dogs = [
    {
      src: './d2.jpg',
      title: 'Spacious Play Areas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique tenetur molestiae dicta mollitia hic distinctio, quisquam consequuntur ea aut, delectus nam, consectetur doloribus quo animi sint nostrum perferendis error.'
    },
    {
      src: './d3.jpg',
      title: 'Cozy Resting Spaces',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique tenetur molestiae dicta mollitia hic distinctio, quisquam consequuntur ea aut, delectus nam, consectetur doloribus quo animi sint nostrum perferendis error.'
    },
    {
      src: './d4.jpg',
      title: 'Safe & Clean Environment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique tenetur molestiae dicta mollitia hic distinctio, quisquam consequuntur ea aut, delectus nam, consectetur doloribus quo animi sint nostrum perferendis error.'
    },
  ];

  return (
    <div className='p-6 sm:p-8 space-y-8 bg-[#f1e6db] pt-16 sm:pt-24'>
      <h1 className='font-bowlby text-3xl sm:text-6xl lg:text-[100px] text-center'>
        OUR PET CARE STANDARDS
      </h1>
      <div className='text-base sm:text-xl p-4 space-y-12'>
        {dogs.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-evenly space-y-6 sm:space-y-0 ${
              index % 2 === 1 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <img
              src={item.src}
              className='w-[50%] sm:w-[20%] object-cover rounded-full'
              alt={item.title}
            />
            <div className='w-[90%] sm:w-[50%] text-center sm:text-left'>
              <p className='text-2xl sm:text-3xl font-semibold'>{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Standards;
