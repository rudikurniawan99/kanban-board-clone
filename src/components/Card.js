import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../features/list/listSlice'

const Card = ({card, listId}) => {

  const actionIcon =  <svg xmlns="http://www.w3.org/2000/svg" className="w-full text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
  const dispatch = useDispatch()

  return (
    <>
      {card.map(item => (
        <div key={item.id}>
          <div className="flex items-center justify-between my-2">
            <p className="w-full text-left">
              {item.title}
            </p>
            <button 
              className="w-5 h-5"
              onClick={() => {
                dispatch(deleteCard({ 
                  cardId: item.id,
                  listId
                 }))
              }}
            >
              {actionIcon}
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
