import fs from 'fs';
import path from 'path';

export interface Hospital {
  순번: number;
  구분: string;
  의료기관명: string;
  "의료기관주소(도로명)": string;
  의료기관전화번호: string;
  진료과목: string;
  district?: string; // Which district file it came from
}

const dataDirectory = path.join(process.cwd(), 'public/data');

export async function getAllHospitals(): Promise<Hospital[]> {
  const fileNames = fs.readdirSync(dataDirectory);
  const allHospitals: Hospital[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.json')) {
      const fullPath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      try {
        const rawHospitals: any[] = JSON.parse(fileContents);
        // Extract district from filename if needed, or just add it
        const districtMatch = fileName.match(/부산광역시_([^_]+)_|부산광역시\s([^\s_]+)[_\s]|([^\s_]+)구/);
        let district = "";
        if (fileName.includes("강서구")) district = "강서구";
        else if (fileName.includes("금정구")) district = "금정구";
        else if (fileName.includes("기장군")) district = "기장군";
        else if (fileName.includes("남구")) district = "남구";
        else if (fileName.includes("동구")) district = "동구";
        else if (fileName.includes("동래구")) district = "동래구";
        else if (fileName.includes("북구")) district = "북구";
        else if (fileName.includes("사상구")) district = "사상구";
        else if (fileName.includes("사하구")) district = "사하구";
        else if (fileName.includes("서구")) district = "서구";
        else if (fileName.includes("수영구")) district = "수영구";
        else if (fileName.includes("연제구")) district = "연제구";
        else if (fileName.includes("영도구")) district = "영도구";
        else if (fileName.includes("중구")) district = "중구";
        else if (fileName.includes("해운대구")) district = "해운대구";
        else if (fileName.includes("부산진구")) district = "부산진구";

        const hospitalsWithDistrict = rawHospitals
          .filter(h => h && (h.의료기관명 || h.이름)) // Filter out invalid entries
          .map(h => ({
            순번: h.순번 || 0,
            구분: h.구분 || h.업종 || h.의료기관종별 || "",
            의료기관명: h.의료기관명 || h.이름 || "",
            "의료기관주소(도로명)": h["의료기관주소(도로명)"] || h.주소 || "",
            의료기관전화번호: h.의료기관전화번호 || h.전화번호 || "",
            진료과목: h.진료과목 || "",
            district 
          })) as Hospital[];
        allHospitals.push(...hospitalsWithDistrict);
      } catch (error) {
        console.error(`Error parsing ${fileName}:`, error);
      }
    }
  }

  return allHospitals;
}

export async function getHospitalByName(name: string): Promise<Hospital | undefined> {
  const hospitals = await getAllHospitals();
  return hospitals.find(h => h.의료기관명 === decodeURIComponent(name));
}
