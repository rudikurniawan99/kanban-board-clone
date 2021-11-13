import React from 'react'
import InputField from '../components/InputField'
import List from '../components/List'
import useInput from '../hooks/useInput'

const MainApp = () => {

  const listTitle =  useInput('')

  return (
    <div className="px-36 py-20">
      <div className="flex items-center">
        <InputField
          inputItem={listTitle}
        />
        <button
          className="py-1.5 px-3 rounded-br-md rounded-tr-md bg-blue-500 text-white"
          onClick={() => {
            console.log(listTitle.value)
            listTitle.reset()
          }} 
        >+</button>
      </div>
      <div className="mt-10">
        <List/>
      </div>
    </div>    
  )
}

export default MainApp
