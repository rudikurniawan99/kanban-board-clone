import React from 'react'

const InputField = ({inputItem}) => {


  return (
    <div className="">
      <input 
        className="px-3 py-1.5 border border-gray-800 border-opacity-30 text-gray-700 rounded-tl-md rounded-bl-md" type="text"
        placeholder="Input List Name"
        value={inputItem.value}
        onChange={inputItem.onChange}
      /> 
    </div>
  )
}

export default InputField
