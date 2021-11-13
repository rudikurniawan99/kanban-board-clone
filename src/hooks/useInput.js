import React from 'react'

const useInput = (initValue) => {
  const [value, setValue] = React.useState(initValue)
  const onChange = (e) => {
    setValue(e.target.value)
  } 
  const reset = () => {
    setValue(initValue)
  }
  

  return { value, onChange, reset }

}

export default useInput
