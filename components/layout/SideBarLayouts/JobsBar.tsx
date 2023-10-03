import Link from 'next/link'
import React from 'react'
import { AiFillYoutube, AiOutlineFileText } from 'react-icons/ai'
import { BsFillBookmarkFill } from "react-icons/bs"
import { IoIosPaper, IoMdNotifications, IoMdSettings } from "react-icons/io"
import { MdOutlineDone } from 'react-icons/md'

export default function JobsBar() {
    const SideBarLinks = [
        {
            label: "My Jobs",
            icon: <BsFillBookmarkFill />,
            route: "/myJobs"
        },
        {
            label: "Job Alerts",
            icon: <IoMdNotifications />,
            route: "/jobAlerts"
        },
        {
            label: "Demonstrate skills",
            icon: <MdOutlineDone />,
            route: "/demonstrateSkills"
        },
        {
            label: "Interview prep",
            icon: <IoIosPaper />,
            route: "/interviewPrep"
        },
        {
            label: "Resume Builder",
            icon: <AiOutlineFileText />,
            route: "/resumeBuilder"
        },
        {
            label: "Job seeker guidance",
            icon: <AiFillYoutube />,
            route: "/jobSeeker"
        },
        {
            label: "Application settings",
            icon: <IoMdSettings />,
            route: "/applicationSettings"
        }
    ]
    interface jobsProps {
        label: String,
        icon: React.ReactNode,
        route: String
    }
    return (
        <div className='flex flex-col pr-[20px]'>
            <div className='sticky top-3'>
                <div className='bg-white px-4 py-4 rounded-xl border-[1px]'>
                    <div>
                        <ul>
                            {
                                SideBarLinks.map((item: jobsProps, index: number) => (
                                    <li key={index}>
                                        <Link href={`${item.route}`} className='flex item-center text-[18px] my-4 text-[#404040]'><span className='text-[22px]'>{item.icon}</span> <span className='ml-4'>{item.label}</span> </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='mt-4'>
                    <button className='w-[100%] rounded-[40px] border border-[#0a66c2] transition hover:text-[white] hover:bg-[#568fc9] flex justify-center px-[40px] py-[10px] text-[#0a66c2] font-medium'>
                        Post a free job
                    </button>
                </div>
            </div>

        </div>
    )
}
