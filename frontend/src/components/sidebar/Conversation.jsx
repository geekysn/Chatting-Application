import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-green-600 rounded p-2 py-1 cursor-pointer'>
          <div className='avatar online'>
            <div className='w-12 rounded-full'>
              <img src="https://api.dicebear.com/9.x/personas/svg?seed=Felix" alt="user avatar" />
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-green-900'>Snehil Sharma</p>
              <span className='text-xl'>😁</span>
            </div>
          </div>
        </div>
        <div className='divider my-0 py-0 h-1 bg-slate-700 rounded-full'/>
    </>
  )
}

export default Conversation