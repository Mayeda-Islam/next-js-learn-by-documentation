// import SideNav from "@/app/ui/dashboard/sidenav";

import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />{" "}
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

///dashboard er vitor layout er moddhe baki sob component er page gula bose.
//overall dashboard er vitor layout.jsx ekta layout hisebe kaj kore
//jar karone dashboard er vitore customer ,invoice folder er file gula layout er vitorey thake
