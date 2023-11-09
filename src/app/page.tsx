'use client'

import React from "react";
import BaseTextInput from "@/app/BaseTextInput";
import List from "@/app/List";

export default function Home() {
  const [query, setQuery] = React.useState('')
  const [tagItems, setTagItems] = React.useState<string[]>([])

  const handleChangeInput = (text: string) => {
    setQuery(text)
  }

  const onSelectItem = (tag: string) => {
    const filteredTagItems = tagItems.includes(tag) ? tagItems.filter(tagItem => tagItem !== tag) : [...tagItems, tag]
    setTagItems([...filteredTagItems])
  }

  return (
    <div className="h-full">
      <div className="w-full flex flex-col justify-center items-center gap-3 pt-10">
          <div className="flex">
            <BaseTextInput onChangeInput={handleChangeInput} />
          </div>
          <div className="flex">
            <List query={query} tagItems={tagItems} onSelectItem={onSelectItem} />
          </div>
          <div className="flex">
            
          </div>
      </div>
    </div>
  )
}
