interface ReaderResultPageProps {
  params: {
    id: string
  }
}
export default async function ReaderResultPage({
  params,
}: ReaderResultPageProps) {
  return <>{params.id}</>
}
