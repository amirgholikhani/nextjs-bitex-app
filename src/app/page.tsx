'use client'

import React from "react";
import BaseTextInput from "@/app/BaseTextInput";
import List, {DataType} from "@/app/List";
import TagInput from "@/app/TagInput";

export default function Home() {
  const [query, setQuery] = React.useState('')
  const [tagItems, setTagItems] = React.useState<DataType[]>([])

  const handleChangeInput = (text: string) => {
    setQuery(text)
  }

  const tagItemsId = tagItems.map(tagItem => tagItem.id)

  const onSelectItem = (tag: DataType) => {
    const filteredTagItems = tagItemsId.includes(tag.id) ? tagItems.filter(tagItem => tagItem.id !== tag.id) : [...tagItems, tag]
    setTagItems([...filteredTagItems])
  }

  return (
    <div className="h-full">
      <div className="w-full flex flex-col justify-center items-center gap-3 pt-10">
        <div className="flex">
          <BaseTextInput onChangeInput={handleChangeInput} />
        </div>
        <List query={query} tagItems={tagItems} onSelectItem={onSelectItem} />
        <div className="flex">
          <div className="w-[200px] flex flex-row gap-1 flex-wrap">
            {tagItems.map(tagItem => (
              <TagInput key={tagItem.id} tag={tagItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
