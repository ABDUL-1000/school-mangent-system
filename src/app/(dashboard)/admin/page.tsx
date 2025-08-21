import Announcement from '@/components/Announcement'
import Attendance from '@/components/Attendance'
import CountsCharts from '@/components/CountsCharts'
import EventCalender from '@/components/EventCalender'
import FinanceCharts from '@/components/FinanceCharts'
import UserCards from '@/components/UserCards'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 fex-col md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8  '>
      {/* usercards */}
      <div className='flex gap-4 justify-between flex-wrap'>
      <UserCards type = 'students'/>
      <UserCards type = 'teacher'/>
      <UserCards type = 'parent'/>
      <UserCards type = 'staff'/>

      </div >
      {/* middle charts */}
      <div className='flex  gap-4 flex-col lg:flex-row'>
      {/* count charts */}
      <div className='w-full lg:w-1/3 h-[400px]'>

      <CountsCharts/>
      </div>
     
      {/* attendant charts  */}
      <div className='w-full lg:w-2/3 h-[400px]'>
      <Attendance/>
      </div>
      {/* button charts */}

      
      </div>
      <div className=' w-full h-[400px]'>
    <FinanceCharts/>
      </div> 
      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalender/>
      <Announcement/>
      </div>
    </div>
  )
}

export default AdminPage
