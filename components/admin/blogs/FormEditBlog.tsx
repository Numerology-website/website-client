"use client"
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react"
import { FC, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useSession } from "next-auth/react"
import { toastify } from "@/libs/toastify"
import { EBlogStatus, EBlogType, TBlog } from "@/interfaces/blogs.interface"
import { AdminBlogService } from "@/app/services/blogs/admin.blogs.service"
import Editor from "@/components/common/Editor"

export type FormEditBlogProps = {
  title: string
  slug: string
  content: string
  thumbnail_img_link?: string
  description: string
  status?: EBlogStatus
  type: EBlogType
  is_show_on_navbar?: boolean
  category?: EBlogType[]
  is_top?: boolean
  is_highlight?: boolean
}

const schema = yup.object().shape({
  title: yup.string().required("Vui lòng nhập tiêu đề cho blog"),
  slug: yup.string().required("Vui lòng nhập slug"),
  content: yup.string().required("Vui lòng nhập nội dung blog"),
  description: yup.string().required("Vui lòng nhập description"),
  type: yup
    .mixed<EBlogType>()
    .oneOf(Object.values(EBlogType))
    .required("Vui lòng chọn thể loại"),

  // title: yup.string().required("Vui lòng nhập tiêu đề cho blog"),
  // slug: yup.string().required("Vui lòng nhập slug"),
  // content: yup.string().required("Vui lòng nhập nội dung blog"),
  // description: yup.string().required("Vui lòng nhập description"),
  // status: yup
  //   .mixed<EBlogStatus>()
  //   .oneOf(Object.values(EBlogStatus))
  //   .required("Vui lòng chọn thể loại"),
  // type: yup
  //   .mixed<EBlogType>()
  //   .oneOf(Object.values(EBlogType))
  //   .required("Vui lòng chọn thể loại"),
  // is_show_on_navbar: yup
  //   .bool()
  //   .oneOf([true, false], "You must accept the terms and conditions"),
  // category: yup.array(yup.string().required()).min(1),
  // is_top: yup
  //   .bool()
  //   .oneOf([true, false], "You must accept the terms and conditions"),
  // created_at: yup.string(),
  // updated_at: yup.string(),
  // deleted_at: yup.string(),
})

