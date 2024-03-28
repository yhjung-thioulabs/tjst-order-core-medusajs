import React, { useState } from "react"
import clsx from "clsx"

import Button from "../../../fundamentals/button"
import Modal from "../../../molecules/modal"
import RadioGroup from "../../radio-group"

type ConfirmationPromptProps = {
  handleClose: () => void
  onSaveOnlyVisible: () => Promise<void>
  onSaveAll: () => Promise<void>
  hiddenEditedColumns: string[]
}

enum SaveMode {
  SAVE_VISIBLE_ONLY = "SAVE_VISIBLE_ONLY",
  SAVE_ALL = "SAVE_ALL",
}

const SavePrompt: React.FC<ConfirmationPromptProps> = ({
  handleClose,
  onSaveOnlyVisible,
  onSaveAll,
  hiddenEditedColumns,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const hasHiddenColumns = !!hiddenEditedColumns.length

  const [saveSelection, setSaveSelection] = useState<SaveMode>(
    SaveMode.SAVE_VISIBLE_ONLY
  )

  return (
    <Modal isLargeModal={false} handleClose={handleClose}>
      <Modal.Body>
        <Modal.Content>
          <div className="flex flex-col">
            <span className="inter-large-semibold">변경 사항 저장</span>
            <span className="inter-base-regular text-grey-50 mt-1 mb-4 w-[420px]">
              {hasHiddenColumns
                ? `숨겨진 열에서 가격을 편집했습니다.: (${hiddenEditedColumns.join(
                    ", "
                  )}). 이것도 저장하시겠습니까?`
                : "편집된 상품 가격 저장"}
            </span>
          </div>

          {hasHiddenColumns && (
            <RadioGroup.Root
              className="gap-base mt-2 flex-col"
              value={saveSelection}
              onValueChange={setSaveSelection}
            >
              <RadioGroup.Item
                className="flex-1"
                label={"모두 저장하기"}
                description={"모든 가격 변동 사항 저장"}
                value={SaveMode.SAVE_ALL}
              />
              <RadioGroup.Item
                className="flex-1"
                label={"보이는 것만 저장"}
                description={"눈에 보이는 가격 변동 사항만 저장"}
                value={SaveMode.SAVE_VISIBLE_ONLY}
              />
            </RadioGroup.Root>
          )}
        </Modal.Content>
        <Modal.Footer className="flex items-center border border-t">
          <div className="mt-4 flex h-8 w-full justify-end gap-2">
            <Button
              variant="ghost"
              className="text-small mr-2  justify-center"
              size="small"
              onClick={handleClose}
            >
              취소
            </Button>
            <Button
              size="small"
              color="black"
              className={clsx(
                "text-small justify-center bg-black text-white active:bg-black active:text-white",
                {
                  "hover:bg-black": !isLoading,
                }
              )}
              loading={isLoading}
              onClick={() => {
                setIsLoading(true)

                const callback = !hasHiddenColumns
                  ? onSaveOnlyVisible
                  : saveSelection === SaveMode.SAVE_ALL
                  ? onSaveAll
                  : onSaveOnlyVisible

                callback()
              }}
            >
              변경 사항 저장
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

export default SavePrompt
