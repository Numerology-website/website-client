import Link from "next/link"
import { useState } from "react"
const MenuItemHeader = (nameItem: string, menuItems: string[]) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <li className="relative m-0 flex w-[100%] flex-row flex-wrap border-b border-white p-0">
      <div className="flex w-[100%] justify-between">
        <Link className="p-[13px_0] text-base font-semibold" href="">
          {nameItem}
        </Link>
        <button
          className={
            menuItems.length === 0
              ? `hidden`
              : `m-[0_5px_0_0] mb-0 h-auto w-[30px] p-0 `
          }
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          )}
        </button>
      </div>
      {showMenu ? (
        <ul className={"m-0 list-outside pb-3 text-sm"}>
          {menuItems.map((name, index: number) => {
            return (
              <li className="mb-3" key={`${index + 1}`}>
                <Link className="py-[5px] pl-5" href={``}>
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <></>
      )}
    </li>
  )
}

export default MenuItemHeader
