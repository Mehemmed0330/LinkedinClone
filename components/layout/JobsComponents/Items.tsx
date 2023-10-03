import Image from 'next/image'
import React from 'react'
import { LiaTimesSolid } from "react-icons/lia"

export default function Items() {
    return (
        <div>
            <div className='flex justify-between py-6 border-b'>
                <div className='flex'>
                    <div>
                        <Image src={require("../../../assets/images/jobsPic.jpeg")} alt='' width={60} height={60} />
                    </div>
                    <div className='ml-4'>
                        <div>
                            <h1 className='text-[#0a66c2] font-medium'>
                                React Developer
                            </h1>
                        </div>
                        <div>
                            <span className='text-[14px]'>Turing</span>
                        </div>
                        <div>
                            <span className='text-[gray] text-[14px]'>Azerbaijan (Remote)</span>
                        </div>
                        <div>
                            <span className='text-[12px]'>3 weeks ago</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button>
                        <LiaTimesSolid className="text-[25px]" />
                    </button>
                </div>
            </div>

        </div>
    )
}
