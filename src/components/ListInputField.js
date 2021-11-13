import React from 'react'
import useInput from '../hooks/useInput'

const ListInputField = () => {

  const listName = useInput('')

  return (
    <div className="">
      <div className="flex">
        <input 
          className="px-3 py-1 border border-gray-800 border-opacity-30 text-gray-700" type="text"
          placeholder="Input List Name"
          value={listName.value}
          onChange={listName.onChange}
        /> 
        <button 
          className="py-2 px-4 bg-blue-500 text-white"
          onClick={() => {
            console.log(listName.value)
            listName.reset()
          }}   
        >+</button>
      </div>  
    </div>
  )
}

export default ListInputField
