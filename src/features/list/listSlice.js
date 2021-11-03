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
    },
    addCard: (state, action) => {
      const { id, title } = action.payload
      let itemIndex, updateItem = null

      state.map((item, index) => {
        if(item.id === id){
          itemIndex = index
          updateItem = {
            id: item.id,
            title: item.title,
            cards: item.cards.push({
              id: uuidv4(),
              title: title
            })          }
        }
      })
      state = [...state.slice(0, itemIndex), updateItem, ...state.slice(itemIndex+1)]
    },
    deleteCard: (state, action) => {
      const { cardId, listId } = action.payload
      let updatedList, updatedCard, listIndex, cardIndex = null

      state.map((item, index) => {
        if(item.id === listId){
          item.cards.map((card, index)=> {
            if(card.id === cardId){
              cardIndex = index
            }
          })
          item.cards = [...item.cards.slice(0, cardIndex), ...item.cards.slice(cardIndex+1)]
        }
      }) 
    }
  }
})

export const { addList, addCard, deleteCard } = listSlice.actions
export default listSlice.reducer