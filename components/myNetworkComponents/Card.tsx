import Image from 'next/image'
import React from 'react'
import ConnectButton from './ConnectButton'

interface CarProps{
    picture:String,
    name:String,
    lastName:String,
    job:String,
    count:Number
}

const Card:React.FC<CarProps> = ({picture,name,lastName,job,count}) =>{
    return (
        <div>
            <div className='min-h-[40vh] bg-[white] border rounded-xl overflow-hidden'>
                <div className='bg-[gray] h-[7vh] relative'>
                    <div className='w-[110px] h-[110px] absolute top-[50%] translate-y-[-15%] left-[50%] translate-x-[-50%] rounded-full overflow-hidden'>
                        <Image src={`${picture}`} alt='' width={110} height={110} />
                    </div>
                    <div className='pt-[16vh] text-center'>
                        <div className='pt-2'>
                            <h1 className='font-bold text-[15px] text-black'>{name} {lastName}</h1>
                        </div>
                        <div className='leading-[1em] my-1 min-h-[5vh]'>
                            <span className='text-[14px]'>{job}</span>
                        </div>
                    </div>
                    <div className='mt-[2vh] text-center'>
                        <span className='text-[12px] text-[gray] text-medium'>41 mutual connections</span>
                    </div>
                    <ConnectButton/>
                </div>
            </div>
        </div>
    )
}
export default Card
