import Link from 'next/link'
import React from 'react'

export default function JobsHeader() {
  return (
    <div className='bg-[white] rounded-md border'>
      <div className='pt-8 pb-4 px-4'>
        <div className='flex justify-between items-center'>
          <div><h1 className='text-[18px] font-medium'>Recent job searches</h1></div>
          <div>
            <button className='text-[#5E5E5E] hover:bg-[#EBEBEB] px-3 py-1 rounded-md'>Clear</button>
          </div>
        </div>
        <div className='mt-4'>
          <Link href={'/'}>
            <h1 className='text-[14px] font-medium'>frontend developer</h1>
            <p className='text-[12px] text-[#5E5E5E] font-medium mt-1'>Alert On · Baku City, Contiguous Azerbaijan, Azerbaijan and 3 more</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
