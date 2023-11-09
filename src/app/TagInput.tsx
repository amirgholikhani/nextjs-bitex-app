import { DataType } from "@/app/List";


interface TagInputProps {
  tag: DataType
}

function TagInput({ tag }: TagInputProps) {
  return (
    <div
      className="bg-[#DDE1EE] text-[#3E5BC4] rounded-3xl text-[12px] font-thin py-0.5 px-2 cursor-pointer hover:bg-[#F2E1E1] hover:text-[#CA3B57]">
      {tag.label}
    </div>
  )
}

export default TagInput