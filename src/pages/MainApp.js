import React from 'react'
import { useSelector } from 'react-redux'
import List from '../components/List'
import ListInputField from '../components/ListInputField'

const MainApp = () => {

  const list = useSelector(state => state.list)

  return (
    <div className="p-20 container mx-auto">
      <ListInputField/>
      <div className="py-8 space-x-5 flex">
        {list.map((item) => (
          <List key={item.id} list={item} />
        ))}
      </div>
      
    </div>
  )
}

export default MainApp
