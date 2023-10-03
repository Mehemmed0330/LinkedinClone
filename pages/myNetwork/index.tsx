import Card from '@/components/myNetworkComponents/Card'
import MyNetworkHeader from '@/components/myNetworkComponents/MyNetworkHeader'
import React from 'react'

export default function MyNetwork() {
  const personData=[
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQFOsGW5T4ngqw/profile-displayphoto-shrink_200_200/0/1677523587648?e=1701302400&v=beta&t=FSZagBd7WOlDU4AJ1q4sUYOEzr5UtUGe3O5huqFUal8",
      name:"Sarigul",
      lastName:"Aliyeva",
      job:"frontEnd developer",
      count:65
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQESCNvMhnGorg/profile-displayphoto-shrink_200_200/0/1693646268967?e=1701302400&v=beta&t=JhiDmcbQXGJtD6ykeKWr4HM2P9MLOqF_ikvaBqRCC8M",
      name:"Gunel",
      lastName:"Mustafayeva",
      job:"Sturden at Azerbaijan State university",
      count:52
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQEBmBsVaNIh8Q/profile-displayphoto-shrink_200_200/0/1690893889119?e=1701302400&v=beta&t=YGRXG8dIFOgC_FE2i8LBBT1eHMBlbFSp1B-YHPFTG8o",
      name:"Ebru",
      lastName:"Hasanova",
      job:"Frontend Developer",
      count:159
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQFOsGW5T4ngqw/profile-displayphoto-shrink_200_200/0/1677523587648?e=1701302400&v=beta&t=FSZagBd7WOlDU4AJ1q4sUYOEzr5UtUGe3O5huqFUal8",
      name:"Sarigul",
      lastName:"Aliyeva",
      job:"frontEnd developer",
      count:65
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQESCNvMhnGorg/profile-displayphoto-shrink_200_200/0/1693646268967?e=1701302400&v=beta&t=JhiDmcbQXGJtD6ykeKWr4HM2P9MLOqF_ikvaBqRCC8M",
      name:"Gunel",
      lastName:"Mustafayeva",
      job:"Sturden at Azerbaijan State university",
      count:52
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQEBmBsVaNIh8Q/profile-displayphoto-shrink_200_200/0/1690893889119?e=1701302400&v=beta&t=YGRXG8dIFOgC_FE2i8LBBT1eHMBlbFSp1B-YHPFTG8o",
      name:"Ebru",
      lastName:"Hasanova",
      job:"Frontend Developer",
      count:159
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQFOsGW5T4ngqw/profile-displayphoto-shrink_200_200/0/1677523587648?e=1701302400&v=beta&t=FSZagBd7WOlDU4AJ1q4sUYOEzr5UtUGe3O5huqFUal8",
      name:"Sarigul",
      lastName:"Aliyeva",
      job:"frontEnd developer",
      count:65
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQESCNvMhnGorg/profile-displayphoto-shrink_200_200/0/1693646268967?e=1701302400&v=beta&t=JhiDmcbQXGJtD6ykeKWr4HM2P9MLOqF_ikvaBqRCC8M",
      name:"Gunel",
      lastName:"Mustafayeva",
      job:"Sturden at Azerbaijan State university",
      count:52
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQEBmBsVaNIh8Q/profile-displayphoto-shrink_200_200/0/1690893889119?e=1701302400&v=beta&t=YGRXG8dIFOgC_FE2i8LBBT1eHMBlbFSp1B-YHPFTG8o",
      name:"Ebru",
      lastName:"Hasanova",
      job:"Frontend Developer",
      count:159
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQFOsGW5T4ngqw/profile-displayphoto-shrink_200_200/0/1677523587648?e=1701302400&v=beta&t=FSZagBd7WOlDU4AJ1q4sUYOEzr5UtUGe3O5huqFUal8",
      name:"Sarigul",
      lastName:"Aliyeva",
      job:"frontEnd developer",
      count:65
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQESCNvMhnGorg/profile-displayphoto-shrink_200_200/0/1693646268967?e=1701302400&v=beta&t=JhiDmcbQXGJtD6ykeKWr4HM2P9MLOqF_ikvaBqRCC8M",
      name:"Gunel",
      lastName:"Mustafayeva",
      job:"Sturden at Azerbaijan State university",
      count:52
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQEBmBsVaNIh8Q/profile-displayphoto-shrink_200_200/0/1690893889119?e=1701302400&v=beta&t=YGRXG8dIFOgC_FE2i8LBBT1eHMBlbFSp1B-YHPFTG8o",
      name:"Ebru",
      lastName:"Hasanova",
      job:"Frontend Developer",
      count:159
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQFOsGW5T4ngqw/profile-displayphoto-shrink_200_200/0/1677523587648?e=1701302400&v=beta&t=FSZagBd7WOlDU4AJ1q4sUYOEzr5UtUGe3O5huqFUal8",
      name:"Sarigul",
      lastName:"Aliyeva",
      job:"frontEnd developer",
      count:65
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQESCNvMhnGorg/profile-displayphoto-shrink_200_200/0/1693646268967?e=1701302400&v=beta&t=JhiDmcbQXGJtD6ykeKWr4HM2P9MLOqF_ikvaBqRCC8M",
      name:"Gunel",
      lastName:"Mustafayeva",
      job:"Sturden at Azerbaijan State university",
      count:52
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQEBmBsVaNIh8Q/profile-displayphoto-shrink_200_200/0/1690893889119?e=1701302400&v=beta&t=YGRXG8dIFOgC_FE2i8LBBT1eHMBlbFSp1B-YHPFTG8o",
      name:"Ebru",
      lastName:"Hasanova",
      job:"Frontend Developer",
      count:159
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQFOsGW5T4ngqw/profile-displayphoto-shrink_200_200/0/1677523587648?e=1701302400&v=beta&t=FSZagBd7WOlDU4AJ1q4sUYOEzr5UtUGe3O5huqFUal8",
      name:"Sarigul",
      lastName:"Aliyeva",
      job:"frontEnd developer",
      count:65
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQESCNvMhnGorg/profile-displayphoto-shrink_200_200/0/1693646268967?e=1701302400&v=beta&t=JhiDmcbQXGJtD6ykeKWr4HM2P9MLOqF_ikvaBqRCC8M",
      name:"Gunel",
      lastName:"Mustafayeva",
      job:"Sturden at Azerbaijan State university",
      count:52
    },
    {
      picture:"https://media.licdn.com/dms/image/D4E03AQEBmBsVaNIh8Q/profile-displayphoto-shrink_200_200/0/1690893889119?e=1701302400&v=beta&t=YGRXG8dIFOgC_FE2i8LBBT1eHMBlbFSp1B-YHPFTG8o",
      name:"Ebru",
      lastName:"Hasanova",
      job:"Frontend Developer",
      count:159
    }
  ]

  interface personProps{
    picture:String,
    name:String,
    lastName:String,
    job:String,
    count:Number
  }

  return (
    <div className='min-h-[50vh]'>
      <div>
        <MyNetworkHeader/>
      </div>
      <div className='min-h-[100vh] bg-[white] rounded-xl border mt-6 p-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-[#8E8E8E]'>Software Engineers you may know</h1>
          </div>
          <div>
            <button className='text-[#8E8E8E] px-4 py-2 rounded-md transition hover:bg-[#e7e7e7]'>
              See all
            </button>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 my-4'>
          {
            personData.map((item:personProps,index:number) => (
              <Card key={index} picture={item.picture} name={item.name} lastName={item.lastName} job={item.job} count={item.count}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
