import { BackButton } from "@/components/admin/layout/common/BackButton"
import { FormCreateNumerology } from "@/components/admin/numerology/FormCreateNumerology"

export default function CreateNumerology() {
  return (
    <section className="mb-20">
      <div className="mb-5 flex items-center gap-5">
        <BackButton href="/admin/numerology" />
        <h1>Create Numerology</h1>
      </div>
      <FormCreateNumerology />
    </section>
  )
}
