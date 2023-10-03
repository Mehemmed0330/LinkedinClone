import Card from '@/components/FeedCard/Card'
import HomeHeaderLayout from '@/components/layout/HomeHeaderLayout'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <div className='min-h-[100vh]'>
      <HomeHeaderLayout/>
      <Card mainText={"Salam"}/>
      <Card mainText={"Necesen"}/>
      
    </div>
  )
}
