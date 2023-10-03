import React from 'react'
import {SlLike} from "react-icons/sl"
import {FaRegCommentDots} from "react-icons/fa"
import {BiRepost} from "react-icons/bi"
import {BsFillSendFill} from "react-icons/bs"

export default function Actions() {
    return (
        <div className='my-2 px-4'>
            <div className='flex items-center justify-between border-t py-1'>
                <div className='px-4 py-3 hover:bg-[#EBEBEB] rounded-[5px] flex items-center cursor-pointer'>
                    <SlLike className= "text-[gray] text-[18px]"/>
                    <span className='text-[18px] ml-2 font-medium text-[gray]'>
                        Like
                    </span>
                </div>
                <div className='px-4 py-3 hover:bg-[#EBEBEB] rounded-[5px] flex items-center cursor-pointer'>
                    <FaRegCommentDots className = "text-[gray] text-[18px]"/>
                    <span className='text-[18px] ml-2 font-medium text-[gray]'>
                        Comment
                    </span>
                </div>
                <div className='px-4 py-3 hover:bg-[#EBEBEB] rounded-[5px] flex items-center cursor-pointer'>
                    <BiRepost className = "text-[gray] text-[18px]"/>
                    <span className='text-[18px] ml-2 font-medium text-[gray]'>
                        Repost
                    </span>
                </div>
                <div className='px-4 py-3 hover:bg-[#EBEBEB] rounded-[5px] flex items-center cursor-pointer'>
                    <BsFillSendFill className = "text-[gray] text-[18px]"/>
                    <span className='text-[18px] ml-2 font-medium text-[gray]'>
                        Send
                    </span>
                </div>
            </div>
        </div>
    )
}
