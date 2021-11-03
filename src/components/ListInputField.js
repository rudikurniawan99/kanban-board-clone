import React from 'react'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { addList } from '../features/list/listSlice'

const ListInputField = () => {

  const [openInput, setOpenInput] = React.useState(false)
  const list = useInput('')
  const dispatch = useDispatch()

  return (
    <div className="flex">
      {openInput ? (
        <>
          <input 
            value={list.value}
            onChange={list.onChange}
            className="border border-black text-gray-700 border-opacity-20 px-3" type="text"
            placeholder="Add List Name"
          /> 
          <button 
            className="py-2 px-4 bg-blue-500 text-white"
            onClick={() => {
              if(list.value){
                dispatch(addList({title: list.value}))
                list.reset()
              }
            }}  
          >+</button>
          <button 
            className="ml-4 py-2 px-4 bg-red-500 text-white"
            onClick={() => {
              setOpenInput(false)
            }}
          >Close</button>
        </>
      ):(
        <button
          className="px-4 py-1.5 bg-blue-500 text-white"
          onClick={() => {
            setOpenInput(true)
          }}
        >Add List</button>
      )}
      
    </div>
  )
}

export default ListInputField
