import React from 'react'
export const MisisonCard = ({ icon, name, cardBody, mainColor, isbutton }) => {
    return (
        <div className={`sm:inline ${!isbutton && !mainColor ? "hidden" : ""} flex  flex-col ${mainColor ? "bg-[#219D80]" : "bg-[#EDF7F5]"} bg-[#219D80] p-5 py-8`}>
            <div className="flex">
                <div className={`rounded-full p-5 md:p-10   ${mainColor ? "bg-[#EDF7F5]" : "bg-white"}`}>
                    {icon}
                </div>
            </div>
            <div className={`playFairFont mt-8 ${mainColor ? "text-white" : "text-black"} md:text-2xl text-lg semi-bold`}>
                {name}
            </div>
            <div className={`mt-10 nunitoFont ${mainColor ? "text-white" : "text-slate-500"}`}>
                {cardBody}
            </div>
            {
                isbutton ?
                    <div className={`cursor-pointer hover:text-slate-500 montserratFont ${mainColor ?  "text-white" : "text-black" } my-10 `}>
                        > Join Us
                    </div>
                    : ""
            }
        </div>
    )
}
