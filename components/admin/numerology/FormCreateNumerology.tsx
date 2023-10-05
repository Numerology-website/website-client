"use client"
import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { CreateNumerologyContentItem } from "@/components/admin/numerology/CreateNumerologyContentItem"
import { toastify } from "@/libs/toastify"
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline"
import { PlusIcon } from "@heroicons/react/24/solid"
import { Accordion, Label, TextInput, Textarea } from "flowbite-react"
import { useSession } from "next-auth/react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"

export type FormCreateNumerologyProps = {
  number: number
  description: string
  contents: {
    title: string
    value: string
    description?: string
  }[]
}

export const FormCreateNumerology = () => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormCreateNumerologyProps>({
    defaultValues: {
      number: 0,
      description: "This is description",
      contents: [
        {
          title: "Section 1",
          value: "<p>Value</p>",
          description: "Description",
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contents",
  })

  const onSubmit: SubmitHandler<FormCreateNumerologyProps> = async (data) => {
    const contents = data.contents.map((content, index) => ({
      ...content,
      blockOrder: index,
    }))
    data.contents = contents
    data.number = Number(data.number)
    NumerologyService.createNumerology(data, accessToken).then(() =>
      toastify({
        message: "Numerology created",
      }),
    )
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="number" value="Numerology" />
        </div>
        <TextInput
          id="number"
          placeholder="0"
          required
          type="number"
          {...register("number")}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea id="description" {...register("description")} />
      </div>

      <Accordion collapseAll className="bg-white">
        {fields.map((field, index) => (
          <Accordion.Panel key={field.id}>
            <CreateNumerologyContentItem
              key={field.id}
              control={control}
              field={field}
              index={index}
              register={register}
              remove={remove}
            />
          </Accordion.Panel>
        ))}
      </Accordion>

      <div className="flex justify-between">
        <button className="btn btn-primary flex gap-2" type="submit">
          <ArrowDownOnSquareIcon className="h-6 w-6 " /> Save
        </button>
        <button
          className="btn btn-add flex gap-2"
          type="button"
          onClick={() =>
            append({
              title: `Section ${fields.length + 1}`,
              value: "<p>Value</p>",
              description: "Description",
            })
          }
        >
          <PlusIcon className="h-6 w-6" />
          Add new section
        </button>
      </div>
    </form>
  )
}
