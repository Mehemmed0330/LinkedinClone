import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"

export default function ConnectButton() {
  return (
    <div className='flex justify-center py-4'>
      <button className='px-7 py-1 text-[#0a66c2] text-[16px] font-medium border-[2px] border-[#0a66c2] rounded-2xl flex items-center'>
        <span className='flex items-center mr-2'><BsFillPersonFill className="text-[16px]" />+</span>
        Connect
      </button>
    </div>
  )
}
