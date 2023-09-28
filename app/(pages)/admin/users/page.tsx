import { TableUsers } from "@/components/admin/users/TableUsers";

export default async function AdminUsers() {
  return (
    <section>
      <h1>List Users</h1>
      <TableUsers />
    </section>
  );
}
