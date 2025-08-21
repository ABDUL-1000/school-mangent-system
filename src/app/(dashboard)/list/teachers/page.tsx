import Pagination from '@/components/Pagination'
import  { TableDemo } from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import React from 'react'

const TeachersListpage = () => {
  return (
    <div className='flex-1 p-4  gap-4 bg-white mt-0 m-4'>
      {/* top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden lg:block text-lg font-semibold'>All Teachers</h1>
        <div className='flex items-center flex-col md:flex-row gap-4 w-full md:w-auto'>
          <TableSearch/>
          <div className='flex items-center  gap-4 self-end'>
        <button className='bg-lamaYello rounded-full h-7 w-7 flex items-center justify-center cursor-pointer'>
          <Image src="/sort.png" width={14} height={14} alt="add"   />
        </button>
        <button className='bg-lamaYello rounded-full h-7 w-7 flex items-center justify-center cursor-pointer'>
          <Image src="/plus.png" width={14} height={14} alt="add"   />
        </button>
        <button className='bg-lamaYello rounded-full h-7 w-7 flex items-center justify-center cursor-pointer'>
          <Image src="/filter.png" width={14} height={14} alt="add"   />
        </button>
        </div>
        </div>
      </div>
      {/* table */}
      <TableDemo/>
      {/* pagination */}
      <Pagination/>
      
    </div>
  )
}

export default TeachersListpage
