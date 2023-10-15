"use client"
import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { INumerologyContent } from "@/interfaces/numerology.interface"
import { toastify } from "@/libs/toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"

const Editor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})
type EditContentForm = {
  title?: string
  description: string
  value: string
}

const schema = yup.object().shape({
  title: yup.string(),
  description: yup.string().required("Mô tả không được để trống"),
  value: yup.string().required("Nội dung không được để trống"),
})
export const EditContent = ({
  content,
  sectionNumber,
  numerologyId,
}: {
  content: INumerologyContent
  sectionNumber: number
  numerologyId: string
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }

  const router = useRouter()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContentForm>({
    defaultValues: {
      title: content.title || "",
      description: content.description || "",
      value: content.value || "",
    },
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<EditContentForm> = async (data) => {
    NumerologyService.updateNumerologyContentById(
      numerologyId,
      {
        ...data,
        blockOrder: sectionNumber,
      },
      accessToken,
    )
      .then(() => {
        toastify({ message: "Cập nhật thành công", type: "success" })
        router.back()
      })
      .catch((err) => {
        toastify({ message: err, type: "error" })
      })
  }
  return (
    <section>
      <h3>Edit Content {sectionNumber}:</h3>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nội dung vip trên title
          </label>
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mô tả
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Editor value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nội dung
          </label>
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <Editor value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.value && (
            <p className="text-sm text-red-500">{errors.value.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </section>
  )
}
