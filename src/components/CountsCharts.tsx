'use client'
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
 
  {
    name: 'Boys',
    counts: 53,
 
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    counts: 53,
  
    fill: '#C3EBFA',
  },
  {
    name: 'Tota',
    counts: 106,
  
    fill: 'white',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountsCharts = () => {
  return (
    <div className='h-full w-full bg-white p-4 rounded-xl'>
        {/* title */}
      <div className='flex justify-between items-center  '>
        <h1 className='text-lg font-semibold'>students</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20}    />
      </div>
        {/* charts */}
      <div className='w-full h-[75%] relative'>
      <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
           
           
            background
         
            dataKey="counts"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
        </RadialBarChart>
      </ResponsiveContainer>
      <Image
      src='/maleFemale.png' alt='' height={20} width={20} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      {/* bottom */}
      <div className='flex justify-center  gap-12'>
        <div className=' flex flex-col items-center gap-'>
          <div className='h-5 w-5 rounded-full bg-lamaSky'/>
          <h1 className='font-bold'>1,234</h1>
          <h1 className='text-xs text-gray-300'>Boys (55%)</h1>

        </div>
        <div className=' flex flex-col items-center gap-'>
          <div className='h-5 w-5 rounded-full bg-lamaYello'/>
          <h1 className='font-bold'>1,234</h1>
          <h1 className='text-xs text-gray-300'>Girs (45%)</h1>

        </div>
      </div>
    </div>
  )
}

export default CountsCharts
