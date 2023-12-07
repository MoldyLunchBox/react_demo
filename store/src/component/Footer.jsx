import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

export const Footer = () => {
  const googleAPPURL = "https://play.google.com/store/apps/details?id=host.exp.exponent";
  return (
    <div className='my-10 md:mx-10 '>

      <div className='flex flex-col'>
        {/* first row */}
        <div className="flex flex-row justify-between">

          <div className='flex flex-row items-center'>
            <img src="boas_logo.png" className='w-[80px]' alt="" />
            <h2 className='font-bold text-xl'> BOAS</h2>
          </div>
          <div className='flex gap-3 flex-row items-center'>
            <FacebookIcon style={{ color: "#23A6F0" }} />
            <InstagramIcon style={{ color: "#23A6F0" }} />
            <TwitterIcon style={{ color: "#23A6F0" }} />
          </div>
        </div>
        {/* line */}
        <hr className="w-full h-px mx-2 my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>


        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="lg:flex lg:justify-between">
              <div className="mb-6 lg:mb-0 lg:max-w-[40vw]">
                <h1 className='mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white'>BOAS - Save Jeans. Save Lives</h1>
                <p className='text-gray-500 pr-2 dark:text-gray-400 text-sm font-medium'>You've made it to the end! Thanks for taking the time. If you're here because you're lost, feel free to contact us and we'll get you back on track.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ABOUT BOAS</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className='mb-4'>
                      <a href="https://shop.boas.co/pages/mission" className="hover:underline">Mission</a>
                    </li>
                    <li className='mb-4'>
                      <a href="https://shop.boas.co/a/faq" className="hover:underline">FAQs</a>
                    </li>
                    <li>
                      <a href="https://shop.boas.co/pages/contact-us" className="hover:underline">Contact</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">BRANDS AND PRESS</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://shop.boas.co/pages/press" className="hover:underline ">Press</a>
                    </li>
                    <li>
                      <a href="https://shop.boas.co/pages/affiliate" className="hover:underline">Affiliate Program</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download the BOAS app </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">

                      <GooglePlayButton
                        url={googleAPPURL}
                        theme={"light"}
                        width="2"
                        height="9"
                        className={"text-xs  min-w-[170px]"}
                      />
                    </li>
                    <li>
                      <AppStoreButton
                        url={googleAPPURL}
                        theme={"light"}
                        width="2"
                        height="9"
                        className={"text-xs  min-w-[170px]"}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Boas</a>. All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>

        {/* <div className="flex flex-col lg:flex-row ">
          <div className="basis-1/3 bg-slate-400">
            <div className='flex flex-col'>
              <h1>BOAS - Save Jeans. Save Lives</h1>
              <p>You've made it to the end! Thanks for taking the time. If you're here because you're lost, feel free to contact us and we'll get you back on track.</p>
            </div>
          </div>
          <div className="basis-1/4 bg-red-400">
            <div className='flex flex-col'>
              <h1>ABOUT BOAS</h1>
            </div>

          </div>
          <div className="basis-1/4">
            <h1>
              BRANDS AND PRESS
            </h1>
          </div>
          <div className="basis-1/4">
            <h1>
              Download the BOAS app
            </h1>
          </div>
        </div> */}
        {/* <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col'>
          ABOUT BOAS
          </div>
          <div className='flex flex-col'>
          ABOUT BOAS
          </div>
        </div> */}
      </div>
    </div>
  )
}
