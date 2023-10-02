import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
};

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-galaxy-pattern flex h-screen items-center justify-center bg-cover bg-no-repeat text-white">
      {children}
    </section>
  );
}
