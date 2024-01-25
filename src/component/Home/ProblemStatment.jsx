import React from 'react'
import ProblemStatment from './WrapperText'
const text =
{
    heading: "Problem Statement",
    text: "The major problem India and the world is facing around the issues with mental, spiritual and physical health.The reason for these problems because of lack of discipline of our habits and thought process.We have started eating way too much too many times and not right quality of food.The hyper active lifestyle is causing stress and mental health issues.As per different survey around 20% of Indians are obes(based on body mass index)."
}

const FirstText = () => {
    return (
        <ProblemStatment>
            <div className='heading-div'>
                <h1 className='text-theme-oragne text-[32px] font-semibold'>{text.heading} </h1>
            </div>
            <div className=' flex justify-center'>
                <span className='border-2 border-black w-[25%]'></span>
            </div>
            <div className='text-div'>
                <p className='text-[16.416px] text-theme-grey leading-2  md:text-[18px] md:text-left'>
                    {text.text}
                </p>
            </div>
        </ProblemStatment>
    )
}
export default FirstText