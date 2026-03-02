import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React + Vite! ⚛️</h1>
        <p>Built with Eleven's Deployment Hub</p>
      </header>
      
      <main>
        <div className="card">
          <h2>Counter Demo</h2>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
        </div>
        
        <p className="read-the-docs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </main>
    </div>
  )
}

export default App