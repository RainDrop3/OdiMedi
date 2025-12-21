import SiteHeader from "@/components/SiteHeader";
import type { NavItem } from "@/components/NavBar";

const navItems: NavItem[] = [
  { label: "병원정보", href: "/hospitals" },
  { label: "내 주변", href: "/dashboard" },
  { label: "상세증상", href: "/detail" },
  { label: "소개", href: "/about" },
];

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <SiteHeader navItems={navItems} />
            <main className="flex-grow pt-12 pb-16 space-y-8">
              <section>
                <h1 className="text-3xl font-bold mb-4 text-[#0d171b] dark:text-slate-50">OdiMedi</h1>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  OdiMedi는 부산 시민의 신속한 치료를 위한 병원 찾기 서비스입니다.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-3 text-[#0d171b] dark:text-slate-50">서비스 소개</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  어디가 아픈지 입력만 하세요. 병원은 OdiMedi가 찾아드립니다. 
                  갑작스러운 질병으로 막막할 때, 복잡한 검색 없이 사용자의 증상과 진료과목에 딱 맞는 내 주변 최적의 병원을 신속하게 연결해 드립니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-[#0d171b] dark:text-slate-50">연락처</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  문의사항이 있으시면 아래 연락처로 연락 바랍니다.
                </p>
                <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-400">
                  <li>이메일: kangmgalsrb@pusan.ac.kr</li>
                  <li>전화번호: 010-1234-5678</li>
                </ul>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
