import { getAllHospitals, getHospitalById } from "@/lib/hospitals";
import SiteHeader from "@/components/SiteHeader";
import type { NavItem } from "@/components/NavBar";
import Button from "@/components/ui/Button";
import Comments from "@/components/Comments";
import { notFound } from "next/navigation";

const navItems: NavItem[] = [
  { label: "병원정보", href: "/hospitals" },
  { label: "내 주변", href: "/dashboard" },
  { label: "상세증상", href: "/detail" },
  { label: "소개", href: "/about" },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const hospitals = await getAllHospitals();
  return hospitals.map((hospital) => ({
    id: hospital.id,
  }));
}

export default async function HospitalDetailPage({ params }: PageProps) {
  const { id } = await params;
  const hospital = await getHospitalById(id);

  if (!hospital) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <SiteHeader navItems={navItems} />
            <main className="flex-grow pt-12 pb-16">
              <div className="mb-8">
                <Button href="/hospitals" variant="ghost" size="sm">
                  ← 목록으로 돌아가기
                </Button>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">
                      {hospital.구분}
                    </span>
                    <h1 className="text-3xl font-bold text-[#0d171b] dark:text-slate-50">
                      {hospital.의료기관명}
                    </h1>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                          진료과목
                        </h3>
                        <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                          {hospital.진료과목 || "정보 없음"}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                          전화번호
                        </h3>
                        <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                          {hospital.의료기관전화번호 || "정보 없음"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                          주소
                        </h3>
                        <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                          {hospital["의료기관주소(도로명)"] || "정보 없음"}
                        </p>
                      </div>
                      
                      {hospital.district && (
                        <div>
                          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                            지역구
                          </h3>
                          <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                            {hospital.district}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <Comments />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
