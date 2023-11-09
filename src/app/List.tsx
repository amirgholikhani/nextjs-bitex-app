'use client'

import React from "react";


export interface DataType {
  id: string
  label: string
}

interface ListProps {
  query: string
  onSelectItem: (id: string) => void
  tagItems: string[]
}

function List({ query, onSelectItem, tagItems }: ListProps) {
  let [userData, setUserData] = React.useState<DataType[]>([])

  const getData = async () => {
    const response = await fetch("http://localhost:3000/api")
      .then((response) => response.json())

    setUserData(response.data)
  }

  const userDataFiltered = userData.filter(data => data.label.toLowerCase().includes(query.toLowerCase()))

  const toggleSelect = (id: string) => {
    onSelectItem(id)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {query && userDataFiltered.length > 0 && (
        <div className="w-[200px] rounded-lg bg-white p-2">
          {userDataFiltered.map(data => (
            <DataRow key={data.id} data={data} toggleSelect={toggleSelect} isSelected={tagItems.includes(data.id)} />
          ))}
        </div>
      )}
    </div>
  )
}


interface DataRowProps {
  data: DataType
  toggleSelect: (id: string) => void
  isSelected: boolean
}

const DataRow = ({ data, toggleSelect, isSelected }: DataRowProps) => {

  const handleClick = () => {
    toggleSelect(data.id)
  }

  return (
    <div
      className={"hover:bg-[#F8F8F8] text-[12px] p-2 " + (isSelected ? 'bg-[#F8F8F8]' : '')}
      key={data.id} onClick={handleClick}
    >
      {data.label}
    </div>
  )
}

export default List