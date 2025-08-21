import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
         <div className='  w-full md:w-auto flex items-center justify-center cursor-pointer gap-2 ring-1 ring-gray-200 rounded-full'>
                        <Image src="/search.png" width={14} height={14} alt="search"/>
                        <input type="text" placeholder='Search....' className=' h-5 w-20 text-[0.7rem]  p-2' />
                       
                    </div>

      <div className='flex items-center justify-between gap-2'>
        <div className='bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer '>
            <Image src="/message.png" width={15} height={15} alt="messge"/>
            <span></span>
        </div>
        <div className='bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer relative'>
            <Image src="/announcement.png" width={15} height={15} alt="announcment" />
            <span className='text-[0.5rem] absolute -top-2 -right-2 bg-purple-500 h-3 w-3 flex items-center justify-center rounded-full '>1</span>
        </div>
        <div className=' flex flex-col  justify-start '>
         <h1 className='text-[0.7rem]'>Abdullatif</h1>  
         <span className='text-[0.5rem]'>Admin</span>
        
        </div>
        <div className='bg-white h-7 w-7 flex items-center justify-center cursor-pointer'>
            <Image src="/avatar.png" width={15} height={15} alt="avatar"/>
            <span></span>
        </div>

      </div>
    </div>
  )
}

export default Navbar
