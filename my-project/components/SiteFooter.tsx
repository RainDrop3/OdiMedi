import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50">OdiMedi</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              지금, 나에게 필요한 우리 동네 병원 찾기 서비스
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/about" className="hover:text-primary transition-colors">
              서비스 소개
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} OdiMedi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
