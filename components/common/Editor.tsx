import Editor from "ckeditor5-custom-classic/build/ckeditor"
import { CKEditor } from "@ckeditor/ckeditor5-react"

interface IInlineEditorProps {
  value: string
  onChange: (value: string) => void
}
const ClassicEditor = ({ value, onChange }: IInlineEditorProps) => {
  return (
    <CKEditor
      // @ts-ignore
      editor={Editor}
      data={value}
      onChange={(event, editor) => {
        // @ts-ignore
        const data = editor.getData()
        onChange(data)
      }}
    />
  )
}

export default ClassicEditor
