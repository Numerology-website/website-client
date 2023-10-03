import { INumerologyContent } from "@/interfaces/numerology.service"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Accordion } from "flowbite-react"

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
                    onChange={(value) =>
                      setLocalContent({
                        ...localContent,
                        title: value.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setLocalContent({
                        ...localContent,
                        description: e.target.value,
                      })
                    }
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
                onChange={(value) =>
                  setLocalContent({
                    ...localContent,
                    value,
                  })
                }
              />
              <div className="text-right">
                <button
                  className="rounded-full border border-solid border-gray-400 bg-cyan-300 px-4 py-2 text-xs text-black hover:bg-white hover:text-[#3F4254]"
                  onClick={() => {
                    console.log(localContent)
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
