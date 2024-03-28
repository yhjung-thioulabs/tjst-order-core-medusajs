import FormValidator from "../../../../utils/form-validator"
import { NestedForm } from "../../../../utils/nested-form"
import InputField from "../../../molecules/input"
import TextArea from "../../../molecules/textarea"

export type GeneralFormType = {
  title: string
  subtitle: string | null
  handle: string
  material: string | null
  description: string | null
}

type Props = {
  form: NestedForm<GeneralFormType>
  requireHandle?: boolean
  isGiftCard?: boolean
}

const GeneralForm = ({ form, requireHandle = true, isGiftCard }: Props) => {
  const {
    register,
    path,
    formState: { errors },
  } = form

  return (
    <div>
      <div className="gap-x-large mb-small grid grid-cols-2">
        <InputField
          label="메뉴 이름"
          //placeholder={isGiftCard ? "Gift Card" : "Winter Jacket"}
          placeholder={isGiftCard ? "Gift Card" : "순대볶음"}
          required
          {...register(path("title"), {
            required: "Title is required",
            minLength: {
              value: 1,
              message: "Title must be at least 1 character",
            },
            pattern: FormValidator.whiteSpaceRule("Title"),
          })}
          errors={errors}
        />
        <InputField
          label="서브타이틀"
          placeholder="매콤쌉쌀달콤"
          {...register(path("subtitle"), {
            pattern: FormValidator.whiteSpaceRule("Subtitle"),
          })}
          errors={errors}
        />
      </div>
      <p className="inter-base-regular text-grey-50 mb-large">
        {/* Give your {isGiftCard ? "gift card" : "product"} a short and clear */}
        {/* title. */}
        메뉴 이름을 입력하세요.
        <br />
        {/* 50-60 characters is the recommended length for search engines. */}
      </p>
      <div className="gap-x-large mb-large grid grid-cols-2">
        <InputField
          label="Handle"
          tooltipContent={
            !requireHandle
              // ? `The handle is the part of the URL that identifies the ${
              //     isGiftCard ? "gift card" : "product"
              //   }. If not specified, it will be generated from the title.`
              ? "핸들은 제품을 식별하는 URL의 일부로, 지정하지 않으면 제목에서 생성됩니다."
              : undefined
          }
          //placeholder={isGiftCard ? "gift-card" : "winter-jacket"}
          placeholder={isGiftCard ? "gift-card" : "sundaebokkm"}
          required={requireHandle}
          {...register(path("handle"), {
            required: requireHandle ? "Handle is required" : undefined,
            minLength: FormValidator.minOneCharRule("Handle"),
            pattern: FormValidator.whiteSpaceRule("Handle"),
          })}
          prefix="/"
          errors={errors}
        />
        <InputField
          label="재료"
          //placeholder={isGiftCard ? "Paper" : "100% Cotton"}
          placeholder={"국내산 돼지고기, 국내산 콩, 국내산 밀가루"}
          {...register(path("material"), {
            minLength: FormValidator.minOneCharRule("Material"),
            pattern: FormValidator.whiteSpaceRule("Material"),
          })}
          errors={errors}
        />
      </div>
      <TextArea
        label="메뉴 설명"
        placeholder={
          //isGiftCard ? "The gift card is..." : "A warm and cozy jacket..."
          "매콤쌉쌀달콤..."
        }
        rows={3}
        className="mb-small"
        {...register(path("description"))}
        errors={errors}
      />
      <p className="inter-base-regular text-grey-50">
        {/* Give your {isGiftCard ? "gift card" : "product"} a short and clear */}
        {/* description. */}
        메뉴에 대한 설명을 입력하세요.
        <br />
        {/* 120-160 characters is the recommended length for search engines. */}
      </p>
    </div>
  )
}

export default GeneralForm
