import React, { useState } from 'react'

const Main = () => {

  const [text, setText] = useState("full stack developer");



  return (
    <div className='py-20 px-3 max-w-3xl mx-auto flex flex-col'>
      <h3 className='capitalize tracking-wider text-4xl font-normal'>surya ashish</h3>
      <h2 className='capitalize tracking-tighter text-[68px] font-black text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-600'>full stack engineer</h2>
    </div>
  )
}

export default Main