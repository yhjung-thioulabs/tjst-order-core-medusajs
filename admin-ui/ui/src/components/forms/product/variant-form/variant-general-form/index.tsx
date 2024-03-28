import FormValidator from "../../../../../utils/form-validator"
import { NestedForm } from "../../../../../utils/nested-form"
import InputField from "../../../../molecules/input"

export type VariantGeneralFormType = {
  title: string | null
  material: string | null
}

type Props = {
  form: NestedForm<VariantGeneralFormType>
}

const VariantGeneralForm = ({ form }: Props) => {
  const {
    path,
    register,
    formState: { errors },
  } = form

  return (
    <div>
      <p className="inter-base-regular text-grey-50">
        상품에 대한 일반 정보를 구성합니다.
      </p>
      <div className="pt-large">
        <div className="gap-x-large grid grid-cols-2">
          <InputField
            label="이름"
            //placeholder="Green / XL..."
            placeholder="사이즈"
            {...register(path("title"), {
              pattern: FormValidator.whiteSpaceRule("Title"),
            })}
            errors={errors}
          />
          <InputField
            label="재료"
            //placeholder="80% wool, 20% cotton..."
            placeholder="국내산 돼지고기 100%"
            {...form.register(path("material"), {
              pattern: FormValidator.whiteSpaceRule("Material"),
            })}
            errors={errors}
          />
        </div>
      </div>
    </div>
  )
}

export default VariantGeneralForm
