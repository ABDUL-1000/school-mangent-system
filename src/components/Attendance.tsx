'use client'
import Image from 'next/image';
import React from 'react'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    Absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    Absent: 13,
  },
  {
    name: 'Wed',
    present: 20,
    Absent: 9,
  },
  {
    name: 'Thur',
    present: 20,
    Absent: 30,
  },
  {
    name: 'Fri',
    present: 18,
    Absent: 10,
  },
 
];

const Attendance = () => {
  return (
    <div className=' w-full h-full bg-white p-4 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>Attendance</h1>
          <Image src='/moreDark.png' alt='' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="90%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px', paddingBottom:'40px' }}/>
          <Bar dataKey="Absent" fill="#FAE27C" 
          legendType="circle"
          radius={[10, 10 , 0, 0]}/>
          <Bar dataKey="present" fill="#C3EBFA" 
          legendType="circle"
          radius={[10, 10, 0, 0]}/>
          
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Attendance
