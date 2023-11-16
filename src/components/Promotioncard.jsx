import React from 'react'
import promot from "../asset/promot.png"

export default function Promotioncard() {
  return (
    <div className=' mysc:w-[426px] mysc:h-[576px] xl:w-[mywidth30] flex flex-col bg-primary rounded-lg  py-[55px] px-4 justify-center items-center gap-9 z-100'>
        <div className='mysc:w-[327px] mysc:h-[182px] xl:w-48 felx flex-col gap-4 flex justify-center items-center'>
            <h1 className='2sm:text-2xl mysc:text-xl xl:text-xl text-center font-bold text-white' >Get Started with KoinX for FREE</h1>
            <span className='2sm:w-4/5 w-full text-center xl:text-xs font-medium text-white'>
                With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.
            </span>
        </div>
        <img src={promot} style={{"width":"178.66px","height":"166.22px"}} alt="" />
        <button className='w-[237px] h-[48px] bg-white flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-semibold text-base'>
            <span className='2sm:text-sm xl:text-sm'>Get Started for FREE</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>
  )
}
