import React from 'react'
import Navbar from '../components/Navbar'
import Promotioncard from '../components/Promotioncard'
import Tax from '../components/Tax'

export default function Calculator() {
  return (
    <div className='w-full h-full bg-page flex flex-col realtive'>
        <Navbar/>
        <div className='w-full bg-page absolute md:mt-20 2sm:mt-16 md:pt-7 md:px-14 md:gap-7 flex flex-col '>
          <div className='flex justify-between absolute'>
            <Tax/>
              <div className='right-14 fixed'>
                <Promotioncard/>
              </div>
          </div>
          {/* <Tax/>
          <Tax/>
          <Tax/> */}
          
          
        </div>
        
    </div>
  )
}
