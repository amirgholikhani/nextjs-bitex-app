'use client'

import React from "react";


export interface DataType {
  id: string
  label: string
}

interface ListProps {
  query: string
  onSelectItem: (tag: DataType) => void
  tagItems: DataType[]
}

function List({ query, onSelectItem, tagItems }: ListProps) {
  let [userData, setUserData] = React.useState<DataType[]>([])

  const getData = async () => {
    const response = await fetch("http://localhost:3000/api")
      .then((response) => response.json())

    setUserData(response.data)
  }

  const userDataFiltered = userData.filter(data => data.label.toLowerCase().includes(query.toLowerCase()))

  const tagItemsId = tagItems.map(tagItem => tagItem.id)

  const toggleSelect = (tag: DataType) => {
    onSelectItem(tag)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {query && userDataFiltered.length > 0 && (
        <div className="w-[200px] rounded-lg bg-white p-2">
          {userDataFiltered.map(data => (
            <DataRow key={data.id} data={data} toggleSelect={toggleSelect} isSelected={tagItemsId.includes(data.id)} />
          ))}
        </div>
      )}
    </>
  )
}


interface DataRowProps {
  data: DataType
  toggleSelect: (tag: DataType) => void
  isSelected: boolean
}

const DataRow = ({ data, toggleSelect, isSelected }: DataRowProps) => {

  const handleClick = () => {
    toggleSelect(data)
  }

  return (
    <div
      className={"hover:bg-[#F8F8F8] text-[12px] cursor-pointer rounded p-2 " + (isSelected ? 'bg-[#F8F8F8]' : '')}
      key={data.id} onClick={handleClick}
    >
      {data.label}
    </div>
  )
}

export default List