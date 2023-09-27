import { AccountDropDown } from "@/components/admin/layout/navbar/AccountDropDown";

export const Navbar = () => {
  return (
    <nav className="fixed z-10 flex h-16 w-full items-center bg-white shadow-sm">
      <div className="mx-10 flex w-full justify-end">
        <AccountDropDown />
      </div>
    </nav>
  );
};
