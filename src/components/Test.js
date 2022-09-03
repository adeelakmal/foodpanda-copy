import React from 'react'

export default function Test() {
  return (
    <>
    <div className='grid grid-row-2 gap-4 mx-4'>
        <div className="p-3 w-full bg-white rounded-lg drop-shadow-lg">
            
          <input
            className="w-full p-4 border border-gray border-solid rounded-lg"
            type="text"
            placeholder="Search for anything..." 
            />
        </div>
        <div className='flex gap-3 p-3 px-3 drop-shadow-lg'>
            <button className="flex-auto bg-pink text-white rounded-lg min-h-content h-16 w-44">delevery</button>    
            <span className='flex-intial py-4'>or</span>
            <button className='flex-auto bg-pink text-white rounded-lg w-44'>pick up</button>
        </div>
    </div>
      </>
  )
}
