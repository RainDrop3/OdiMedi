import SiteHeader from "@/components/SiteHeader";
import type { NavItem } from "@/components/NavBar";
import MainContent from "@/components/MainContent";

const navItems: NavItem[] = [
  { label: "병원정보", href: "/hospitals" },
  { label: "내 주변", href: "/dashboard" },
  { label: "상세증상", href: "/detail" },
  { label: "소개", href: "/about" },
];

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <SiteHeader navItems={navItems} />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}
