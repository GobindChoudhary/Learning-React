import { useState } from "react"

function App() {
  const [value , setValue]= useState({name:"gobind", studing:true}) 
  const [arr , setArray] = useState([1,2,3,4,5,6,7]);
  
    const buttonStyle = {
      backgroundColor: value.studing? '#28a745' : '#007BFF', // Blue color
      color: 'white',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };

  return (
   <main>
     <h1>{value.studing.toString()}</h1>
       <button style={ buttonStyle } onClick= {()=> setValue({...value, studing:!value.studing})} className={` text-white font-bold py-2 px-4 rounded`}>
          Click Me
       </button>

       {/* // poping the last element of array using useState */}
       
       {arr.map((item) => <h1>{item}</h1> )}
       <button  onClick= {()=> setArray(arr.filter((value, index)=> index != arr.length-1))}>
          pop
       </button>
<br /> <br />
       {/* delete element from array which are not divided by 2 */}
       <button  onClick= {()=> setArray(arr.filter((value, index)=> (value % 2) == 0 ))}>
          element divide by 2
       </button>
   </main>
  )
}

export default App
