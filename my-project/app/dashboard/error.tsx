'use client';

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
			<div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-4 text-red-700">
				<p className="text-sm font-medium">문제가 발생했습니다</p>
			</div>
			<div>
				<h2 className="text-2xl font-semibold text-slate-900">대시보드를 불러오지 못했습니다.</h2>
				<p className="mt-2 text-sm text-slate-500">
					네트워크 연결, 잘못된 접근 또는 일시적인 오류일 수 있습니다.
				</p>
				{error?.message && (
					<p className="mt-2 text-xs text-slate-400" aria-live="polite">
						오류 정보: {error.message}
					</p>
				)}
			</div>
			<div className="flex flex-wrap justify-center gap-3">
				<button
					type="button"
					onClick={reset}
					className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
				>
					다시 시도하기
				</button>
				<a
					href="/index"
					className="rounded-lg border border-slate-200 px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
				>
					메인으로 이동
				</a>
			</div>
		</div>
	);
}
