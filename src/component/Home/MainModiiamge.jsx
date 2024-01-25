import React from 'react'
import { MdOutlineArrowCircleRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const MainModiiamge = () => {
  return (
    <div className='main'>
      <div className='gap-4 main-div-img-modi bg-theme-orange min-h-[383px] flex justify-center'>
        <div className='img-div '>
          <img src="/img/viveanand.png" className='vivanand-img relative w-[60%]' />
        </div>
        <div className='flex  justify-center text-center mt-6'>
          <div className='text-heading'>
            <div>
              <h2 className='uppercase text-[32px] max-[786px]:text-[22px] text-[#1e293b] font-semibold'>
                Vision to action
              </h2>
            </div>
            <div>
              <h1 className='capitalize text-[54px] max-[786px]:text-[30px] font-semibold text-white'>
                #9 Day challenge

              </h1>
              <h4 className='capitalize text-[27px] max-[786px]:text-[19px] font-semibold text-white'>
                for positive health
              </h4>
            </div>
            <div className='flex items-center justify-center h-[25px] mb-5 max-[786px]:my-7 max-[786px]:mb-10'>
              <h5 className='absolute  text-[25px] max-[786px]:text-[20px] font-semibold text-[#1e293b] '>
                Program to bring discipline to your food habits and thought process to improve mental, spiritual and physical health.
              </h5>
            </div>
            <div className='btn-div'>
              <button className='bg-white border-2 border-[#61F4DB] rounded-3xl px-4 py-2'><Link to="/contact-us" className='flex items-center gap-2'><MdOutlineArrowCircleRight />Pledge Form</Link></button>
            </div>
          </div>
        </div>
        <div className='modi-ji-img'>
          <img src="/img/modiji.png" alt="modiji" className='w-[70%]' />
        </div>
      </div>
    </div >
  )
}

export default MainModiiamge