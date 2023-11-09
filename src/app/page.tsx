import Image from 'next/image'
import BaseTextInput from "@/app/BaseTextInput";

export default function Home() {
  return (
    <div className="h-full">
      <div className="text-center pt-10">
        <div className="">
          <BaseTextInput />
        </div>
      </div>
    </div>
  )
}
