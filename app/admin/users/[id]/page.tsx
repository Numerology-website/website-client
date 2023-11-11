import { AdminKidNumerologyRecordService } from "@/app/services/numerology-records/kid-numerology-records.service"
import { AdminNumerologyRecordService } from "@/app/services/numerology-records/numerology-records.service"
import { AdminUserService } from "@/app/services/users/user.service"
import { BackButton } from "@/components/admin/layout/common/BackButton"
import { ButtonDeactivateUser } from "@/components/admin/users/ButtonDeactivateUser"
import { FormEditUser } from "@/components/admin/users/FormEditUser"
import { TableNumerologyRecords } from "@/components/admin/users/TableNumerologyRecords"

export default async function EditUser({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { id } = params
  const [user, numerologyRecords, kidNumerologyRecord] = await Promise.all([
    AdminUserService.getUser(id),
    AdminNumerologyRecordService.getAllRecords({
      user_id: id,
    }),
    AdminKidNumerologyRecordService.getAllRecords({
      user_id: id,
    }),
  ])
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <BackButton href="/admin/users" />
        <h1>Edit User</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <h2>{user.full_name}</h2>
          {!!user.deleted_at && (
            <span className="rounded-md bg-red-500 px-1 text-white">
              Blocked
            </span>
          )}
          {!user.deleted_at && (
            <span className="rounded-md bg-emerald-500 px-1 text-white">
              Active
            </span>
          )}
        </div>
        <ButtonDeactivateUser user={user} />
      </div>
      <p className="text-sm italic">SDT: {user.phone_number}</p>
      <div className="mt-4">
        <FormEditUser user={user} />
      </div>
      <div className="mt-4">
        <TableNumerologyRecords records={numerologyRecords.items} />
      </div>
      <div className="mt-4">
        <TableNumerologyRecords
          isKidRecords
          records={kidNumerologyRecord.items}
        />
      </div>
    </>
  )
}
