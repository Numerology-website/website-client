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
      <Navbar />
      <div className="w-full bg-slate-200 pl-64 pt-16">
        <section className="mx-10 mt-5 h-full">{children}</section>
      </div>
    </div>
  );
}
