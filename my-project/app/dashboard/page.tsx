"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import SiteHeader from "@/components/SiteHeader";
import type { NavItem } from "@/components/NavBar";

const navItems: NavItem[] = [
  { label: "병원정보", href: "/hospitals" },
  { label: "내 주변", href: "/dashboard" },
  { label: "상세증상", href: "/detail" },
  { label: "소개", href: "/about" },
];

const REGIONS = [
  { name: "강서구", file: "부산광역시_강서구_의료기관현황_진료과목추가.json" },
  { name: "금정구", file: "부산광역시_금정구_의료기관현황_진료과목추가.json" },
  { name: "기장군", file: "부산광역시_기장군_의료기관현황_진료과목추가.json" },
  { name: "남구", file: "부산광역시_남구_의료기관현황_진료과목추가.json" },
  { name: "동구", file: "부산광역시_동구_의료기관_진료과목추가.json" },
  { name: "동래구", file: "부산광역시_동래구_의료기관현황_진료과목추가.json" },
  { name: "부산진구", file: "부산진구_의료기관현황_진료과목추가.json" },
  { name: "북구", file: "부산광역시_북구_의료기관현황_진료과목추가.json" },
  { name: "사상구", file: "부산광역시_사상구_의료기관현황_진료과목추가.json" },
  { name: "사하구", file: "부산광역시_사하구_의료기관현황_진료과목추가.json" },
  { name: "서구", file: "부산광역시_서구_의료기관현황_진료과목추가.json" },
  { name: "수영구", file: "수영구_의료기관현황_진료과목추가.json" },
  { name: "연제구", file: "부산광역시_연제구_의료기관현황_진료과목추가.json" },
  { name: "영도구", file: "부산광역시_영도구_의료기관현황_진료과목추가.json" },
  { name: "중구", file: "부산광역시_중구_의료기관현황_진료과목추가.json" },
  { name: "해운대구", file: "부산광역시_해운대구_의료기관현황_진료과목추가.json" },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#ffc0cb",
  "#f4a460",
  "#d8bfd8",
  "#40e0d0",
  "#ee82ee",
];

type HospitalData = {
  순번: number;
  구분: string;
  의료기관명: string;
  "의료기관주소(도로명)": string;
  의료기관전화번호: string;
  진료과목: string;
};

type ChartData = {
  name: string;
  value: number;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 p-3 rounded-lg shadow-md border border-slate-100">
        <p className="font-bold mb-1 text-slate-900">{`${label}`}</p>
        <p className="text-primary">{`${payload[0].value}개`}</p>
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        const response = await fetch(`${basePath}/data/${selectedRegion.file}`);
        const data: HospitalData[] = await response.json();

        const subjectCounts: { [key: string]: number } = {};
        data.forEach((item) => {
          let subject = item.진료과목;
          if (subject === 'unknown') {
            subject = '기타';
          }
          if (subject) {
            subjectCounts[subject] = (subjectCounts[subject] || 0) + 1;
          }
        });

        const processedData = Object.entries(subjectCounts)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value);

        setChartData(processedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedRegion]);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
            <SiteHeader navItems={navItems} />
            
            <main className="flex flex-col md:flex-row gap-6 mt-8 h-[calc(100vh-200px)]">
              {/* Left Sidebar - Region List */}
              <aside className="w-full md:w-48 flex-shrink-0 overflow-y-auto pr-2 border-r border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 px-2 text-[#0d171b] dark:text-slate-50">지역 선택</h3>
                <div className="flex flex-col gap-2">
                  {REGIONS.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-4 py-2 text-left rounded-md transition-colors ${
                        selectedRegion.name === region.name
                          ? "bg-primary text-white"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Main Content - Charts */}
              <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                <h2 className="text-2xl font-bold text-[#0d171b] dark:text-slate-50">
                  {selectedRegion.name} 의료기관 진료과목 현황
                </h2>
                
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-lg text-slate-500">데이터를 불러오는 중...</p>
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row h-full gap-6">
                    {/* Bar Chart */}
                    <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 min-h-[400px]">
                      <h4 className="text-lg font-semibold mb-4 text-center text-[#0d171b] dark:text-slate-50">진료과목별 병원 수</h4>
                      <div style={{ width: '100%', height: '90%', minHeight: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 70 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                              dataKey="name" 
                              angle={-90} 
                              textAnchor="end" 
                              interval={0} 
                              height={70} 
                              tick={{ fontSize: 12 }} 
                            />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="value" name="병원 수" fill="#8884d8">
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 min-h-[400px]">
                      <h4 className="text-lg font-semibold mb-4 text-center text-[#0d171b] dark:text-slate-50">진료과목 분포</h4>
                      <div style={{ width: '100%', height: '90%', minHeight: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={chartData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                              outerRadius={120}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                               contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
