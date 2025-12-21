'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useRouter, useSearchParams } from "next/navigation";

interface Hospital {
  id: string;
  순번: number;
  구분: string;
  의료기관명: string;
  "의료기관주소(도로명)": string;
  의료기관전화번호: string;
  진료과목: string;
  district?: string;
}

interface HospitalSearchProps {
  hospitals: Hospital[];
}

const districts = [
  "강서구", "금정구", "기장군", "남구", "동구", "동래구", 
  "부산진구", "북구", "사상구", "사하구", "서구", "수영구", 
  "연제구", "영도구", "중구", "해운대구"
];

export default function HospitalSearch({ hospitals }: HospitalSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const departmentParam = searchParams.get("department");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Hospital[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Filtered results for the cards
  const filteredResults = useMemo(() => {
    if (!searchQuery && !selectedDistrict && !departmentParam) return [];

    return hospitals
      .filter(h => {
        const matchesQuery = searchQuery 
          ? h.의료기관명 && h.의료기관명.includes(searchQuery)
          : true;
        const matchesDistrict = selectedDistrict 
          ? h.district === selectedDistrict
          : true;
        const matchesDepartment = departmentParam
          ? h.진료과목 && h.진료과목.includes(departmentParam)
          : true;
        return matchesQuery && matchesDistrict && matchesDepartment;
      })
      .sort((a, b) => {
        const aUnknown = !a.진료과목 || a.진료과목 === "unknown";
        const bUnknown = !b.진료과목 || b.진료과목 === "unknown";
        if (aUnknown && !bUnknown) return 1;
        if (!aUnknown && bUnknown) return -1;
        return 0;
      })
      .slice(0, 5);
  }, [searchQuery, selectedDistrict, departmentParam, hospitals]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = hospitals.filter(h => 
        h.의료기관명 && h.의료기관명.includes(searchQuery) && 
        (!selectedDistrict || h.district === selectedDistrict)
      ).slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, selectedDistrict, hospitals]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSuggestionClick = (hospitalId: string) => {
    router.push(`/hospitals/${hospitalId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0].id);
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Search Bar */}
      <div className="relative" ref={wrapperRef}>
        <Input 
          placeholder="병원명을 검색하세요" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            if (searchQuery.trim().length > 0) setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          className="w-full h-14 text-lg pl-12 shadow-sm border-2 focus-visible:border-primary"
        />
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl">
          search
        </span>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <ul>
              {suggestions.map((hospital, index) => (
                <li 
                  key={`${hospital.id}-${index}`}
                  onClick={() => handleSuggestionClick(hospital.id)}
                  className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer flex items-center justify-between border-b border-slate-100 dark:border-slate-700/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">local_hospital</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {hospital.의료기관명.split(searchQuery).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="text-primary font-bold">{searchQuery}</span>}
                        </span>
                      ))}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                    {hospital.district}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* District Filter */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50">지역구 선택</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedDistrict === null ? "primary" : "ghost"}
            onClick={() => setSelectedDistrict(null)}
            size="sm"
            className={`rounded-full ${selectedDistrict === null ? "" : "bg-slate-100 dark:bg-slate-800"}`}
          >
            전체
          </Button>
          {districts.map((district) => (
            <Button
              key={district}
              variant={selectedDistrict === district ? "primary" : "ghost"}
              onClick={() => setSelectedDistrict(district)}
              size="sm"
              className={`rounded-full ${selectedDistrict === district ? "" : "bg-slate-100 dark:bg-slate-800"}`}
            >
              {district}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Results Cards */}
      <div className="space-y-4 mt-12">
        {filteredResults.map((hospital, index) => (
          <Card 
            key={`${hospital.id}-${index}`} 
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer bg-slate-100 dark:bg-slate-800 border-none"
            padding="md"
          >
            <div 
              className="flex-1 cursor-pointer"
              onClick={() => router.push(`/hospitals/${hospital.id}`)}
            >
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 hover:text-primary transition-colors">
                  {hospital.의료기관명}
                </h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {hospital.district}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">medical_services</span>
                  <span>{hospital.진료과목 || "진료과목 정보 없음"}</span>
                </div>
                {hospital.의료기관전화번호 && (
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>{hospital.의료기관전화번호}</span>
                  </div>
                )}
              </div>
            </div>
            <Button 
              onClick={() => router.push(`/hospitals/${hospital.id}`)}
              variant="outline" 
              size="sm"
            >
              상세보기
            </Button>
          </Card>
        ))}
        
        {filteredResults.length === 0 && (searchQuery || selectedDistrict || departmentParam) && (
          <div className="mt-8 p-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400">
              검색 결과가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
