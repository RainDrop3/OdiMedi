import { getSymptomById, symptomsList } from "@/lib/symptoms";
import SiteHeader from "@/components/SiteHeader";
import type { NavItem } from "@/components/NavBar";
import Button from "@/components/ui/Button";
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
  return symptomsList.map((symptom) => ({
    id: encodeURIComponent(symptom.id),
  }));
}
//asdfasdf
export default async function SymptomDetailPage({ params }: PageProps) {
  const { id } = await params;
  const symptom = getSymptomById(id);

  if (!symptom) {
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
                <Button href="/detail" variant="ghost" size="sm">
                  ← 목록으로 돌아가기
                </Button>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
                <div className="flex flex-col gap-8">
                  <div className="border-b border-slate-100 dark:border-slate-700 pb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                      {symptom.department}
                    </span>
                    <h1 className="text-3xl font-bold text-[#0d171b] dark:text-slate-50">
                      {symptom.name}
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">info</span>
                          구체적인 설명
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {symptom.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">group</span>
                          주 발병 대상
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {symptom.targetAudience}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">calendar_month</span>
                          주 발병 시기
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {symptom.peakSeason}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">medical_services</span>
                          관련 질환
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {symptom.relatedDiseases.map((disease, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                            >
                              {disease}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 flex justify-center">
                    <Button 
                      href={`/hospitals?department=${symptom.department}`} 
                      variant="primary" 
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {symptom.department} 병원 찾기
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
