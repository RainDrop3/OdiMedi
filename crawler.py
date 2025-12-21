import requests
from bs4 import BeautifulSoup
import json
import time

# 부산 동구 보건소 의료기관 현황 URL (기본 URL)
base_url = "https://www.bsdonggu.go.kr/health/board/list.donggu"

# 파라미터 설정 (boardId, menuCd 등은 고정, startPage를 변경하며 순회)
params = {
    "boardId": "BBS_0000147",
    "menuCd": "DOM_000000405008001000",
    "paging": "ok",
    "startPage": 1  # 초기 페이지
}

all_hospitals = []
total_pages = 17 # 웹사이트에서 확인된 전체 페이지 수

print(f"크롤링을 시작합니다. (총 {total_pages} 페이지)")

try:
    for page in range(1, total_pages + 1):
        print(f"페이지 {page}/{total_pages} 수집 중...")
        params["startPage"] = page
        
        response = requests.get(base_url, params=params)
        response.raise_for_status() # 에러 발생 시 예외 처리
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 테이블 행(tr) 추출 (헤더 제외)
        rows = soup.select("tbody tr")
        
        for row in rows:
            cols = row.find_all("td")
            if not cols:
                continue
            
            # 데이터 추출 (웹사이트 구조에 맞춰 인덱스 조정 필요할 수 있음)
            # 현재 구조: 구분 | 이름 | 주소 | 전화번호 | 동구분 | 지도
            hospital_info = {
                "구분": cols[0].get_text(strip=True),
                "이름": cols[1].get_text(strip=True),
                "주소": cols[2].get_text(strip=True),
                "전화번호": cols[3].get_text(strip=True),
                "동구분": cols[4].get_text(strip=True)
            }
            all_hospitals.append(hospital_info)
            
        # 서버 부하 방지를 위한 대기
        time.sleep(0.5)

    print("수집 완료!")
    print(f"총 {len(all_hospitals)}개의 의료기관 정보를 찾았습니다.")

    # JSON 파일로 저장
    output_filename = "busan_donggu_medical_full.json"
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(all_hospitals, f, ensure_ascii=False, indent=4)
        
    print(f"'{output_filename}' 파일로 저장되었습니다.")

except Exception as e:
    print(f"에러 발생: {e}")