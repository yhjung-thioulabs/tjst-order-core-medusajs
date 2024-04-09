import { trim } from "lodash"
import React from "react"
import Button from "../../fundamentals/button"
import InputField from "../input"

type SaveFilterItemProps = {
  saveFilter: () => void
  name: string
  setName: (name: string) => void
}

/**
 * @deprecated Use `FilterMenu` instead
 */
const SaveFilterItem: React.FC<SaveFilterItemProps> = ({
  saveFilter,
  setName,
  name,
}) => {
  const onSave = () => {
    const trimmedName = trim(name)
    if (trimmedName !== "") {
      saveFilter()
      setName("")
    }
  }

  return (
    <div className="mt-2 flex w-full">
      <InputField
        className="max-w-[172px] pt-0 pb-1"
        placeholder="필터 이름 지정"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Button
        className="border-grey-20 ml-2 border"
        variant="ghost"
        size="small"
        onClick={onSave}
      >
        저장
      </Button>
    </div>
  )
}

export default SaveFilterItem
