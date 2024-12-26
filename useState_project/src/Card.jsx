import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';

const Card = () => {
    const [val,setVal] = useState(false)
  return (
    <>
        <div className=' w-full h-screen flex justify-center items-center'>
        <div className="h-44 w-72 bg-red-600 flex rounded-lg overflow-hidden ">
             <img className={`shrink-0 ${val? '-translate-x-[0%]' : '-translate-x-[100%]'} w-full h-full bg-cover transition-transform ease-in-out duration-700`} src="https://images.unsplash.com/photo-1734923471726-cc6c6d3f50b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D" alt="" />
             <img className={`shrink-0 ${val? '-translate-x-[0%]' : '-translate-x-[100%]'} w-full h-full bg-cover transition-transform ease-in-out duration-700 `} src="https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D" alt="" />
             <span onClick={()=> setVal(()=> !val)} className=' flex justify-center  items-center bg-[#dadada7b] absolute h-8 w-8  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <FaArrowRight />
             </span>
         </div>
    </div>
    </>
  )
}

export default Card