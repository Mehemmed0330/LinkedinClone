'use client'
import Image from "next/image";
import React from "react";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs"
import { PiBagSimpleFill } from "react-icons/pi"
import { BiSolidMessage } from "react-icons/bi"
import { MdNotifications } from "react-icons/md"
import { IoMdArrowDropdown } from "react-icons/io"
import { MdBusiness } from "react-icons/md"
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
    const navbarItems = [
        { label: 'Home', icon: <AiFillHome />, route: '/' },
        { label: 'My Network', icon: <BsPeopleFill />, route: '/myNetwork' },
        { label: 'Jobs', icon: <PiBagSimpleFill />, route: '/jobs' },
        { label: 'Messaging', icon: <BiSolidMessage />, route: '/messaging' },
        { label: 'Notifications', icon: <MdNotifications />, route: '/notifications' }
    ]
    interface navbarProps {
        label: String,
        icon: React.ReactNode,
        route: String
    }
    const router = useRouter();

    return (
        <div className="bg-[white] ">
            <div className="py-2 flex justify-between items-center md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto px-[30px]">
                <div className="flex max-h-[35px]">
                    <div>
                        <Image
                            src="/logo.png"
                            width={35}
                            height={35}
                            alt="Logo"
                        />
                    </div>
                    <div className="flex items-center ml-2 bg-[#edf3f8] rounded">
                        <div className="h-full flex items-center mx-2">
                            <AiOutlineSearch className="font-bold" />
                        </div>
                        <input type="text" className="rounded bg-[#edf3f8] px-[40px] h-[20px]" placeholder="Search" />
                    </div>

                </div>
                <div className="flex">
                    <ul className="flex border-[black] border-r-[1px] pr-4">
                        {
                            navbarItems.map((item: navbarProps, index: number) => (
                                <Link href={`${item.route}`} key={index} className={`flex flex-col items-center cursor-pointer mx-4 hover:text-[black]  ${router.pathname === item.route? "text-[black]" : "text-[gray]"}`}>
                                    <span key={index} className={`text-[1.6em]`}>{item.icon}</span>
                                    <span className="text-[0.9rem]">
                                        {item.label}
                                    </span>

                                </Link>
                            ))
                        }
                        <div className="flex flex-col justify-between items-center">
                            <div>
                                <Image
                                    alt="img"
                                    src="/image.jpeg"
                                    width={25}
                                    height={25}
                                    style={{
                                        borderRadius: '50%'
                                    }}
                                />
                            </div>
                            <div className="flex items-center">
                                <span className="text-[14px]">Me</span>
                                <IoMdArrowDropdown />

                            </div>
                        </div>
                    </ul>
                    <div className="flex flex-col justify-between items-center ml-4">
                        <MdBusiness size={25} className="text-[gray]" />
                        <div className="flex items-center">
                            <span className="text-[14px]">For business</span>
                            <IoMdArrowDropdown />

                        </div>
                    </div>
                    <div className="w-[100px] text-center ml-2">
                        <Link href="/" className="text-[12px] underline">Get hired faster. Try Premium free.</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Header