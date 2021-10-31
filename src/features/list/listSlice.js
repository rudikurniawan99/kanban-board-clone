import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = []

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.push({
        id: uuidv4(),
        title: action.payload.title,
        cards: []
      })
    }
  }
})

export const { addList } = listSlice.actions
export default listSlice.reducer