import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const listSlice = createSlice({
  name: 'list',
  initialState: [
    {
      id: v4(),
      title: 'Dummy List',
      cards: [
        {
          id: v4(),
          title: 'Dummy Card 1'
        },
        {
          id: v4(),
          title: 'Dummy Card 2'
        }
      ]
    }
  ],
  reducers: {
    addList: (state, action) => {
      const { title } = action.payload
      const newList = {
        id: v4(),
        title,
        cards: []
      }
      state.push(newList)
    },
    addCard: (state, action) => {
      const { listId, title } = action.payload
      const newCard = {
        id: v4(),
        title
      }

      state.map((list) => {
        if(list.id === listId){
          list.cards.push(newCard)
        }
        return 0
      })
    },
  }
})

export const { addList, addCard } = listSlice.actions
export default listSlice.reducer