import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Provider } from 'react-redux'
import { store } from './features/store'
import MainApp from './pages/MainApp'

const App = () => {

  const onDragEndHandler = (result) => {
    console.log(result) 
    if(!result.destination){
      return
    }
  }

  return (
    <Provider
      store={store} 
    >
      <DragDropContext
        onDragEnd={onDragEndHandler} 
      >
        <MainApp/>
      </DragDropContext>
    </Provider>
  )
}

export default App
