import React from 'react'
import ProblemStatment from './WrapperText'
const text = {
    heading: 'OUR ACTION & PLEDGE',
    text: "I would like to pledge that I will bring discipline to my food habits and thought process to improve my physical, mental and spiritual health by doing the following",
    list: ["During the 9 days will eat only one time, possibly millet based food"
        , " Drink minimum nine glasses/bowl of liquids each day",
        "Meditate for minimum nine minutes each day",
        "Spend minimum nine minutes a day with my mother or motherly figure",
        "Motivate nine family members or friends to be part of this program"
    ],
    last: "#9 day challenge for positive (MSP) health"
}
const OurAction = () => {
    return (
        <ProblemStatment>
            <div className='heading-div'>
                <h1 className='text-theme-oragne text-[32px] font-semibold'>{text.heading} </h1>
            </div>
            <div className=' flex justify-center'>
                <span className='border-2 border-black w-[25%]'></span>
            </div>
            <div className='text-div'>
                <p className='text-[16.416px] text-theme-grey leading-2 md:text-[18px] md:text-left mb-5'>
                    {text.text}
                </p>
            </div>
            <div className='text-div'>
                <ol className='list list-decimal text-left ml-4  ' type="1">
                    {text.list?.map((item) => (
                        <li className='text-[16.416px] text-theme-grey leading-2 md:text-[18px]' key={item}>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </ProblemStatment>
    )
}

export default OurAction