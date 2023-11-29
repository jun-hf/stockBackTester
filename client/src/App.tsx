import { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  useEffect(() => {

    (async () => {
      try {
        const result = await axios.get('/status');
        console.log(result); 
      } catch (error) {
        console.error('Cannot get error');
      }
    })();
  }, []);

  return (
    <>
      <h1>Hello, this is the Stock BackTester</h1>
    </>
  )
}

export default App
