import React from 'react'
import {ReactComponent as CardLogo} from '../../images/card-logo.svg'

export const CardFront = ({cardNumber='', holder='', mm='', yy=''}) => {
  return (
    <div className='bg-cardFront sm:static absolute top-[120px] left-4 card py-5 flex-col justify-between sm:translate-y-[-60%] sm:translate-x-[-10%] xl:translate-y-0 xl:translate-x-[-100px] sm:gap-y-16 order-2 xl:order-1'>
      <div className="flex items-center">
        <CardLogo />
      </div>
      <div className='flex flex-col gap-y-3 sm:gap-y-7'>
        <div className='text-sm sm:text-4xl text-white font-bold'>
          {cardNumber || '0000 0000 0000 0000'}
        </div>
        <div className="flex justify-between text-xs sm:text-base sm:font-bold text-white uppercase">
          <span>
            {holder || 'Jane Applessed'}
          </span>
          <span>
            {`${mm || '00'}/${yy || '00'}`}
          </span>
        </div>
      </div>
    </div>
  )
}