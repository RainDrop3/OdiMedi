export interface SymptomDetail {
  id: string; // The symptom name used in URL (encoded)
  name: string; // Display name
  department: string;
  description: string;
  targetAudience: string;
  peakSeason: string;
  relatedDiseases: string[];
}

export const symptomsList: SymptomDetail[] = [
  // 내과
  {
    id: "복통 (배 아픔)",
    name: "복통 (배 아픔)",
    department: "내과",
    description: "복부의 통증을 통칭하며, 위치와 양상에 따라 다양한 원인이 있을 수 있습니다.",
    targetAudience: "전 연령층",
    peakSeason: "사계절 (여름철 식중독 주의)",
    relatedDiseases: ["위염", "장염", "과민성대장증후군", "맹장염"]
  },
  {
    id: "속쓰림",
    name: "속쓰림",
    department: "내과",
    description: "명치 부위가 타는 듯한 통증이나 불쾌감을 의미합니다.",
    targetAudience: "직장인, 스트레스가 많은 성인",
    peakSeason: "연중",
    relatedDiseases: ["역류성 식도염", "위궤양", "십이지장궤양"]
  },
  {
    id: "소화불량",
    name: "소화불량",
    department: "내과",
    description: "음식 섭취 후 포만감, 복부 팽만감, 통증 등이 발생하는 상태입니다.",
    targetAudience: "전 연령층",
    peakSeason: "명절, 연말연시",
    relatedDiseases: ["기능성 소화불량", "위염", "위암"]
  },
  {
    id: "설사",
    name: "설사",
    department: "내과",
    description: "배변 횟수가 증가하고 물기가 많은 변을 보는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "여름 (식중독), 겨울 (노로바이러스)",
    relatedDiseases: ["급성 장염", "과민성대장증후군", "식중독"]
  },
  {
    id: "변비",
    name: "변비",
    department: "내과",
    description: "배변 횟수가 적거나 배변 시 무리한 힘이 필요한 상태입니다.",
    targetAudience: "여성, 노인",
    peakSeason: "연중",
    relatedDiseases: ["기능성 변비", "대장암", "갑상선기능저하증"]
  },
  {
    id: "구토 (토함)",
    name: "구토 (토함)",
    department: "내과",
    description: "위의 내용물이 식도를 통해 입 밖으로 배출되는 현상입니다.",
    targetAudience: "소아, 성인",
    peakSeason: "여름, 겨울",
    relatedDiseases: ["위장관염", "식중독", "뇌압상승"]
  },
  {
    id: "감기",
    name: "감기",
    department: "내과",
    description: "바이러스에 의한 상기도 감염으로 콧물, 기침, 발열 등을 동반합니다.",
    targetAudience: "전 연령층",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["상기도 감염", "독감", "코로나19"]
  },
  {
    id: "고열 (열)",
    name: "고열 (열)",
    department: "내과",
    description: "체온이 정상 범위(37.5도) 이상으로 올라가는 증상입니다.",
    targetAudience: "소아, 노인",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["인플루엔자", "폐렴", "신우신염"]
  },
  {
    id: "기침",
    name: "기침",
    department: "내과",
    description: "기도의 이물질을 배출하기 위한 반사 작용입니다.",
    targetAudience: "전 연령층",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["감기", "천식", "폐렴", "역류성 식도염"]
  },
  {
    id: "가래",
    name: "가래",
    department: "내과",
    description: "기도에서 분비되는 점액성 물질입니다.",
    targetAudience: "흡연자, 호흡기 질환자",
    peakSeason: "환절기",
    relatedDiseases: ["기관지염", "폐렴", "만성폐쇄성폐질환"]
  },
  {
    id: "호흡곤란 (숨참)",
    name: "호흡곤란 (숨참)",
    department: "내과",
    description: "숨쉬기가 어렵거나 숨이 차는 주관적인 느낌입니다.",
    targetAudience: "노인, 심폐질환자",
    peakSeason: "연중",
    relatedDiseases: ["천식", "심부전", "만성폐쇄성폐질환", "공황장애"]
  },
  {
    id: "가슴답답함",
    name: "가슴답답함",
    department: "내과",
    description: "가슴이 조이거나 눌리는 듯한 불편감입니다.",
    targetAudience: "중장년층, 스트레스가 많은 성인",
    peakSeason: "겨울 (혈관수축)",
    relatedDiseases: ["협심증", "심근경색", "역류성 식도염", "화병"]
  },
  {
    id: "두근거림",
    name: "두근거림",
    department: "내과",
    description: "심장 박동이 불규칙하거나 빠르게 느껴지는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["부정맥", "갑상선기능항진증", "불안장애"]
  },
  {
    id: "만성피로",
    name: "만성피로",
    department: "내과",
    description: "휴식을 취해도 호전되지 않는 피로감이 6개월 이상 지속되는 상태입니다.",
    targetAudience: "직장인, 수험생",
    peakSeason: "연중",
    relatedDiseases: ["만성피로증후군", "간질환", "갑상선질환"]
  },
  {
    id: "어지러움 (빈혈)",
    name: "어지러움 (빈혈)",
    department: "내과",
    description: "자신이나 주위 사물이 정지해 있음에도 움직이는 듯한 느낌입니다.",
    targetAudience: "여성, 노인",
    peakSeason: "여름 (탈수)",
    relatedDiseases: ["이석증", "빈혈", "기립성 저혈압"]
  },

  // 이비인후과
  {
    id: "콧물",
    name: "콧물",
    department: "이비인후과",
    description: "코 점막에서 분비되는 점액입니다.",
    targetAudience: "소아, 알레르기 환자",
    peakSeason: "봄, 가을 (환절기)",
    relatedDiseases: ["알레르기 비염", "감기", "축농증"]
  },
  {
    id: "코막힘",
    name: "코막힘",
    department: "이비인후과",
    description: "코안의 공기 흐름이 원활하지 않은 상태입니다.",
    targetAudience: "전 연령층",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["비염", "비중격만곡증", "부비동염"]
  },
  {
    id: "재채기",
    name: "재채기",
    department: "이비인후과",
    description: "코의 신경이 자극받아 일어나는 반사적인 경련성 호흡입니다.",
    targetAudience: "알레르기 환자",
    peakSeason: "봄 (꽃가루)",
    relatedDiseases: ["알레르기 비염", "감기"]
  },
  {
    id: "비염",
    name: "비염",
    department: "이비인후과",
    description: "코 점막의 염증성 질환입니다.",
    targetAudience: "소아, 청소년",
    peakSeason: "환절기",
    relatedDiseases: ["알레르기 비염", "혈관운동성 비염"]
  },
  {
    id: "인후통 (목 아픔)",
    name: "인후통 (목 아픔)",
    department: "이비인후과",
    description: "침이나 음식을 삼킬 때 목에 통증이 느껴지는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "겨울, 환절기",
    relatedDiseases: ["인후염", "편도염", "코로나19"]
  },
  {
    id: "이물감 (목)",
    name: "이물감 (목)",
    department: "이비인후과",
    description: "목에 무언가 걸려 있는 듯한 느낌입니다.",
    targetAudience: "성인",
    peakSeason: "연중",
    relatedDiseases: ["역류성 인후두염", "편도결석", "스트레스"]
  },
  {
    id: "중이염 (귀 아픔)",
    name: "중이염 (귀 아픔)",
    department: "이비인후과",
    description: "고막 안쪽 중이강의 염증입니다.",
    targetAudience: "소아",
    peakSeason: "겨울, 환절기",
    relatedDiseases: ["급성 중이염", "삼출성 중이염"]
  },
  {
    id: "이명 (귀 울림)",
    name: "이명 (귀 울림)",
    department: "이비인후과",
    description: "외부 소리 자극 없이 귀나 머리에서 소리가 들리는 증상입니다.",
    targetAudience: "노인, 소음 노출자",
    peakSeason: "연중",
    relatedDiseases: ["난청", "메니에르병", "스트레스"]
  },
  {
    id: "난청 (안 들림)",
    name: "난청 (안 들림)",
    department: "이비인후과",
    description: "소리가 잘 들리지 않거나 말귀를 알아듣기 힘든 상태입니다.",
    targetAudience: "노인",
    peakSeason: "연중",
    relatedDiseases: ["노인성 난청", "소음성 난청", "돌발성 난청"]
  },
  {
    id: "어지럼증 (빙빙 돔)",
    name: "어지럼증 (빙빙 돔)",
    department: "이비인후과",
    description: "자신이나 세상이 빙빙 도는 듯한 회전성 어지러움입니다.",
    targetAudience: "중장년층",
    peakSeason: "연중",
    relatedDiseases: ["이석증", "메니에르병", "전정신경염"]
  },
  {
    id: "코골이",
    name: "코골이",
    department: "이비인후과",
    description: "수면 중 호흡 기류가 좁아진 기도를 지나면서 발생하는 소리입니다.",
    targetAudience: "비만 성인 남성",
    peakSeason: "연중",
    relatedDiseases: ["수면무호흡증", "비만", "편도비대"]
  },

  // 정형외과
  {
    id: "요통 (허리 통증)",
    name: "요통 (허리 통증)",
    department: "정형외과",
    description: "허리 부위의 통증입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["허리디스크", "척추관협착증", "요추염좌"]
  },
  {
    id: "목통증 (뻐근함)",
    name: "목통증 (뻐근함)",
    department: "정형외과",
    description: "목 뒷부분의 뻐근함이나 통증입니다.",
    targetAudience: "직장인, 학생",
    peakSeason: "연중",
    relatedDiseases: ["목디스크", "거북목 증후군", "근막통증증후군"]
  },
  {
    id: "관절통 (무릎/어깨)",
    name: "관절통 (무릎/어깨)",
    department: "정형외과",
    description: "관절 마디마디가 쑤시고 아픈 증상입니다.",
    targetAudience: "노인, 운동선수",
    peakSeason: "장마철, 겨울",
    relatedDiseases: ["퇴행성 관절염", "류마티스 관절염", "오십견"]
  },
  {
    id: "손목통증",
    name: "손목통증",
    department: "정형외과",
    description: "손목 부위의 시큰거림이나 통증입니다.",
    targetAudience: "주부, 사무직",
    peakSeason: "연중",
    relatedDiseases: ["손목터널증후군", "건초염"]
  },
  {
    id: "발목통증",
    name: "발목통증",
    department: "정형외과",
    description: "발목 관절의 통증입니다.",
    targetAudience: "운동을 즐기는 사람",
    peakSeason: "야외활동 많은 계절",
    relatedDiseases: ["발목 염좌", "족저근막염", "아킬레스건염"]
  },
  {
    id: "염좌 (삐끗함)",
    name: "염좌 (삐끗함)",
    department: "정형외과",
    description: "관절을 지지하는 인대가 늘어나거나 찢어지는 부상입니다.",
    targetAudience: "활동량이 많은 사람",
    peakSeason: "봄, 가을",
    relatedDiseases: ["발목 염좌", "손목 염좌"]
  },
  {
    id: "골절 (부러짐)",
    name: "골절 (부러짐)",
    department: "정형외과",
    description: "뼈의 연속성이 소실된 상태입니다.",
    targetAudience: "노인 (낙상), 소아",
    peakSeason: "겨울 (빙판길)",
    relatedDiseases: ["골다공증성 골절", "외상성 골절"]
  },
  {
    id: "근육통",
    name: "근육통",
    department: "정형외과",
    description: "근육에 생기는 통증입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["근막통증증후군", "몸살", "과도한 운동"]
  },
  {
    id: "손저림",
    name: "손저림",
    department: "정형외과",
    description: "손이나 손가락의 감각 이상이나 저린 느낌입니다.",
    targetAudience: "중년 여성",
    peakSeason: "연중",
    relatedDiseases: ["손목터널증후군", "목디스크", "혈액순환장애"]
  },

  // 신경과 / 신경외과
  {
    id: "두통 (편두통)",
    name: "두통 (편두통)",
    department: "신경과/신경외과",
    description: "머리의 통증입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["편두통", "긴장성 두통", "뇌졸중"]
  },
  {
    id: "손발저림",
    name: "손발저림",
    department: "신경과/신경외과",
    description: "손과 발의 감각이 둔해지거나 찌릿한 느낌입니다.",
    targetAudience: "당뇨 환자, 노인",
    peakSeason: "겨울",
    relatedDiseases: ["말초신경병증", "디스크", "뇌졸중 전조증상"]
  },
  {
    id: "감각둔화",
    name: "감각둔화",
    department: "신경과/신경외과",
    description: "피부의 감각이 남의 살처럼 느껴지거나 무딘 상태입니다.",
    targetAudience: "노인, 당뇨 환자",
    peakSeason: "연중",
    relatedDiseases: ["당뇨병성 신경병증", "뇌졸중", "디스크"]
  },
  {
    id: "안면마비",
    name: "안면마비",
    department: "신경과/신경외과",
    description: "얼굴 근육이 마비되어 표정을 짓기 힘든 상태입니다.",
    targetAudience: "전 연령층",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["구안와사 (벨마비)", "뇌졸중", "대상포진"]
  },
  {
    id: "떨림 (수전증)",
    name: "떨림 (수전증)",
    department: "신경과/신경외과",
    description: "손이나 신체 일부가 의지와 상관없이 떨리는 증상입니다.",
    targetAudience: "노인",
    peakSeason: "연중",
    relatedDiseases: ["본태성 떨림", "파킨슨병", "갑상선기능항진증"]
  },
  {
    id: "디스크 (허리/목)",
    name: "디스크 (허리/목)",
    department: "신경과/신경외과",
    description: "척추 뼈 사이의 추간판이 탈출하여 신경을 누르는 질환입니다.",
    targetAudience: "직장인, 노인",
    peakSeason: "연중",
    relatedDiseases: ["추간판탈출증", "척추관협착증"]
  },
  {
    id: "기억력저하 (치매)",
    name: "기억력저하 (치매)",
    department: "신경과/신경외과",
    description: "인지 기능이 저하되어 일상생활에 지장을 주는 상태입니다.",
    targetAudience: "노인",
    peakSeason: "연중",
    relatedDiseases: ["알츠하이머병", "혈관성 치매", "경도인지장애"]
  },

  // 피부과
  {
    id: "발진 (두드러기)",
    name: "발진 (두드러기)",
    department: "피부과",
    description: "피부가 붉게 부어오르고 가려운 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "봄, 여름",
    relatedDiseases: ["알레르기", "아토피 피부염", "접촉성 피부염"]
  },
  {
    id: "가려움증",
    name: "가려움증",
    department: "피부과",
    description: "피부를 긁고 싶은 충동을 일으키는 감각입니다.",
    targetAudience: "전 연령층",
    peakSeason: "겨울 (건조)",
    relatedDiseases: ["피부건조증", "아토피", "습진"]
  },
  {
    id: "여드름",
    name: "여드름",
    department: "피부과",
    description: "모공이 막혀 발생하는 염증성 피부 질환입니다.",
    targetAudience: "청소년, 청년",
    peakSeason: "여름",
    relatedDiseases: ["심상성 여드름", "성인 여드름"]
  },
  {
    id: "점/사마귀",
    name: "점/사마귀",
    department: "피부과",
    description: "피부에 생기는 색소성 병변이나 바이러스성 증식물입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["편평사마귀", "흑색종 (점의 변화)"]
  },
  {
    id: "탈모",
    name: "탈모",
    department: "피부과",
    description: "머리카락이 비정상적으로 많이 빠지는 증상입니다.",
    targetAudience: "중년 남성, 출산 후 여성",
    peakSeason: "가을",
    relatedDiseases: ["남성형 탈모", "원형 탈모", "휴지기 탈모"]
  },
  {
    id: "무좀",
    name: "무좀",
    department: "피부과",
    description: "곰팡이균에 의한 피부 감염입니다.",
    targetAudience: "성인 남성",
    peakSeason: "여름 (고온다습)",
    relatedDiseases: ["족부백선", "조갑백선"]
  },
  {
    id: "화상",
    name: "화상",
    department: "피부과",
    description: "열, 화학물질, 전기 등에 의한 피부 손상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["1도 화상", "2도 화상"]
  },

  // 안과
  {
    id: "안구통증 (눈 아픔)",
    name: "안구통증 (눈 아픔)",
    department: "안과",
    description: "눈이나 눈 주위의 통증입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["녹내장", "각막염", "안구건조증"]
  },
  {
    id: "충혈",
    name: "충혈",
    department: "안과",
    description: "눈의 흰자위가 붉게 보이는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "봄 (황사), 여름 (수영장)",
    relatedDiseases: ["결막염", "안구건조증", "포도막염"]
  },
  {
    id: "눈곱",
    name: "눈곱",
    department: "안과",
    description: "눈에서 분비되는 점액성 물질이 굳은 것입니다.",
    targetAudience: "전 연령층",
    peakSeason: "봄, 여름",
    relatedDiseases: ["유행성 각결막염", "세균성 결막염"]
  },
  {
    id: "눈다래끼",
    name: "눈다래끼",
    department: "안과",
    description: "눈꺼풀의 분비샘에 생기는 염증입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["맥립종", "산립종"]
  },
  {
    id: "시력저하",
    name: "시력저하",
    department: "안과",
    description: "사물이 흐릿하게 보이거나 잘 보이지 않는 증상입니다.",
    targetAudience: "노인, 학생",
    peakSeason: "연중",
    relatedDiseases: ["백내장", "근시", "노안", "황반변성"]
  },
  {
    id: "안구건조증 (뻑뻑함)",
    name: "안구건조증 (뻑뻑함)",
    department: "안과",
    description: "눈물이 부족하거나 빨리 말라 눈이 뻑뻑한 증상입니다.",
    targetAudience: "직장인, 노인",
    peakSeason: "겨울, 봄",
    relatedDiseases: ["건성안", "쇼그렌 증후군"]
  },

  // 치과
  {
    id: "치통 (이 아픔)",
    name: "치통 (이 아픔)",
    department: "치과",
    description: "치아나 그 주위 조직의 통증입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["충치 (치아우식증)", "치수염"]
  },
  {
    id: "이시림",
    name: "이시림",
    department: "치과",
    description: "찬물이나 바람에 치아가 시린 증상입니다.",
    targetAudience: "중장년층",
    peakSeason: "겨울",
    relatedDiseases: ["치경부 마모증", "치주질환"]
  },
  {
    id: "잇몸출혈",
    name: "잇몸출혈",
    department: "치과",
    description: "양치질이나 자극 시 잇몸에서 피가 나는 증상입니다.",
    targetAudience: "성인",
    peakSeason: "연중",
    relatedDiseases: ["치은염", "치주염"]
  },
  {
    id: "잇몸부종",
    name: "잇몸부종",
    department: "치과",
    description: "잇몸이 붓고 아픈 증상입니다.",
    targetAudience: "성인",
    peakSeason: "피로 시",
    relatedDiseases: ["치주농양", "사랑니 주위염"]
  },
  {
    id: "사랑니",
    name: "사랑니",
    department: "치과",
    description: "가장 안쪽에 나는 어금니로 인한 통증이나 불편감입니다.",
    targetAudience: "청년층 (10대 후반~20대)",
    peakSeason: "연중",
    relatedDiseases: ["지치주위염", "매복사랑니"]
  },
  {
    id: "입냄새",
    name: "입냄새",
    department: "치과",
    description: "입에서 불쾌한 냄새가 나는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["치주질환", "편도결석", "위장장애"]
  },
  {
    id: "턱관절통증",
    name: "턱관절통증",
    department: "치과",
    description: "입을 벌리거나 씹을 때 턱관절에서 소리가 나거나 아픈 증상입니다.",
    targetAudience: "젊은 여성, 수험생",
    peakSeason: "겨울, 스트레스 시",
    relatedDiseases: ["턱관절 장애", "이갈이"]
  },

  // 정신건강의학과
  {
    id: "불면증",
    name: "불면증",
    department: "정신건강의학과",
    description: "잠들기 어렵거나 잠을 유지하기 어려운 수면 장애입니다.",
    targetAudience: "노인, 스트레스가 많은 성인",
    peakSeason: "연중",
    relatedDiseases: ["수면장애", "우울증", "불안장애"]
  },
  {
    id: "우울감",
    name: "우울감",
    department: "정신건강의학과",
    description: "의욕 저하와 우울감이 지속되는 상태입니다.",
    targetAudience: "전 연령층",
    peakSeason: "가을, 겨울 (계절성)",
    relatedDiseases: ["우울증", "적응장애"]
  },
  {
    id: "무기력증",
    name: "무기력증",
    department: "정신건강의학과",
    description: "아무것도 하기 싫고 기운이 없는 상태입니다.",
    targetAudience: "직장인, 학생",
    peakSeason: "연중",
    relatedDiseases: ["번아웃 증후군", "우울증", "갑상선기능저하증"]
  },
  {
    id: "공황장애 (불안)",
    name: "공황장애 (불안)",
    department: "정신건강의학과",
    description: "갑작스러운 극심한 불안과 죽을 것 같은 공포를 느끼는 질환입니다.",
    targetAudience: "청년, 중년",
    peakSeason: "연중",
    relatedDiseases: ["공황장애", "범불안장애"]
  },
  {
    id: "스트레스",
    name: "스트레스",
    department: "정신건강의학과",
    description: "정신적, 신체적 자극으로 인한 긴장 상태입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["적응장애", "화병", "신체화장애"]
  },
  {
    id: "집중력저하",
    name: "집중력저하",
    department: "정신건강의학과",
    description: "주의가 산만하고 한 가지 일에 몰두하기 어려운 상태입니다.",
    targetAudience: "아동 (ADHD), 수험생",
    peakSeason: "연중",
    relatedDiseases: ["ADHD", "우울증", "수면부족"]
  },

  // 비뇨의학과
  {
    id: "배뇨통 (소변 아픔)",
    name: "배뇨통 (소변 아픔)",
    department: "비뇨의학과",
    description: "소변을 볼 때 요도나 방광 부위가 아픈 증상입니다.",
    targetAudience: "여성 (방광염), 남성 (전립선염)",
    peakSeason: "여름",
    relatedDiseases: ["방광염", "요도염", "전립선염"]
  },
  {
    id: "빈뇨 (자주 마려움)",
    name: "빈뇨 (자주 마려움)",
    department: "비뇨의학과",
    description: "소변을 너무 자주 보는 증상입니다.",
    targetAudience: "중년 남성, 여성",
    peakSeason: "겨울",
    relatedDiseases: ["과민성 방광", "전립선 비대증", "방광염"]
  },
  {
    id: "혈뇨 (피 섞임)",
    name: "혈뇨 (피 섞임)",
    department: "비뇨의학과",
    description: "소변에 피가 섞여 나오는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["요로결석", "방광암", "신장암", "방광염"]
  },
  {
    id: "옆구리통증 (결석)",
    name: "옆구리통증 (결석)",
    department: "비뇨의학과",
    description: "옆구리에 발생하는 극심한 통증입니다.",
    targetAudience: "중년 남성",
    peakSeason: "여름 (탈수)",
    relatedDiseases: ["요로결석", "신우신염"]
  },
  {
    id: "성기능장애",
    name: "성기능장애",
    department: "비뇨의학과",
    description: "성욕, 발기, 사정 등에 문제가 있는 상태입니다.",
    targetAudience: "중년 남성",
    peakSeason: "연중",
    relatedDiseases: ["발기부전", "조루증", "남성갱년기"]
  },

  // 산부인과
  {
    id: "생리통",
    name: "생리통",
    department: "산부인과",
    description: "월경 기간에 발생하는 하복부 통증입니다.",
    targetAudience: "가임기 여성",
    peakSeason: "월경 주기",
    relatedDiseases: ["원발성 생리통", "자궁내막증", "자궁근종"]
  },
  {
    id: "생리불순",
    name: "생리불순",
    department: "산부인과",
    description: "월경 주기가 불규칙하거나 양이 비정상적인 상태입니다.",
    targetAudience: "가임기 여성",
    peakSeason: "스트레스 시",
    relatedDiseases: ["다낭성 난소 증후군", "호르몬 불균형", "조기폐경"]
  },
  {
    id: "질분비물",
    name: "질분비물",
    department: "산부인과",
    description: "질 분비물의 양이 늘거나 색, 냄새가 변하는 증상입니다.",
    targetAudience: "여성",
    peakSeason: "여름 (습함)",
    relatedDiseases: ["질염", "자궁경부염"]
  },
  {
    id: "임신상담",
    name: "임신상담",
    department: "산부인과",
    description: "임신 준비, 피임, 난임 등에 대한 상담입니다.",
    targetAudience: "가임기 여성/부부",
    peakSeason: "연중",
    relatedDiseases: ["난임", "산전검사"]
  },
  {
    id: "갱년기증상",
    name: "갱년기증상",
    department: "산부인과",
    description: "폐경 전후 호르몬 변화로 인한 안면홍조, 발한 등의 증상입니다.",
    targetAudience: "중년 여성 (40~50대)",
    peakSeason: "연중",
    relatedDiseases: ["갱년기 증후군", "골다공증"]
  },

  // 소아청소년과
  {
    id: "소아발열",
    name: "소아발열",
    department: "소아청소년과",
    description: "아이의 체온이 정상보다 높은 상태입니다.",
    targetAudience: "영유아, 소아",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["감기", "중이염", "요로감염", "돌발진"]
  },
  {
    id: "소아감기",
    name: "소아감기",
    department: "소아청소년과",
    description: "아이에게 발생하는 기침, 콧물 등의 상기도 감염 증상입니다.",
    targetAudience: "영유아, 소아",
    peakSeason: "환절기, 겨울",
    relatedDiseases: ["급성 비인두염", "기관지염"]
  },
  {
    id: "예방접종",
    name: "예방접종",
    department: "소아청소년과",
    description: "감염병 예방을 위한 백신 접종입니다.",
    targetAudience: "영유아, 소아",
    peakSeason: "연중 (접종 일정에 따름)",
    relatedDiseases: ["필수 예방접종 대상 감염병"]
  },
  {
    id: "성장발달",
    name: "성장발달",
    department: "소아청소년과",
    description: "아이의 키, 몸무게 증가 및 발달 과정에 대한 상담입니다.",
    targetAudience: "영유아, 소아, 청소년",
    peakSeason: "방학 시즌",
    relatedDiseases: ["성장호르몬 결핍", "성조숙증"]
  },

  // 외과
  {
    id: "열상 (찢어짐)",
    name: "열상 (찢어짐)",
    department: "외과",
    description: "피부가 찢어져서 생긴 상처입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["외상", "봉합수술 필요"]
  },
  {
    id: "치질 (항문 통증)",
    name: "치질 (항문 통증)",
    department: "외과",
    description: "항문 주변의 혈관이 늘어나거나 찢어져 발생하는 질환입니다.",
    targetAudience: "성인",
    peakSeason: "겨울",
    relatedDiseases: ["치핵", "치열", "치루"]
  },
  {
    id: "혈변",
    name: "혈변",
    department: "외과",
    description: "대변에 피가 섞여 나오는 증상입니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["치질", "대장암", "대장용종"]
  },
  {
    id: "혹/멍울 (지방종)",
    name: "혹/멍울 (지방종)",
    department: "외과",
    description: "피부 아래에 만져지는 덩어리입니다.",
    targetAudience: "성인",
    peakSeason: "연중",
    relatedDiseases: ["지방종", "피지낭종", "림프절 비대"]
  },
  {
    id: "유방통증/멍울",
    name: "유방통증/멍울",
    department: "외과",
    description: "유방에 통증이 있거나 덩어리가 만져지는 증상입니다.",
    targetAudience: "여성",
    peakSeason: "연중",
    relatedDiseases: ["유방암", "섬유선종", "유방낭종"]
  },

  // 마취통증의학과
  {
    id: "만성통증",
    name: "만성통증",
    department: "마취통증의학과",
    description: "3개월 이상 지속되는 통증입니다.",
    targetAudience: "노인, 만성질환자",
    peakSeason: "연중",
    relatedDiseases: ["복합부위통증증후군(CRPS)", "섬유근육통"]
  },
  {
    id: "신경통 (대상포진)",
    name: "신경통 (대상포진)",
    department: "마취통증의학과",
    description: "신경 손상이나 자극으로 인한 찌릿한 통증입니다.",
    targetAudience: "노인, 면역저하자",
    peakSeason: "환절기",
    relatedDiseases: ["대상포진", "삼차신경통", "좌골신경통"]
  },
  {
    id: "수술후통증",
    name: "수술후통증",
    department: "마취통증의학과",
    description: "수술 부위의 지속적인 통증 관리입니다.",
    targetAudience: "수술 환자",
    peakSeason: "연중",
    relatedDiseases: ["수술 후 통증 증후군"]
  },

  // 심장혈관흉부외과
  {
    id: "하지정맥류 (핏줄)",
    name: "하지정맥류 (핏줄)",
    department: "심장혈관흉부외과",
    description: "다리의 정맥이 늘어나서 피부 밖으로 돌출되는 질환입니다.",
    targetAudience: "오래 서 있는 직업군, 여성",
    peakSeason: "여름 (노출)",
    relatedDiseases: ["하지정맥류", "심부정맥혈전증"]
  },
  {
    id: "다한증 (손발 땀)",
    name: "다한증 (손발 땀)",
    department: "심장혈관흉부외과",
    description: "손, 발, 겨드랑이 등에 땀이 과도하게 나는 증상입니다.",
    targetAudience: "청년층",
    peakSeason: "여름, 긴장 시",
    relatedDiseases: ["본태성 다한증"]
  },

  // 가정의학과
  {
    id: "비만 (다이어트)",
    name: "비만 (다이어트)",
    department: "가정의학과",
    description: "체지방이 과도하게 축적된 상태입니다.",
    targetAudience: "전 연령층",
    peakSeason: "여름 전, 새해",
    relatedDiseases: ["대사증후군", "고혈압", "당뇨병"]
  },
  {
    id: "영양수액",
    name: "영양수액",
    department: "가정의학과",
    description: "피로 회복이나 영양 공급을 위한 수액 치료입니다.",
    targetAudience: "만성피로 환자, 허약자",
    peakSeason: "환절기, 여름",
    relatedDiseases: ["만성피로", "탈수", "영양불균형"]
  },

  // 재활의학과
  {
    id: "수술후재활",
    name: "수술후재활",
    department: "재활의학과",
    description: "수술 후 기능 회복을 위한 치료 과정입니다.",
    targetAudience: "수술 환자",
    peakSeason: "연중",
    relatedDiseases: ["관절 수술 후", "골절 수술 후"]
  },
  {
    id: "자세교정",
    name: "자세교정",
    department: "재활의학과",
    description: "틀어진 체형을 바로잡는 치료입니다.",
    targetAudience: "학생, 직장인",
    peakSeason: "방학",
    relatedDiseases: ["척추측만증", "거북목", "골반불균형"]
  },
  {
    id: "거북목/척추측만",
    name: "거북목/척추측만",
    department: "재활의학과",
    description: "목이 앞으로 빠지거나 척추가 휘는 증상입니다.",
    targetAudience: "스마트폰 사용자, 학생",
    peakSeason: "연중",
    relatedDiseases: ["거북목 증후군", "척추측만증"]
  },

  // 한의원
  {
    id: "발목염좌 (침)",
    name: "발목염좌 (침)",
    department: "한의원",
    description: "발목을 삐었을 때 침 치료 등을 시행합니다.",
    targetAudience: "전 연령층",
    peakSeason: "연중",
    relatedDiseases: ["발목 염좌"]
  },
  {
    id: "소화불량 (체함)",
    name: "소화불량 (체함)",
    department: "한의원",
    description: "급체하거나 소화가 안 될 때의 한방 치료입니다.",
    targetAudience: "전 연령층",
    peakSeason: "명절",
    relatedDiseases: ["기능성 소화불량", "식체"]
  },
  {
    id: "기력저하 (보약)",
    name: "기력저하 (보약)",
    department: "한의원",
    description: "기운이 없고 허약할 때 보약을 처방합니다.",
    targetAudience: "노인, 수험생, 산모",
    peakSeason: "환절기, 여름",
    relatedDiseases: ["만성피로", "허약체질"]
  },
  {
    id: "교통사고후유증",
    name: "교통사고후유증",
    department: "한의원",
    description: "교통사고 후 발생하는 통증 및 불편감에 대한 치료입니다.",
    targetAudience: "교통사고 경험자",
    peakSeason: "연중",
    relatedDiseases: ["편타성 손상", "근육통"]
  }
];

export function getSymptomById(id: string): SymptomDetail | undefined {
  return symptomsList.find(s => s.id === decodeURIComponent(id));
}

export function getSymptomByRouteId(routeId: string): SymptomDetail | undefined {
  const index = Number(routeId);
  if (!Number.isInteger(index) || index < 0 || index >= symptomsList.length) {
    return undefined;
  }

  return symptomsList[index];
}

export function searchSymptoms(query: string): SymptomDetail[] {
  const lowerQuery = query.toLowerCase();
  return symptomsList.filter(s => 
    s.name.toLowerCase().includes(lowerQuery) || 
    s.department.toLowerCase().includes(lowerQuery) ||
    s.description.toLowerCase().includes(lowerQuery)
  );
}
