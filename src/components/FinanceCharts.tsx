'use client'
import Image from 'next/image'
import React from 'react'


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Income: 4000,
    Expenses: 2400,
    
  },
  {
    name: 'Feb',
    Income: 3000,
    Expenses: 1398,
    
  },
  {
    name: 'March',
    Income: 2000,
    Expenses: 9800,
    
  },
  {
    name: 'APRIL',
    Income: 2780,
    Expenses: 3908,
    
  },
  {
    name: 'May',
    Income: 1890,
    Expenses: 4800,
    
  },
  {
    name: 'June',
    Income: 2390,
    Expenses: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Sep',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Oct',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Income: 3490,
    Expenses: 4300,
    
  },
];
const FinanceCharts = () => {
  return (
   <div className='h-full w-full bg-white p-4 rounded-xl'>
           {/* title */}
         <div className='flex justify-between items-center  '>
           <h1 className='text-lg font-semibold'>students</h1>
           <Image src='/moreDark.png' alt='' width={20} height={20}    />
         </div>
         <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
         <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:'10px', paddingBottom:'20px' }}/>
          <Line type="monotone" dataKey="Income" stroke="#CFCEFF" strokeWidth={5} />
          <Line type="monotone" dataKey="Expenses" stroke="#C3BBFA" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default FinanceCharts
