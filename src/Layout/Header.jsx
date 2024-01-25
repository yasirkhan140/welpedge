import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramLine } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <header className='m-[10px]' >
      <div className='header-top'>
        <div className='header-bar '>
          <div className=''>
            <div className='grid m-auto min-h-28 max-w-7xl grid-flow-col px-6'>
              <div className='img-div flex items-center'>
                <img src="/img/header-img.png" />
              </div>
              <div className='div-nav flex gap-2 items-center justify-end max-[930px]:hidden'>
                <nav>
                  <div>
                    <ul className='flex gap-4 text-xl'>
                      <li><Link to="/" className='px-4 uppercase'>Home  </Link> </li>
                      <li><Link to="/about" className='px-4 uppercase'>About  </Link> </li>
                      <li><Link to="/video" className='px-4 uppercase'>Video  </Link> </li>
                      <li><Link to="/form" className='px-4 uppercase'>Video  </Link> </li>
                    </ul>
                  </div>
                </nav>
                <div>
                  <ul className='flex gap-8'>
                    <li><RiInstagramLine height={"18xp"} width={"18px"} /></li>
                    <li><MdFacebook height={"18xp"} width={"18px"} /></li>
                    <li><IoLogoTwitter height={"18xp"} width={"18px"} /></li>
                  </ul>
                </div>
              </div>
              <div className=' mobile-menu min-[930px]:hidden h-[40px] w-[40px] flex items-center justify-center'>
                <div>
                  <button className='z-[1000] bg-black top-[30px] p-3 absolute right-0 m-auto  text-white text-[2rem] rounded-sm font-normal' type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                    onClick={() => setDrawerOpen(!drawerOpen)}
                  >{drawerOpen ? <RxCross1 /> : <GiHamburgerMenu />}</button>
                </div>
                <div>
                  <div
                    id="drawer-example"
                    className={drawerOpen ? "fixed top-0 right-[-320px]   z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-theme-orange w-80 dark:bg-theme-orange" : "fixed top-0 right-0  left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"}
                    tabIndex={-1}
                    aria-labelledby="drawer-label"
                  >
                    <div className='mt-5'>
                      <ul className='flex gap-4 text-[0.88rem] flex-col text-white pt-[5%] px-[8%] pb-[1%]'>
                        <li><Link to="/" className='px-4 uppercase'>Home  </Link> </li>
                        <li><Link to="/about" className='px-4 uppercase'>About  </Link> </li>
                        <li><Link to="/video" className='px-4 uppercase'>Video  </Link> </li>
                        <li><Link to="/form" className='px-4 uppercase'>Video  </Link> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >

    </header >
  )
}

export default Header