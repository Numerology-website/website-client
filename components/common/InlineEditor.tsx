import InlineEditorCK from "@ckeditor/ckeditor5-build-inline"
import { CKEditor } from "@ckeditor/ckeditor5-react"

interface IInlineEditorProps {
  value: string
  onChange: (value: string) => void
}
const InlineEditor = ({ value, onChange }: IInlineEditorProps) => {
  return (
    <CKEditor
      editor={InlineEditorCK}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData()
        onChange(data)
      }}
    />
  )
}

export default InlineEditor
