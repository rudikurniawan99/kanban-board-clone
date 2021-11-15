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
        },
        {
          id: v4(),
          title: 'dummy card 3'
        },
        {
          id: v4(),
          title: 'dummy card 7'
        }

      ]
    },
    {
      id: v4(),
      title: 'Dummy list 2',
      cards: [
        {
          id: v4(),
          title: 'Dummy Card 5'
        }
      ]
    },
    {
      id: v4(),
      title: 'Dummy list 3',
      cards: []
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
    dragCard: (state, action) => {
      const { destId, destIndex, sourceId, sourceIndex } = action.payload
      
      const sourceList = state.find((elm) => elm.id === sourceId)
      if(destId === sourceId){
        const sourceCards = sourceList.cards
        const sourceCard = sourceCards[sourceIndex]
        sourceCards.splice(sourceIndex, 1, sourceCards[destIndex])
        sourceCards.splice(destIndex, 1, sourceCard)
        sourceCards.map((item, index) => {
          console.log(index, item.title)
        })
      }else{
        //source
        let sourceCards = sourceList.cards
        const dragedCard = sourceCards[sourceIndex]
        if(sourceCards.length === 1 || sourceIndex === 0){
          sourceCards.shift()

        }else if(sourceCards.length-1 === sourceIndex){
          sourceCards.pop()
        }else{
          sourceList.cards = [...sourceCards.slice(0,sourceIndex), ...sourceCards.slice(sourceIndex+1, sourceCards.length)]
        }

        // destination
        const destinationList = state.find((elm) => elm.id === destId)
        let destinationCards = destinationList.cards

        if(!destinationCards || destinationCards.length === destIndex){
          destinationCards.push(dragedCard)
        }else if(!destIndex){

          destinationCards.unshift(dragedCard)
        }else{
          destinationList.cards = [...destinationCards.slice(0,destIndex), dragedCard, ...destinationCards.slice(destIndex, destinationCards.length)]
        }
      }
    }
  }
})

export const { addList, addCard, dragCard } = listSlice.actions
export default listSlice.reducer
