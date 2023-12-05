import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <div className='my-10 mx-10 '>

      <div className='flex flex-col'>
        {/* first row */}
        <div className="flex flex-row justify-between">

          <div className='flex flex-row items-center'>
            <img src="boas_logo.png" className='w-[80px]' alt="" />
            <h2 className='font-bold text-xl'> BOAS</h2>
          </div>
          <div className='flex gap-3 flex-row items-center'>
            <FacebookIcon style={{ color: "#23A6F0" }}/>
            <InstagramIcon style={{ color: "#23A6F0" }}/>
            <TwitterIcon style={{ color: "#23A6F0" }}/>
          </div>
        </div>
        {/* line */}
        <hr class="w-full h-px mx-2 my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
      </div>
    </div>
  )
}
