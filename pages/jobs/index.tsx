import Items from '@/components/layout/JobsComponents/Items'
import JobsHeader from '@/components/layout/JobsComponents/JobsHeader'
import React from 'react'

export default function Jobs() {
  return (
    <div className='min-h-[100vh]'>
      <JobsHeader/>
      <div className='bg-[white] min-h-[100vh] rounded-xl border mt-4'>
        <div className='px-4 py-8'>
          <div className='mb-4'>
            <h1 className='text-[19px] text-black font-medium'>Recommended for you</h1>
            <p className='text-[14px] text-[#5E5E5E]'>Based on your profile and search history</p>
          </div>
          <Items/>
          <Items/>
        </div>
      </div>
    </div>
  )
}
