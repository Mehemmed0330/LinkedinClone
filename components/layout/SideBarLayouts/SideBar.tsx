import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSaveDown2 } from "react-icons/ci"
import { AiOutlinePlus } from "react-icons/ai"

export default function SideBar() {

    return (
        <div className='flex flex-col'>
            <div className="border min-h-[22.5rem] rounded-lg shadow-sm bg-[white]">
                <div className='bg-[gray] min-h-[4rem] rounded-t-lg relative'>
                    <div className='h-20 w-20 rounded-full translate-y-[-50%] translate-x-[-50%] absolute top-[100%] left-[50%]'>
                        <Image
                            alt='image'
                            src={'/image.jpeg'}
                            width={100}
                            height={100}
                            style={{
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                </div>
                <div className='pt-[4rem]'>
                    <div className='mx-2 text-center'>
                        <h1 className='text-[14px] font-bold underline'>Məhəmməd Əliyev</h1>
                        <span className='text-[12px] text-[gray]'>Frontend Developer at AzSoftware</span>
                    </div>
                </div>
                <div className='border-y-[1px] border-[#ccc9c9] mt-2'>
                    <div className=''>
                        <Link href={'/'} className='flex justify-between items-center my-2 py-1 bg-[transparent] transition hover:bg-[#d8d6d6] px-2'>
                            <h1 className='text-[12px] font-medium text-[gray]'>Who&apos;s viewed your profile</h1>
                            <span className='text-[12px] text-[blue] font-medium'>72</span>
                        </Link>
                        <Link href={'/'} className='flex justify-between items-center my-2 py-1 bg-[transparent] transition hover:bg-[#d8d6d6] px-2'>
                            <h1 className='text-[12px] font-medium text-[gray]'>Impressions of your post</h1>
                            <span className='text-[12px] text-[blue] font-medium'>27</span>
                        </Link>
                    </div>
                </div>
                <div className='px-2 py-2 transition hover:bg-[#d8d6d6]'>
                    <span className='text-[12px] font-medium'>Access exclusive tools & insights</span>
                    <div>
                        <span className='text-[12px] font-medium'>Get hired faster. Try premium free</span>

                    </div>
                </div>
                <Link href={'/'} className='flex px-2 transition hover:bg-[#d8d6d6] border-t-[1px] border-[#ccc9c9] py-2 items-center'>
                    <CiSaveDown2 className="text-[gray]" />
                    <span className='text-[12px] font-medium ml-2'>My items</span>
                </Link>
            </div>

            <div className='border min-h-[10rem] rounded-lg shadow-sm mt-6 bg-[white]'>
                <div className=''>
                    <ul className='p-2'>
                        <li className='py-2 text-[12px] hover:underline'>
                            <Link href={'/'} className='block font-medium text-[#0a66c2]'>Group</Link>
                        </li>
                        <li className='py-2 text-[12px] flex justify-between hover:underline'>
                            <Link href={'/'} className='block font-medium text-[#0a66c2]'>Events</Link>
                            <div className='p-1 transition hover:bg-[#d8d6d6] rounded-full text-[black] cursor-pointer'>
                                <AiOutlinePlus />
                            </div>
                        </li>
                        <li className='py-2 text-[12px] hover:underline'>
                            <Link href={'/'} className='block font-medium text-[#0a66c2]'>Followed Hashtags</Link>
                        </li>
                    </ul>
                    <div className='py-2 text-center transition hover:bg-[#d8d6d6] border-t '>
                        <button className='text-[14px] text-[gray] w-full font-medium'>
                            Discover more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
