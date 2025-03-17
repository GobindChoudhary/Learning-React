import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0);
  
  return (
    <div className='w-[100vw] h-[100vh] relative text-white bg-black flex justify-center items-center'>
      <div className="count absolute top-[30%] left-[50%] px-10 py-5 -translate-x-[50%] -translate-y-[50%]  rounded-md  bg-blue-200 ">
        <h1 className='hover:scale-150 duration-300 ease-in-out text-black text-2xl'>{count}</h1>
      </div>
      <button onClick={()=>setCount(count => count+ 1)} className='bg-blue-900 p-2 m-4  rounded-md'>Increment</button>
      <button onClick={() => setCount(0)} className='bg-blue-900 p-2 m-4  rounded-md'>Reset</button>
      <button onClick={()=> setCount(count => count - 1)} className='bg-blue-900 p-2 m-4  rounded-md'>Decrement</button>

    </div>
  )
}

export default App