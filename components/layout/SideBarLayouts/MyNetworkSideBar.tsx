import React from 'react'
import { MdPeopleAlt, MdGroups, MdOutlineCalendarMonth, MdCalendarMonth } from "react-icons/md"
import { BiSolidBookBookmark } from "react-icons/bi"
import { BsFillPersonFill, BsBuilding } from "react-icons/bs"
import { BiNews, BiHash } from "react-icons/bi"
import Link from 'next/link'
import Image from 'next/image'


export default function MyNetworkSideBar() {
  const sideBarLinks = [
    {
      label: "Connections",
      icon: <MdPeopleAlt />,
      number: "1302",
      link: '/connections'
    },
    {
      label: "Contacts",
      icon: <BiSolidBookBookmark />,
      number: "130",
      link: "/contacts"
    },
    {
      label: "Following & followers",
      icon: <BsFillPersonFill />,
      link: "/follow"
    },
    {
      label: "Groups",
      icon: <MdGroups />,
      link: "/groups"
    },
    {
      label: "Events",
      icon: <MdCalendarMonth />,
      link: "/events"
    },
    {
      label: "Pages",
      icon: <BsBuilding />,
      number: "74",
      link: "/pages"
    },
    {
      label: "NewsLetters",
      icon: <BiNews />,
      number: "2",
      link: "/newsLetters"
    },
    {
      label: "Hashtags",
      icon: <BiHash />,
      link: "/hashTagss"
    }
  ]

  interface sideBarsProps {
    label: String,
    icon: React.ReactNode,
    number?: String,
    link: String
  }
  return (
    <div className='flex flex-col col-span-2'>
      <div className='sticky top-4'>
        <div className='min-h-[40vh] border rounded-xl bg-[white]'>
          <div className='py-2'>
            <div className='mx-4'>
              <h1 className='text-[#4d4c4c] text-[18px]'>Manage my network</h1>
            </div>
            <div className='my-2'>
              <ul>
                {
                  sideBarLinks.map((item: sideBarsProps, index) => (
                    <li key={index}>
                      <Link href={`${item.link}`} className='flex justify-between items-center px-6 py-2 text-[16px] text-[#666666] transition hover:bg-[#EBEBEB]'>
                        <div className='flex items-center'>
                          <span className='text-[20px]'>{item.icon}</span> <span className='ml-4'>{item.label}</span>
                        </div>
                        <div>
                          <span>{item.number}</span>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='my-6'>
          <Image src={'https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'} alt='' width={400} height={600} className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}
