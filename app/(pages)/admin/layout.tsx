import { Navbar } from "@/components/admin/layout/navbar/Navbar";
import { Sidebar } from "@/components/admin/layout/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full pl-64">
        <Navbar />
        <section className="h-full pt-16">{children}</section>
      </div>
    </div>
  );
}
