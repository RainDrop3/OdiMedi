'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";

const symptomData = [
  { department: "내과", symptoms: ["복통 (배 아픔)", "속쓰림", "소화불량", "설사", "변비", "구토 (토함)", "감기", "고열 (열)", "기침", "가래", "호흡곤란 (숨참)", "가슴답답함", "두근거림", "만성피로", "어지러움 (빈혈)"] },
  { department: "이비인후과", symptoms: ["콧물", "코막힘", "재채기", "비염", "인후통 (목 아픔)", "이물감 (목)", "중이염 (귀 아픔)", "이명 (귀 울림)", "난청 (안 들림)", "어지럼증 (빙빙 돔)", "코골이"] },
  { department: "정형외과", symptoms: ["요통 (허리 통증)", "목통증 (뻐근함)", "관절통 (무릎/어깨)", "손목통증", "발목통증", "염좌 (삐끗함)", "골절 (부러짐)", "근육통", "손저림"] },
  { department: "신경과 / 신경외과", symptoms: ["두통 (편두통)", "손발저림", "감각둔화", "안면마비", "떨림 (수전증)", "디스크 (허리/목)", "기억력저하 (치매)"] },
  { department: "피부과", symptoms: ["발진 (두드러기)", "가려움증", "여드름", "점/사마귀", "탈모", "무좀", "화상"] },
  { department: "안과", symptoms: ["안구통증 (눈 아픔)", "충혈", "눈곱", "눈다래끼", "시력저하", "안구건조증 (뻑뻑함)"] },
  { department: "치과", symptoms: ["치통 (이 아픔)", "이시림", "잇몸출혈", "잇몸부종", "사랑니", "입냄새", "턱관절통증"] },
  { department: "정신건강의학과", symptoms: ["불면증", "우울감", "무기력증", "공황장애 (불안)", "스트레스", "집중력저하"] },
  { department: "비뇨의학과", symptoms: ["배뇨통 (소변 아픔)", "빈뇨 (자주 마려움)", "혈뇨 (피 섞임)", "옆구리통증 (결석)", "성기능장애"] },
  { department: "산부인과", symptoms: ["생리통", "생리불순", "질분비물", "임신상담", "갱년기증상"] },
  { department: "소아청소년과", symptoms: ["소아발열", "소아감기", "예방접종", "성장발달"] },
  { department: "외과", symptoms: ["열상 (찢어짐)", "화상", "치질 (항문 통증)", "혈변", "혹/멍울 (지방종)", "유방통증/멍울"] },
  { department: "마취통증의학과", symptoms: ["만성통증", "신경통 (대상포진)", "수술후통증"] },
  { department: "심장혈관흉부외과", symptoms: ["하지정맥류 (핏줄)", "다한증 (손발 땀)"] },
  { department: "가정의학과", symptoms: ["비만 (다이어트)", "만성피로", "영양수액"] },
  { department: "재활의학과", symptoms: ["수술후재활", "자세교정", "거북목/척추측만"] },
  { department: "한의원", symptoms: ["발목염좌 (침)", "소화불량 (체함)", "기력저하 (보약)", "교통사고후유증"] },
];

export default function MainContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleToggleSymptom = (symptom: string) => {
    setShowResult(false);
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    );
  };

  const handleNext = () => {
    if (currentPage < symptomData.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const getRecommendations = () => {
    return symptomData
      .map(data => ({
        department: data.department,
        count: data.symptoms.filter(s => selectedSymptoms.includes(s)).length
      }))
      .filter(item => item.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  };

  const recommendations = getRecommendations();
  const currentData = symptomData[currentPage];

  return (
    <main id="search" className="flex-grow pt-12 pb-16">
      <h1 className="text-[#0d171b] dark:text-slate-50 tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-6">
        현재 증상을 입력하세요
      </h1>
      
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-full max-w-3xl px-4 py-3">
          
          <div className="w-full p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#0d171b] dark:text-slate-50">
                {currentPage + 1}. {currentData.department}
              </h3>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {currentPage + 1} / {symptomData.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 min-h-[200px] content-start">
              {currentData.symptoms.map((symptom) => (
                <label key={symptom} className="flex items-start gap-x-3 py-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox"
                      className="peer h-5 w-5 rounded border-slate-300 dark:border-slate-600 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer"
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => handleToggleSymptom(symptom)}
                    />
                  </div>
                  <p className="text-base font-normal leading-tight text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors pt-0.5">
                    {symptom}
                  </p>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
              <Button 
                onClick={handlePrev} 
                variant="ghost" 
                disabled={currentPage === 0}
                className={currentPage === 0 ? "invisible" : ""}
              >
                <span className="material-symbols-outlined mr-1">arrow_back</span>
                이전
              </Button>
              
              <div className="flex gap-2">
                {selectedSymptoms.length > 0 && (
                  <Button onClick={() => setShowResult(true)} variant="primary">
                    결과 보기 ({selectedSymptoms.length})
                  </Button>
                )}
              </div>

              <Button 
                onClick={handleNext} 
                variant="ghost"
                disabled={currentPage === symptomData.length - 1}
                className={currentPage === symptomData.length - 1 ? "invisible" : ""}
              >
                다음
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Button>
            </div>
          </div>

          {showResult && recommendations.length > 0 && (
            <div className="mt-8 w-full p-6 bg-primary/10 rounded-xl border border-primary/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-xl font-bold text-[#0d171b] dark:text-slate-50 mb-6 leading-relaxed">
                추천 분과: <br className="sm:hidden" /> 
                <span className="text-primary text-2xl mx-1.5">{recommendations.map(r => r.department).join(', ')}</span> 
                
              </p>
              <Button href={`/hospitals?department=${recommendations[0].department}`} variant="primary" size="lg">
                병원 찾아보기
              </Button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
