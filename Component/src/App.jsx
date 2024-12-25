import reactLogo from './assets/React.js_logo-512.webp'
import Button from "./components/Button.jsx";
function App() {
  const handleClick = (message)=>{
    alert(message);
  }
  return (
<main>
  <img src={reactLogo} width="40px" alt="React logo" />
  <h1>Fun facts about React!</h1>
  <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
  {/* reusable button */}
  <Button 
    onClick={()=>handleClick("hii")} 
    style={{ backgroundColor: 'blue', color: 'white' }} 
    lable="click me"  
  />
  <Button 
    onClick={()=>handleClick('hello gobind!')} 
    style={{ backgroundColor: 'red', color: 'white' }} 
    lable="submit"  
  />
</main>
  )
}

export default App