interface IFormEditBlog {
  blog: TBlog
}
export const FormEditBlog: FC<IFormEditBlog> = ({ blog }) => {
  const CategoryLabels: { [key in EBlogType]: string } = {
    [EBlogType.NUMEROLOGY]: "Thần số học",
    [EBlogType.DISC]: "DISC",
    [EBlogType.KNOWLEDGE]: "Kiến thức",
    [EBlogType.CHILD]: "Trẻ em",
    [EBlogType.HOROSCOPE]: "Lá số tử vi",
    [EBlogType.LOVE]: "Bói tình yêu",
    [EBlogType.OTHER]: "Khác",
    [EBlogType.QUESTION]: "Câu hỏi thường gặp",
    [EBlogType.COMPATIBLE]: "Tương hợp",
  }
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormEditBlogProps>({
    defaultValues: {
      ...blog,
    },
    resolver: yupResolver(schema),
  })

  const [selectedCategories, setSelectedCategories] = useState<EBlogType[]>(
    blog.category,
  )

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target

    const updatedSelectedCategories = checked
      ? [...selectedCategories, value as EBlogType]
      : selectedCategories.filter((category) => category !== value)

    setSelectedCategories(updatedSelectedCategories)
    setValue("category", updatedSelectedCategories)
  }

  const onSubmit: SubmitHandler<FormEditBlogProps> = (data) => {
    AdminBlogService.updateBlog(blog.id, data, accessToken)
      .then((res) => {
        toastify({
          type: "success",
          message: ` ${res.message} `,
        })
      })
      .catch((err) => {
        toastify({
          type: "error",
          message: JSON.stringify(err),
        })
      })
  }
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | undefined>(blog.thumbnail_img_link )
  const handleImageUpload = (image: File | null) => {
    if (image) {
      try {
        AdminBlogService.uploadThumbnail(image, accessToken)
          .then((data) => {
            const imageUrl = data.url
            setUploadedImageUrl(imageUrl)
            setValue("thumbnail_img_link", imageUrl)
          })
          .catch((error) => {
            console.error("Image upload failed:", error)
          })
      } catch (error) {
        console.error("Image upload failed:", error)
      }
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="title" value="Title" />
        <TextInput
          id="title"
          placeholder="Title"
          {...register("title")}
          helperText={errors.title?.message}
        />
      </div>
      <div>
        <Label htmlFor="slug" value="Slug" />
        <TextInput
          id="slug"
          placeholder="Slug"
          {...register("slug")}
          helperText={errors.slug?.message}
        />
      </div>
      <div className="flex flex-col">
        <Label
          className="mb-2"
          htmlFor="thumbnail_img_link"
          value="Ảnh"
        />
        <input
          name="upload"
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files?.item(0) || null)}
        />
     
      {uploadedImageUrl && <img className="w-1/6 h-auto mt-2" src={uploadedImageUrl} alt="Preview" />}
        {errors.thumbnail_img_link && (
          <p className="text-sm text-red-500">
            {errors.thumbnail_img_link.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="description" value="Mô tả" />
        <Textarea
          id="description"
          placeholder="Mô tả"
          {...register("description")}
          rows={4}
          helperText={errors.description?.message}
        />
      </div>
      <div>
        <Label htmlFor="content" value="Nội dung" />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Editor value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.content && (
          <p className="text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="mb-2 w-1/3">
          <Label value="Trạng thái" />
          <Select
            id="status"
            placeholder="Chọn trạng thái ..."
            {...register("status")}
            helperText={errors.type?.message}
          >
            <option value={EBlogStatus.DRAFT}>Bản nháp</option>
            <option value={EBlogStatus.PUBLISH}>Công khai</option>
            <option value={EBlogStatus.ARCHIVE}>Lưu trữ</option>
          </Select>
        </div>

        <div className="mb-2 w-1/3">
          <Label value="Kiểu" />
          <Select
            id="type"
            placeholder="Chọn kiểu ..."
            {...register("type")}
            helperText={errors.type?.message}
          >
            <option value={EBlogType.NUMEROLOGY}>Thần số học</option>
            <option value={EBlogType.DISC}>DISC</option>
            <option value={EBlogType.KNOWLEDGE}>Kiến thức</option>
            <option value={EBlogType.CHILD}>Trẻ em</option>
            <option value={EBlogType.HOROSCOPE}>Lá số tử vi</option>
            <option value={EBlogType.LOVE}>Bói tình yêu</option>
            <option value={EBlogType.OTHER}>Khác</option>
          </Select>
        </div>
        <div className="mb-2 w-1/3">
          <Label value="Thể loại" />
          {Object.values(EBlogType).map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                name={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCheckboxChange}
              />{" "}
              <label>{CategoryLabels[category]}</label>
            </div>
          ))}
          <input
            type="hidden"
            {...register("category")}
            value={selectedCategories}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="mb-2 w-1/3">
          <Label value="Hiển thi lên thanh điều hướng" />{" "}
          <Controller
            control={control}
            name="is_show_on_navbar"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <label>
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(true)}
                    checked={value === true}
                    ref={ref}
                  />{" "}
                  Có
                </label>{" "}
                <label>
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(false)}
                    checked={value === false}
                    ref={ref}
                  />{" "}
                  Không
                </label>
              </>
            )}
          />
        </div>

        <div className="mb-2 w-1/3">
          <Label value="Hiển thi lên đầu" />{" "}
          <Controller
            control={control}
            name="is_top"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <label>
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(true)}
                    checked={value === true}
                    ref={ref}
                  />{" "}
                  Có
                </label>{" "}
                <label>
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(false)}
                    checked={value === false}
                    ref={ref}
                  />{" "}
                  Không
                </label>
              </>
            )}
          />
        </div>
        <div className="mb-2 w-1/3">
          <Label value="Nhấn mạnh" />{" "}
          <Controller
            control={control}
            name="is_highlight"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <label>
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(true)}
                    checked={value === true}
                    ref={ref}
                  />{" "}
                  Có
                </label>{" "}
                <label>
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(false)}
                    checked={value === false}
                    ref={ref}
                  />{" "}
                  Không
                </label>
              </>
            )}
          />
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}
