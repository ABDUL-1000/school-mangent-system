import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
     <div className='  w-full md:w-auto flex items-center justify-center cursor-pointer gap-2 ring-1 ring-gray-200 rounded-full'>
                <Image src="/search.png" width={14} height={14} alt="search"/>
                <input type="text" placeholder='Search....' className=' h-5 w-20 text-[0.7rem]  p-2' />
               
            </div>
  )
}

export default TableSearch
