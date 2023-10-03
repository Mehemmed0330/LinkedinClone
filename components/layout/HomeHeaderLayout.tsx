import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { GoFileMedia } from "react-icons/go"
import { PiBagSimpleFill } from "react-icons/pi"
import { MdOutlineArticle } from "react-icons/md"

export default function HomeHeaderLayout() {
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            const body = new FormData();
            body.append("image", i);
            console.log(i)
        }
    };
    const handleClick = () => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };
    return (
        <div className='min-h-[15vh] bg-[white] border rounded-lg mb-6'>
            <div className='p-4'>
                <div className='flex items-center'>
                    <div>
                        <Image
                            src={'/image.jpeg'}
                            alt=''
                            width={60}
                            height={60}
                            style={{
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                    <div className='w-full px-4'>
                        <input placeholder='Start a post' type="text" className='py-2 border border-[gray] w-full rounded-xl px-2 bg-[#f1f0f0] text-[#494949]' />
                    </div>
                </div>
                <div className='flex justify-between items-center my-2 w-[90%] mx-auto'>
                    <div>
                        <button onClick={handleClick} className='flex items-center cursor-pointer transition hover:bg-[#EBEBEB] p-2 rounded-md'>
                            <GoFileMedia className="text-[#378FE9] text-[22px]"/>
                            <span className='ml-2 font-medium text-[15px] text-[#B4B4B4]'>
                                Media
                            </span>
                            <input
                                type="file"
                                ref={hiddenFileInput}
                                style={{ display: 'none' }}
                                onChange={handleChange}
                            />
                        </button>

                    </div>
                    <div>
                        <button className='flex items-center transition hover:bg-[#EBEBEB] p-2 rounded-md'>
                            <PiBagSimpleFill className="text-[#A872E8] text-[22px]" />
                            <span className='ml-2 font-medium text-[15px] text-[#B4B4B4]'>
                                Job
                            </span>
                        </button>
                    </div>
                    <div>
                        <Link className='flex items-center transition hover:bg-[#EBEBEB] p-2 rounded-md' href={'/'}>
                            <MdOutlineArticle className="text-[#E16745] text-[22px]" />
                            <span className='ml-2 font-medium text-[15px] text-[#B4B4B4]'>
                                Write article
                            </span>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
