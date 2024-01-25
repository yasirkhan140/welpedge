import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Navrathri = () => {
    return (
        <div className='mt-10'>
            <div className='flex  justify-center gap-10 max-[786px]:flex-wrap'>
                <div className='img-div  w-3/8'>
                    <img src="/img/navrathri.png" alt="navtarthiri" className='rounded-3xl  max-h-[588px]' />
                </div>
                <div className='w-3/12 max-[786px]:w-full'>
                    <Carousel showThumbs={false} swipeable={true} infiniteLoop={true} autoPlay={true}>
                        <div >
                            <img src="/img/1.png" />
                        </div>
                        <div>
                            <img src="/img/2.png" />
                        </div>
                        <div>
                            <img src="/img/food3-1.jpg" />
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default Navrathri