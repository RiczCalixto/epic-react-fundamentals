// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleValueChange = e => {
    setInputValue(e.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" onChange={handleValueChange} value={inputValue} />
      </div>
      <button type="submit" disabled={!inputValue}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
