import React from 'react'
import { MisisonCard } from './MisisonCard'
import CheckroomIcon from '@mui/icons-material/Checkroom';

export const OurMission = () => {
    const cardBody1 = "At BOAS, you save jeans from being burned or ending up at a toxic landfill in Africa."
    const cardBody2 = "Fashion is responsible for 10% of global emissions, and denim is the most polluting fabric. Buy vintage and save jeans, your wallet, CO2 and water"
    const cardBody3 = "BOAS donates 90% of the profits from your purchase to lifesaving charities, making you a lifesaver!"
   
    const greenHand = <img src="handGreen.svg" className='w-7' alt="/" />;
    const moneyHand = <img src="handMoney.svg" className='w-7' alt="/" />;
    return (
        <div className='md:mx-10'>
            <div className=' mb-2 inline-flex items-center justify-center'>
                <h2 className='montserratFont font-medium
                 text-lg  '>
                    Our mission
                </h2>
                <hr className="w-10 h-px mx-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <h2 className='mx-2 playFairFont text-4xl font-medium'>
                Save Jeans. Save Lives
            </h2>
            <div className='flex  sm:flex-row   md:gap-2'>
                <MisisonCard name="Save Jeans Responsibly" cardBody={cardBody1} mainColor={true} icon={<CheckroomIcon className="svg_icons" />}  isbutton={false} />
                <MisisonCard name="Environmental Impact" cardBody={cardBody2} mainColor={false} icon={greenHand}  isbutton={false} />
                <MisisonCard name="Lifesaving Impact" cardBody={cardBody3} mainColor={false} icon={moneyHand}   isbutton={true} />
            </div>
        </div>
    )
}
