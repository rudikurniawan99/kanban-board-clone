import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addList: (state, action) => {
      const { title } = action.payload
      const newList = {
        id: v4(),
        title,
        cards: []
      }

      state.push(newList)
    }
  }
})

export const { addList } = listSlice.actions
export default listSlice.reducer