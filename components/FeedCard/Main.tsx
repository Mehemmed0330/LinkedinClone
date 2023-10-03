import Image from 'next/image'
import React from 'react'

interface MainProps{
    detail:String
}

const Main:React.FC<MainProps> = ({detail}) => {
    return (
        <div>
            <div className='px-6 mb-4'>
                <p className='text-[14px]'>Bu dəfəki uğurlu məzunumuz Akademiyamızın qrafik dizayneri Babayeva Rugiya-dır! {detail} 🤩

                    Ruqiyə Qrafik və Veb dizayn tədrisimizi yüksək şərəf diplomuyla bitirib, məzun olduqdan qısa bir müddət sonra isə Akademiyamıza qrafik dizayner olaraq qoşulmuşdur. Onu Marketinq və Kommunikasiyalar Departamentimizin üzvü olaraq görməkdən məmnunluq duyuruq!
                </p>
            </div>
            <div>
                <Image src={'https://media.licdn.com/dms/image/D4D22AQHvRGAFdIRqWA/feedshare-shrink_800/0/1695275135714?e=1698278400&v=beta&t=7GGGvFexpWaaG8zJbFdR0UY8MTlPz3wSy_VSiW3MUaU'} alt='' width={600} height={1000}/>
            </div>
        </div>
    )
}


export default Main