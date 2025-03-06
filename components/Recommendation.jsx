import React from 'react'
import Slider2 from './Slider2'

const Recommendation = () => {
  return (
    <div className='px-10 py-10 bg-[#F4F4F4] '>
      <h3 className="text-2xl font-bold text-[#E67002] mb-1">Service Excellence</h3>
      <p className="text-[#0A2540] mt-2 text-lg font-semibold mb-6 w-11/12 leading-relaxed">Recommended by thousands of freelancers</p>
      <p className="text-[#0A2540] mt-2 text-sm mb-6 w-8/12 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil totam quidem, consequuntur fugit dicta quisquam vero sed molestias, dolores perspiciatis esse optio enim expedita cupiditate!</p>
      <Slider2></Slider2>
    </div>
  )
}

export default Recommendation
