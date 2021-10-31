import React from 'react'

const List = ({list}) => {
  return (
    <div className="px-8 py-2 border border-black border-opacity-10 rounded-lg">
      <h4 className="text-gray-900 text-xl">
        {list.title}
      </h4>
    </div>
  )
}

export default List
