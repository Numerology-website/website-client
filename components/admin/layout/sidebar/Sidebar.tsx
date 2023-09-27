import { SidebarList } from "./SidebarList";

export const Sidebar = () => {
  return (
    <aside className="fixed z-10 h-full w-64 bg-slate-300">
      <h1 className="h-16">Logo</h1>
      <SidebarList />
    </aside>
  );
};
