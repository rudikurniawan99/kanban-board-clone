import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = []

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addList: (state, action) => {
      const { title } = action.payload

      const list =  {
        id: uuidv4(),
        title
      }

      state.push(list)
    }
  }
})

export const { addList } = kanbanSlice.actions
export default kanbanSlice.reducer