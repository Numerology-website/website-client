import { NumerologyContext } from "@/app/providers/admin/numerology/NumerologyProvider"
import { INumerologyContent } from "@/interfaces/numerology.service"
import { TrashIcon } from "@heroicons/react/24/solid"
import { Accordion } from "flowbite-react"
import dynamic from "next/dynamic"
import { useContext, useState } from "react"

const InlineEditor = dynamic(() => import("@/components/common/InlineEditor"), {
  ssr: false,
})

export const EditNumerologySectionItem = ({
  content,
}: {
  content: INumerologyContent
}) => {
  const [localContent, setLocalContent] = useState(content)
  const [isEditTitle, setIsEditTitle] = useState(false)
  const [isEditDescription, setIsEditDescription] = useState(false)
  const { updateContent, deleteContent } = useContext(NumerologyContext)
  return (
    <div className="rounded-lg bg-white">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>{localContent.title}</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between hover:bg-gray-100">
                {isEditTitle ? (
                  <input
                    className="w-full"
                    value={localContent.title}
                    onChange={(value) => {
                      setLocalContent({
                        ...localContent,
                        title: value.target.value,
                      })
                      updateContent({
                        ...localContent,
                        title: value.target.value,
                      })
                    }}
                    placeholder="Enter title"
                  />
                ) : (
                  <h1>{localContent.title}</h1>
                )}
                <span
                  className="pr-5 text-xs  hover:cursor-pointer"
                  onClick={() => setIsEditTitle(!isEditTitle)}
                >
                  {isEditTitle ? "Done" : "Edit"}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-300 hover:bg-gray-100">
                {isEditDescription ? (
                  <input
                    className="w-full text-black"
                    placeholder="Enter description"
                    value={localContent.description}
                    onChange={(e) => {
                      setLocalContent({
                        ...localContent,
                        description: e.target.value,
                      })
                      updateContent({
                        ...localContent,
                        description: e.target.value,
                      })
                    }}
                  />
                ) : (
                  <i>{localContent.description || "No description provided"}</i>
                )}

                <span
                  className="pr-5 text-xs text-black hover:cursor-pointer"
                  onClick={() => setIsEditDescription(!isEditDescription)}
                >
                  {isEditDescription ? "Done" : "Edit"}
                </span>
              </div>
              <InlineEditor
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
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteContent(localContent)}
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
