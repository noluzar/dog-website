import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-4 text-xl text-center p-8'>
            <h2>Get 15% Off Your First Booking!</h2>
            <p className='w-full sm:w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, sit unde facilis inventore amet error odio, obcaecati
                consequuntur aperiam</p>
            <div className='flex bg-white items-center p-2 rounded-full w-full sm:w-[30%] justify-between'>
                <input placeholder='email' className='px-4 py-2 w-full sm:w-auto' />
                <a href='#' className='text-white bg-[#ff6726] text-3xl rounded-full p-3'>
                    <IoMdArrowRoundForward />
                </a>
            </div>
        </div>
    );
}

export default Contact;
