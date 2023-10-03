import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiEarthAmerica } from "react-icons/gi"
import {BiDotsHorizontalRounded} from "react-icons/bi"


export default function CardHeader() {
    return (
        <div className='mx-4'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div>
                        <Image alt='' width={60} height={60} src={'https://media.licdn.com/dms/image/C4E0BAQGFOSpfuGFKAA/company-logo_100_100/0/1659427633271?e=1703116800&v=beta&t=Gm5DqOBcGFBEdP31dNK2NBlcA6JTQJoqPWD-f92lKeo'} />
                    </div>
                    <div>
                        <Link href={'/'} className='hover:underline leading-[1em]'>
                            <h1 className='text-[14px] text-black font-medium'>Code Academy</h1>
                            <span className='text-[12px] text-[gray]'>15,915 followers</span>
                        </Link>
                        <div>
                            <span className='flex items-center text-[12px] text-[gray] hover:underline'>
                                1h
                                <GiEarthAmerica className="ml-2"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <BiDotsHorizontalRounded className="text-[gray] text-[35px] cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
