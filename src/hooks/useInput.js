import React from 'react'

const useInput = (initValue) => {
  const [input, setInput] = React.useState(initValue)
  const onChange = (e) => {
    setInput(e.target.value)
  } 
  const reset = () => {
    setInput(initValue)
  }

  return { input, onchange, reset }
}

export default useInput
