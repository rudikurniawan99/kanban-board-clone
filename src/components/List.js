import React from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../hooks/useInput'
import { addCard } from '../features/list/listSlice'
import Card from './Card'

const List = ({list}) => {

  const [openCardField, setOpenCardField] = React.useState(null)
  const cardTitle = useInput('')
  const dispatch = useDispatch()

  return (
    <div className="px-8 py-2 border border-black border-opacity-10 w-64 rounded-lg">
      <h4 className="text-gray-900 text-xl">
        {list.title}
      </h4>
      <hr />
      <div className="my-4">
        {list.cards && (
          <Card 
            card={list.cards}
            listId={list.id}
          />
        )}
      </div>
      <div className="my-4">
        {openCardField === list.id ? (
          <>
            
            <div className="flex">
              <input
                type="text"
                className="border border-blue-400 border-opacity-25 w-full px-3"
                value={cardTitle.value}
                onChange={cardTitle.onChange}
              />
              <button
                className="py-1 px-3 bg-blue-500 text-white"
                onClick={() => {
                  if(cardTitle.value){
                    dispatch(addCard({
                      id: list.id,
                      title: cardTitle.value
                    }))
                    cardTitle.reset()
                    setOpenCardField(null)
                  }
                }}
              >+</button>
            </div>
          </>
        ):(
          <button
            className="py-1 px-2 border border-black border-opacity-25 hover:bg-gray-100 text-gray-900 w-full"
            onClick={() => {
              setOpenCardField(list.id)
            }}
          >Add Card</button>
        )}
      </div>
    </div>
  )
}

export default List
