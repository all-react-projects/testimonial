import React from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

function Testimonial(props) {
    let reviews=props.reviews;

    
  return (
    <div>
        <div>
          <Card review={reviews[0]} />
        </div>

      <div className='flex text-3xl mt-5 gap-3 text-violet-400 mx-auto'>
          <button className='cursor-pointer hover:bg-violet-50'>
            <FiChevronLeft/>
          </button>
          <button className='cursor-pointer hover:bg-violet-500'>
            <FiChevronRight/>
        </button>
      </div>

      <div>
          <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
          cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial