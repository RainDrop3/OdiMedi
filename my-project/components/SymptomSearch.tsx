'use client';

import { useState, useEffect } from "react";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { symptomsList, SymptomDetail } from "@/lib/symptoms";

export default function SymptomSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSymptoms, setFilteredSymptoms] = useState<SymptomDetail[]>(symptomsList);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSymptoms(symptomsList);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = symptomsList.filter(s => 
        s.name.toLowerCase().includes(lowerQuery) || 
        s.department.toLowerCase().includes(lowerQuery) ||
        s.description.toLowerCase().includes(lowerQuery)
      );
      setFilteredSymptoms(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="relative">
        <Input 
          placeholder="증상을 검색하세요 (예: 두통, 감기)" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 text-lg pl-12 shadow-sm border-2 focus-visible:border-primary"
        />
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl">
          search
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSymptoms.map((symptom) => {
          const symptomIndex = symptomsList.findIndex((item) => item.id === symptom.id);

          return (
          <Card 
            key={symptom.id}
            className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50 group bg-slate-100 dark:bg-slate-800 border-none"
            onClick={() => router.push(`/detail/${symptomIndex}`)}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                  {symptom.name}
                </h3>
                <span className="text-xs font-medium px-2 py-1 rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                  {symptom.department}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                {symptom.description}
              </p>
            </div>
          </Card>
          );
        })}
      </div>
      
      {filteredSymptoms.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
