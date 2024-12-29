import React from 'react'

const Cards = ({data,index,handleClick}) => {
    const {name,profession,image,friend} = data
  return (
    <>
    <div className="h-60 w-52 bg-red-300 rounded-lg">
        <div className="h-3/4 w-full bg-blue-300 rounded-t-lg overflow-hidden">
        <img  src={image}
         alt="" />
        </div>
        <div className="flex justify-between p-2">
            <div>
            <h4 className='text-sm font-bold'>{name}</h4>
            <h5 className='text-sm '>{profession}</h5>
            </div>
            <div>
                <button onClick={()=> handleClick(index)} className={`h-8 w-20 ${friend? 'bg-blue-300' : 'bg-green-300'} rounded-lg my-3 ml-2 text-sm font-bold`} >
                    {friend? 'follow' : 'friend'}
                </button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Cards