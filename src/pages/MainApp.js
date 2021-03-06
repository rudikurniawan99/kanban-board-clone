import React from 'react'
import InputField from '../components/InputField'
import List from '../components/List'
import useInput from '../hooks/useInput'
import { useSelector, useDispatch } from 'react-redux'
import { addList } from '../features/list/listSlice'
import { Droppable } from 'react-beautiful-dnd'

const MainApp = () => {

  const listTitle =  useInput('')
  const lists = useSelector((state) => state.list)
  const dispatch = useDispatch()


  return (
    <div className="px-36 py-20">
      <div className="flex items-center">
        <InputField
          inputItem={listTitle}
        />
        <button
          className="py-1.5 px-3 rounded-br-md rounded-tr-md bg-blue-500 text-white"
          onClick={() => {
            dispatch(addList({
              title: listTitle.value
            }))
            listTitle.reset()
          }} 
        >+</button>
      </div>
      <div className="flex space-x-5 mt-10">
        {lists.map((list, index) => (
          <Droppable
            droppableId={list.id}
            key={index}
          >
            {(provided) => (
              <div
                className="h-full"
                ref={provided.innerRef} 
                {...provided.droppableProps}
              >
                <List
                  item={list}
                  provided={provided}
                />
                {provided.placeholder}
              </div>
            )}
            
          </Droppable>
          
        ))}
      </div>
    </div>    
  )
}

export default MainApp
