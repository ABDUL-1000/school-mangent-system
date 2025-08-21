import Image from 'next/image'
import React from 'react'

const Announcement = () => {
    const data = [
        {
          id: 1,
          name: 'Announcement 1',
          description: 'Description of announcement 1',
          date: '2023-06-01',
        },
        {
          id: 2,
          name: 'Announcement 2',
          description: 'Description of announcement 2',
          date: '2023-06-02',
        },
        {
          id: 3,
          name: 'Announcement 3',
          description: 'Description of announcement 3',
          date: '2023-06-03',
        }

    ]
  return (
    <div className='h-full w-full bg-white p-4 rounded-xl'>
       <div className='flex justify-between items-center  '>
              <h1 className='text-lg font-semibold'>Announcements</h1>
              <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div>
                {
                    data.map(item => (
                        <div className='flex justify-between items-center mt-4 bg-[#FAE27C] p-4 rounded-md '>
                            <div>
                                <h1 className='text-sm font-semibold'>{item.name} </h1>
                                <p className='text-xs text-gray-600'>{item.description}</p>
                            </div>
                            <span className='text-xs text-gray-600'>{item.date}</span>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Announcement
