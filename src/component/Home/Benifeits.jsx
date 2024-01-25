import React from 'react'
import ProblemStatment from './WrapperText'
const text = {
    heading: "BENEFITS",
    text: "Improve MSP (Mental, spiritual and physical) health. This program will significantly improve",
    list: [
        "Mental Health",
        "Spiritual Health",
        "Physical Health",
    ],
    textSecond: "It help to reducing your weight and also bring agility",
    listSecond: [
        "Focused Memory",
        "Concentration",
        "Better Memory"
    ]
}
const Benifeits = () => {
    return (
        <ProblemStatment>
            <div className='w-[900px] max-[940px]:w-full'>
                <div className='heading-div'>
                    <h1 className='text-theme-oragne text-[32px] font-semibold'>{text.heading} </h1>
                </div>
                <div className=' flex justify-center'>
                    <span className='border-2 border-black w-[25%]'></span>
                </div>
                <div className='text-div'>
                    <p className='text-[16.416px] text-theme-grey leading-2 md:text-[18px] md:text-left mb-5 ml-4'>
                        {text.text}
                    </p>
                </div>
                <div className='text-div'>
                    <ul className='list list-disc text-left ml-4  ' type="1">
                        {text.list?.map((item) => (
                            <li className='text-[16.416px] text-theme-grey leading-2 md:text-[18px]' key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-div'>
                    <p className='text-[16.416px] text-theme-grey leading-2 md:text-[18px] md:text-center md:mb-5 ml-4'>
                        {text.textSecond}
                    </p>
                </div>
                <div className='text-div'>
                    <ul className='list list-disc text-left ml-4  ' type="1">
                        {text.listSecond?.map((item) => (
                            <li className='text-[16.416px] text-theme-grey leading-2 md:text-[18px]' key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ProblemStatment>
    )
}

export default Benifeits