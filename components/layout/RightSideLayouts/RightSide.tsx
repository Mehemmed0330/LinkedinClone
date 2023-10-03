import Image from 'next/image'
import React from 'react'
import { BsFillInfoSquareFill } from "react-icons/bs"

interface companyProps {
    logo: String,
    name: String,
    detail: String
}
export default function RightSide() {

    const companiesData = [
        {
            logo: "https://media.licdn.com/dms/image/C4D0BAQFTEY45yxbiJw/company-logo_100_100/0/1649157878613?e=1703116800&v=beta&t=gxAaRumrediKy2UU-YztlckR6HjW8ACJmwu2gdHns3M",
            name: "PASHA Property Management",
            detail: "Company Real Estate"
        },
        {
            logo: "https://media.licdn.com/dms/image/C4D0BAQHXFb3xcllfRQ/company-logo_100_100/0/1589233895001?e=1703116800&v=beta&t=2_nlrLpwfMkWUBhjyHX1qpD73I-TEhFR6cT5ePBbQdo",
            name: "Azerbaijan Job Portal",
            detail: "Company Human Resources"
        }
    ]
    return (
        <div className='flex flex-col'>
            <div className="border min-h-[42vh] rounded-lg py-2 bg-[white]">
                <div className='flex justify-between items-center px-2'>
                    <span className='font-medium text-[black]'>
                        Add to your feed
                    </span>
                    <span>
                        <BsFillInfoSquareFill className="text-[gray]" />
                    </span>
                </div>
                <div className='pl-2 pr-4'>
                    {
                        companiesData.map((item:companyProps, index) => (
                            <div key={index}>
                                <div className='flex mt-2' >
                                    <div>
                                        <Image alt='' src={`${item.logo}`} width={50} height={50} />
                                    </div>
                                    <div className='flex flex-col ml-1'>
                                        <h1 className='text-[13px] font-bold'>{item.name}</h1>
                                        <span className='text-[12px]'>{item.detail}</span>
                                        <div className='mt-2'>
                                            <button className='border border-[black] hover:bg-[#d8d6d6] px-4 py-1 rounded-xl text-[15px]'>
                                                + Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }




                </div>
            </div>
            <div className='flex flex-col mt-12 sticky top-5'>
                <Image src={'https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'} alt='' width={1000} height={250} style={{
                    objectFit:'cover',
                    borderRadius:'10px',
                    width:'100%',
                    height:'250px'
                }}/>

            </div>
        </div>
    )
}
