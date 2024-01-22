import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count+1); 
  };


// When you call setCount(count + 1), React doesn't immediately update the state. Instead, it schedules the state update and continues with the execution of the current function. This means that the console.log(count) statement is executed before the state is actually updated.
  // To get the updated value u have to pass (count + 1) 


return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App
