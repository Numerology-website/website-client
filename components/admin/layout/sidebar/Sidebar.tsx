import { SidebarList } from "./SidebarList";

export const Sidebar = () => {
  return (
    <aside className="fixed z-20 h-full w-64 bg-white shadow-xl">
      <div className="flex h-16 items-center justify-center">
        <h1>Logo</h1>
      </div>
      <SidebarList />
    </aside>
  );
};
