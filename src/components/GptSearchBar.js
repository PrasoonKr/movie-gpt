import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
      <form className='w-1/2 bg-black rounded-3xl grid grid-cols-12 '>
        <input className='p-4 m-4 col-span-9 rounded-3xl' type='text' placeholder='What would you like to watch today?'/>
        <button className='py-2 m-6 px-4 col-span-3 bg-red-700 text-white text-lg rounded-3xl hover:opacity-95'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
