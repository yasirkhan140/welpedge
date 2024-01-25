import React from 'react'

const Yoga = () => {
    return (
        <div className='mt-[90px]'>
            <div className='bg-cover-image h-[400px] max-[584px]:h-[500px]'>
                <div className=''>
                    <h2 className='text-[39px] font-semibold leading-10 text-center'>What is in 9 day challenge</h2>
                </div>
                <div className='text-div w-[50%] items-center flex-col justify-center mt-5'>
                    <div className='mx-auto relative flex justify-center items-center'>
                        <p className='text-[18px] font-[400] '>
                            To make this a 9-day magic,just follow these simple steps</p>
                    </div>
                    <div className='mt-5 mx-auto relative flex justify-center items-center text-[18px] font-[400]'>
                        <ul className='list-disc ml-20 max-[1200px]:ml-15 max-[1100px]:ml-10 max-[1000px]:ml-8'>
                            <li>
                                Eat once a day
                            </li>
                            <li>Millet based food</li>
                            <li>9 Minutes of meditation every day</li>
                            <li>9 Mintutes with Mother/Motherly figure/Mother earth/Mother Godess</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='img-yoga-div'>
                <div className='relative'>
                    <img src="/img/yoga.jpg" alt="yoga" className=' absolute top-[-150px] min-[1500px]:right-[27rem] rounded-[85px] w-96 right-20 max-[786px]:top-[-70px] max-[584px]:top-[-80px]' />
                </div>

            </div>
        </div>
    )
}

export default Yoga