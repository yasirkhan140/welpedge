import React, { Fragment } from 'react'
const data = [
    {
        heading: "Inspired by Hon. Prime Minister,Narendra Modiji, He Fasts only on Liquids for all 9 days twice a year.He meditates & detoxifies twice a year during Navrathri.",
        img: "/img/modi.webp",
        heading2: "This seem to be one of an important factorhe being healthy or such a long time and he's also energetic."
    },
    {
        heading: 'During his first trip to USA as PM,he met with president Obama, he addressed United Nations, White house meetings, business leaders meeting, addressed Indian community of 20,00,addressed 15,000 people at central park, all during his Navratri fasting, still he was very energetic, agile and effective.',
        img: "/img/modi2.jpg",
        heading2: undefined
    },
    {
        heading: "Our Hon.Pm is leading by example at the age of 73. He is practicing this for 40+ years during Navrathri.",
        img: "/img/modi3.jpg",
        heading2: undefined
    }
]
const InsriredCard = () => {
    return (
        <Fragment>
            {data?.map((item, i) => (
                <div className='my-5 ' key={i}>
                    <div className='shadow-black shadow-lg bg-gradient border-4 p-2 rounded-3xl border-black px-[150px] max-[980px]:px-0'>
                        <div className='flex justify flex-wrap max-[786px]:flex-col  max-[786px]:gap-10'>
                            <div className='first-div w-3/6 max-[786px]:w-full'>
                                <div>
                                    <h2 className='text-[19px] font-semibold text-theme-grey'>
                                        {item.heading}
                                    </h2>
                                </div>
                            </div>
                            <div className='second-div w-3/6 max-[786px]:w-full'>
                                <div className='flex justify-center'>
                                    <img src={item?.img} className='' />
                                </div>
                                <div>
                                    <h2 className='text-[19px] font-semibold text-theme-grey'>
                                        {item?.heading2}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default InsriredCard