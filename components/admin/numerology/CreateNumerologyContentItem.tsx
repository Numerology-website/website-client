import { FormCreateNumerologyProps } from "@/components/admin/numerology/FormCreateNumerology"
import { TrashIcon } from "@heroicons/react/24/outline"
import { Accordion, Label, TextInput, Textarea } from "flowbite-react"
import dynamic from "next/dynamic"
import { FC, useState } from "react"
import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFieldArrayMove,
  UseFormRegister,
} from "react-hook-form"

const InlineEditor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})

interface CreateNumerologyContentItemProps {
  field: FieldArrayWithId<FormCreateNumerologyProps, "contents", "id">
  index: number
  register: UseFormRegister<FormCreateNumerologyProps>
  control: Control<FormCreateNumerologyProps, any>
  remove: UseFieldArrayMove
}
export const CreateNumerologyContentItem: FC<
  CreateNumerologyContentItemProps
> = ({ field, index, register, control, remove }) => {
  const [title, setTitle] = useState(field.title)
  return (
    <>
      <Accordion.Title>{title}</Accordion.Title>
      <Accordion.Content>
        <div>
          <div className="mb-2 block">
            <Label htmlFor={`title-${index}`} value="Title" />
          </div>
          <TextInput
            id={`title-${index}`}
            placeholder="Title"
            {...register(`contents.${index}.title`)}
            onChange={(e) => {
              register(`contents.${index}.title`).onChange(e)
              setTitle(e.target.value)
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor={`description-${index}`} value="Description" />
          </div>
          <Textarea
            id={`description-${index}`}
            placeholder="Add description"
            {...register(`contents.${index}.description`)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor={`value-${index}`} value="Value" />
          </div>
          <Controller
            control={control}
            name={`contents.${index}.value`}
            render={({ field }) => (
              <InlineEditor
                onChange={(value) => field.onChange(value)}
                value={field.value}
              />
            )}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="btn btn-danger mt-5"
            onClick={() => remove(index, 1)}
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </Accordion.Content>
    </>
  )
}
