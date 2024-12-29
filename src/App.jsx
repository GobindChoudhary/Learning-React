import React, { useState } from 'react'
import Cards from './Cards.jsx'
const App = () => {
  const userDB = [
    {name:'Gobind', friend:'false', profession:'software engg',image:'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww'},
    {name:'Sumit', friend:'false', profession:'Artist',image:'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww'},
    {name:'Abhishek', friend:'false', profession:'CS expert',image:'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww'},
    {name:'Shivani', friend:'false', profession:'software engg',image:'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'}
  ]
   const [data, setData] = useState(userDB)
   const handleFriendsButton = (cardIndex) => {setData((data) => { 
    return data.map((item,index) => { 
      if(index === cardIndex){
        return{...item, friend: !item.friend}
  } 
return item; 
    })
  })
   }

  return (
    <div className='h-screen w-full flex gap-5 justify-center items-center'>
      {data.map((item,index) => <Cards key={index} handleClick={handleFriendsButton} index={index} data={item} /> )}
    </div>
  )
}

export default App