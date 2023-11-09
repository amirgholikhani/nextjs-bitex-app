'use client'

import React from "react";

interface BaseTextInputProps {
    onChangeInput: (text: string) => void
}

function BaseTextInput({ onChangeInput }: BaseTextInputProps) {
    const [value, setValue] = React.useState('')

    const handleChange = (event: any) => {
        setValue(event.target.value)
        onChangeInput(event.target.value)
    }

    return (
        <div className="mt-10">
            <input
                value={value}
                className="rounded-lg text-[#434343] w-[200px] h-[36px] px-2 focus:outline-none"
                placeholder="Add tags ..."
                onChange={handleChange}
            />
        </div>
    )
}

export default BaseTextInput