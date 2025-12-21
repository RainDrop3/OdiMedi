export default function Loading() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center text-slate-700">
			<span className="inline-flex h-14 w-14 animate-spin items-center justify-center rounded-full border-4 border-blue-100 border-t-blue-600" aria-label="데이터 로딩 중" />
			<div>
				<p className="text-lg font-semibold">데이터를 불러오는 중입니다.</p>
				<p className="text-sm text-slate-500">잠시만 기다려 주세요.</p>
			</div>
		</div>
	);
}
