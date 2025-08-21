import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalender'

import React from 'react'

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 fex-col xl:flex-row'>
     {/* left */}
     <div className='w-full xl:w-2/3'>
     <div className='h-full bg-white p-4 rounded-md'>
      <h1 className='text-xl font-semibold'>schedule (Abdullatif Abdulkarim)</h1>
      <BigCalendar/>
     </div>

     </div>
     {/* right */}
     <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      
      <Announcement/>
      </div>
    </div>
  )
}

export default ParentPage
