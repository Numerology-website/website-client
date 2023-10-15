import { NumerologyContext } from "@/app/providers/admin/numerology/NumerologyProvider"
import { INumerologyContent } from "@/interfaces/numerology.interface"
import { Accordion } from "flowbite-react"
import dynamic from "next/dynamic"
import { useContext, useState } from "react"

const Editor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})

export const EditNumerologySectionItem = ({
  content,
  title,
  index,
}: {
  content: INumerologyContent | undefined
  title: string
  index: number
}) => {
  const [localContent, setLocalContent] = useState(
    content || {
      title: "",
      description: "",
      value: "",
      blockOrder: index,
    },
  )
  const { updateContent } = useContext(NumerologyContext)
  return (
    <div className="rounded-lg bg-white">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>
            {index + 1}. {title}
          </Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              <div>
                <h2>Bổ sung ý nghĩa cho title</h2>
                <input
                  className="w-full rounded-md border border-gray-300 p-2"
                  type="text"
                  value={localContent.title || ""}
                  onChange={(e) => {
                    setLocalContent({
                      ...localContent,
                      title: e.target.value,
                    })
                    updateContent({
                      ...localContent,
                      title: e.target.value,
                    })
                  }}
                />
              </div>

              <div>
                <h2>Description</h2>
                <Editor
                  value={localContent.description || ""}
                  onChange={(value) => {
                    setLocalContent({
                      ...localContent,
                      description: value,
                    })
                    updateContent({
                      ...localContent,
                      description: value,
                    })
                  }}
                />
              </div>

              <div>
                <h2>Value</h2>
                <Editor
                  value={localContent.value}
                  onChange={(value) => {
                    setLocalContent({
                      ...localContent,
                      value,
                    })
                    updateContent({
                      ...localContent,
                      value,
                    })
                  }}
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
