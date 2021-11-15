import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import MainApp from './pages/MainApp'
import { useDispatch } from 'react-redux'
import { dragCard } from './features/list/listSlice'

const App = () => {

  const dispatch = useDispatch()
  const onDragEndHandler = (result) => {
    console.log(result) 
    if(!result.destination){
      return
    }
    if(result.destination.droppableId === result.source.droppableId && result.destination.index === result.source.index){
      return
    }
    dispatch(dragCard({
      destId: result.destination.droppableId,
      destIndex: result.destination.index,
      sourceId: result.source.droppableId,
      sourceIndex: result.source.index
    })) 
  }

  return (
    <DragDropContext
      onDragEnd={onDragEndHandler} 
    >
      <MainApp/>
    </DragDropContext>
  )
}

export default App
