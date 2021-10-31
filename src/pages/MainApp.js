import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addList } from '../features/list/listSlice'

const MainApp = () => {

  const list = useSelector(state => state.list)
  const dispatch = useDispatch()
  const [input, setInput] = React.useState('')

  return (
    <div>
      <h1>test ini dong </h1>
      <input 
        type="text" 
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      /> 
      <button
        onClick={() => {
          dispatch(addList({title: input}))
          setInput('')
        }} 
      >+</button>
      <div>
        {list.map((item) => {
          console.log(item.title)
        })}
      </div>
    </div>
  )
}

export default MainApp
