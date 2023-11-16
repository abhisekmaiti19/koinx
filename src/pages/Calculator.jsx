import React from 'react'
import Navbar from '../components/Navbar'
import Promotioncard from '../components/Promotioncard'
import Tax from '../components/Tax'
import Faq from '../components/Faq'
// import Footer from '../components/Footer'

export default function Calculator() {
  return (
    <div className='w-full h-screen bg-page flex flex-col realtive'>
        <Navbar/>
        <div className='w-full bg-page absolute md:mt-20 2sm:mt-16 md:pt-7 md:gap-7 flex flex-col 2sm:items-center lg:items-start '>
          <div className='flex justify-between absolute lg:px-14 2sm:flex-col 2sm:justify-center 2sm:items-center 2sm:gap-6'>
            <Tax/>
              <div className='right-14 top-24 fixed xl:flex 2sm:hidden'>
                <Promotioncard/>
              </div>
              <div className='xl:hidden 2sm:flex 2sm-w-full 2sm:justify-center'>
              <Promotioncard/>
              </div>
                <Faq/>
          </div>
        </div>
        
        
    </div>
  )
}
