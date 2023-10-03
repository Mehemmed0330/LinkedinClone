import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function JobsRightSide() {
  return (
    <div className='flex flex-col'>
      <div className='border bg-white min-h-[40vh] rounded-md pt-8 px-4'>
        <div className='mb-4'>
          <h1 className='text-[16px] font-medium'>Job seeker guidance</h1>
          <p className='text-[13px] text-[#5E5E5E]'>Recommended based on your activity</p>
        </div>
        <div className='flex items-center'>
          <div className='mr-2'>
            <h1 className='text-[13px] font-medium'>I want to improve my resume</h1>
          </div>
          <div className='rounded-md overflow-hidden'>
            <Image src={require("../../../assets/images/RightSideJobsImage.gif")} alt='' width={100} height={100}/>
          </div>
        </div>
        <div className='mt-4'>
          <p className='text-[14px]'>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
          <div>
          <button className='w-[100%] hover:underline text-[#964beb] hover:text-[#8443ce] flex flex-start font-medium items-center my-4'>
            Show more
            <AiOutlineArrowRight className="ml-2"/>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
