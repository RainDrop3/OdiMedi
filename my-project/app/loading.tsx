export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 text-slate-700" role="status" aria-live="polite">
        <span className="inline-flex h-14 w-14 animate-spin items-center justify-center rounded-full border-4 border-blue-100 border-t-blue-600" />
        <div className="text-center">
          <p className="text-lg font-semibold">페이지를 준비 중입니다.</p>
          <p className="text-sm text-slate-500">잠시만 기다려 주세요.</p>
        </div>
      </div>
    </div>
  );
}
