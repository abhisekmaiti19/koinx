import React from 'react'
import promot from "../asset/promot.png"

export default function Promotioncard() {
  return (
    <div className='w-[426px] h-[576px] flex flex-col bg-primary rounded-lg  py-[55px] px-4 justify-center items-center gap-9'>
        <div className='felx flex-col gap-4' style={{"width":"327px","height":"182px","display":"flex","justify-content":"center","align-items":"center"}}>
            <h1 className='text-2xl text-center font-bold text-white' style={{"width": "268px"}}>Get Started with KoinX for FREE</h1>
            <span className='w-full text-center text-sm font-medium text-white'>
                With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.
            </span>
        </div>
        <img src={promot} style={{"width":"178.66px","height":"166.22px"}} alt="" />
        <button className='w-[237px] h-[48px] bg-white flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-semibold text-base'>
            <span>Get Started for FREE</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>
  )
}
