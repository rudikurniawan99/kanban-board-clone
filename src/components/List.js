import useInput from '../hooks/useInput'
import InputField from './InputField'
import { useState } from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { addCard } from '../features/list/listSlice'

const List = ({item}) => {

  const [isOpen, setIsOpen] = useState(false)
  const cardTitle = useInput('')
  const dispatch = useDispatch()

  return (
    <div className="w-80 p-3 rounded-md border border-gray-800 border-opacity-25">
      <h3 className="text-gray-800 font-semibold">
        {item.title}
      </h3>
      <hr />
      <div className="my-3 py-2">
        {item.cards && item.cards.map((card, index) => (
          <Card
            key={index}
            item={card} 
          />
        ))}
      </div>
      {isOpen ? (
        <div className="flex items-center">
          <InputField
            inputItem={cardTitle}
          />
          <button
            className="px-3 py-1.5 bg-blue-500 text-white"
            onClick={() => {
              dispatch(addCard({
                listId: item.id,
                title: cardTitle.value
              }))
              cardTitle.reset()
              setIsOpen(false)
            }}
          >+</button>  
        </div>
      ):(
        <button
          className="py-2 bg-blue-500 text-white w-full rounded-md"
          onClick={() => {
            setIsOpen(true)
          }} 
        >Add Card</button>
      )}
    </div>
  )
}

export default List
