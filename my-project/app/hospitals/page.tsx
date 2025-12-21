import SiteHeader from "@/components/SiteHeader";
import type { NavItem } from "@/components/NavBar";
import HospitalSearch from "@/components/HospitalSearch";
import { getAllHospitals } from "@/lib/hospitals";

export const dynamic = 'force-static';

const navItems: NavItem[] = [
  { label: "병원정보", href: "/hospitals" },
  { label: "내 주변", href: "/dashboard" },
  { label: "상세증상", href: "/detail" },
  { label: "소개", href: "/about" },
];

export default async function HospitalsPage() {
  const hospitals = await getAllHospitals();

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <SiteHeader navItems={navItems} />
            <main className="flex-grow pt-12 pb-16">
              <h1 className="text-3xl font-bold mb-8 text-center text-[#0d171b] dark:text-slate-50">
                병원 찾기
              </h1>
              <HospitalSearch hospitals={hospitals} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
