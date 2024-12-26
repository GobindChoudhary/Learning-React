import { useState } from "react";
function App() {
  const [value, setValue] = useState({ name: "gobind", studing: true });
  const [arr, setArray] = useState([1, 2, 3, 4, 5, 6, 7]);

  const buttonStyle = {
    backgroundColor: value.studing ? '#28a745' : '#007BFF', // Green/Blue toggle
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <main>q
        style={buttonStyle}
        onClick={() => setValue({ ...value, studing: !value.studing })}
        className="text-white font-bold py-2 px-4 rounded"
      >
        Click Me
      </button>

      {/* Rendering Array */}
      {arr.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}

      {/* Pop Last Element */}
      <button
        onClick={() =>
          setArray(arr.filter((value, index) => index !== arr.length - 1))
        }
      >
        Pop
      </button>
      <br />
      <br />

      {/* Remove Elements Not Divisible by 2 */}
      <button
        onClick={() => setArray(arr.filter((value) => value % 2 === 0))}
      >
        Elements Divisible by 2
      </button>

      
    </main>
    
  );
}

export default App;
