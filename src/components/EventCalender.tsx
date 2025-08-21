'use client'
import React from 'react'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
    const Events = [
        {
            id: 1,
            title: 'Event 1',
            time: '10:00 AM - 11:00 AM',
           description: 'Event description',
        },
        {
            id: 2,
            title: 'Event 1',
            time: '10:00 AM - 11:00 AM',
           description: 'Event description',
        },
        {
            id: 3,
            title: 'Event 1',
            time: '10:00 AM - 11:00 AM',
           description: 'Event description',
        },
        {
            id: 4,
            title: 'Event 1',
            time: '10:00 AM - 11:00 AM',
           description: 'Event description',
        },
       
        
    ]
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md gap-4'>
      <Calendar  onChange={onChange} value={value} />
       <div className='flex justify-between items-center  '>
                 <h1 className='text-lg font-semibold'>Events</h1>
                 <Image src='/moreDark.png' alt='' width={20} height={20} />
                 </div>
                 <div>
                    {Events.map((event) => (
                        <div key={event.id} className='bg-gray-100 p-4 rounded-md flex flex-col justify-between gap-2 border-b-2 border-[#C3EBFA]'>
                            <h1 className='text-lg font-semibold'>{event.title}</h1>
                            <p className='text-sm text-gray-500'>{event.time}</p>
                            <p className='text-sm text-gray-500'>{event.description}</p>
                        </div>
                    ))}
                 </div>
                 
               </div>
   

  )
}

export default EventCalender
