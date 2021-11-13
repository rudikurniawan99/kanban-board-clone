import React from 'react'
import { Provider } from 'react-redux'
import { store } from './features/store'
import MainApp from './pages/MainApp'

const App = () => {
  return (
    <Provider
      store={store} 
    >
      <MainApp/>
    </Provider>
  )
}

export default App
