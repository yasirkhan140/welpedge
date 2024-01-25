import React from 'react'
const list = [
    "Navratri is a nine-day Hindu festival that honors the goddess Durga.",
    "The festival of Navratri is celebrated twice in a year- once in the month of Chitra (March-April) and again in the month of Sharad(September-October).",
    "Navratri is a time to celebrate the feminine energy of the universe and to worship the goddesses who repent that energy.",
    "The nine days of Navratri are spent fasting praying, and doing good deeds.",
    "On the tenth day, the festival concludes with a celebration called Dussehra.",
]
const Astep = ({ page }) => {
    return (
        <div className='mt-20 pt-10 max-[786px]:mt-[150px] max-[786px]:pt-20'>
            <div className=' bg-cover h-[350px] z-0 '>
                <div className='mx-auto w-3/5 max-[1200px]:ml-2 max-[786px]:mx-0'>
                    <div className=''>
                        <h1 className='text-theme-oragne text-[29px]  font-semibold max-[786px]:text-[25px]'>A Step towards</h1>
                    </div>
                    <div className=''>
                        <h1 className=' text-[48px] font-semibold text-theme-grey max-[864px]:text-[25px]'>Fit India & Healthy India</h1>
                    </div>
                    <div className='w-44 border-2 border-[#FF914D]' >
                    </div>
                    <div>
                        <p className='text-[18px] text-theme-grey'>
                            Vision of Healthy Mind,Healthy Body to acieve Healthy India.To bring discipline to your food, habits and thought process to improve mental, spiritual and physical health.
                        </p>

                    </div>
                    <div className='mt-3' style={{ display: page === "about" && "none" }}>
                        <ul className='list-disc ml-5'>
                            {list.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='relative bottom-10 max-[786px]:bottom-[-7.5rem]' style={{ transform: "rotate(180deg)" }}>
                    <svg
                        style={{

                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 283.5 19.6"
                        preserveAspectRatio="none"
                    >
                        <path
                            className="elementor-shape-fill"
                            style={{ opacity: "0.1" }}
                            d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                        />
                        <path
                            className="elementor-shape-fill"
                            style={{ opacity: "0.05" }}
                            d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                        />
                        <path
                            className="elementor-shape-fill"
                            style={{ opacity: "0.05" }}
                            d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                        />
                        <path
                            className="elementor-shape-fill"
                            style={{ display: "none" }}
                            d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                        />
                    </svg>
                </div>

            </div>
        </div >
    )
}

export default Astep