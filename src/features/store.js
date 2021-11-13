import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from './kanban/kanbanSlice'
import listReducer from './list/listSlice'

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
    list: listReducer
  }
})

export { store }