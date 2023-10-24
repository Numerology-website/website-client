import LookupHistory from "@/components/account/history/LookupHistory"
export default function History() {
  const lookupHistory = [
    {
      title: "Đỗ Nam Trung - 1/1/1919",
      created: " 2023-10-20 21:15:44",
      lookupType: "Free",
    },
    {
      title: "Đỗ Nam Trung - 1/1/1919",
      created: " 2023-10-20 21:15:44",
      lookupType: "Freedom",
    },
  ]
  return (
    <>
      <LookupHistory documents={lookupHistory} />
    </>
  )
}
