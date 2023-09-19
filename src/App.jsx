import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      const clicker=()=>{
        console.log("clicker")
      }
      document.body.addEventListener("click",clicker)

      return ()=>{
        document.body.removeEventListener("click",clicker)
      }
      
  }, [count]); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
