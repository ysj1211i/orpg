export const Campaigns = [
  {
    title: 'TEST', // orpg\src\campaigns에서 세션 로그가 들어있는 폴더 이름
    label: '혐오체 금고', // 저장소에서 표시할 캠페인 이름
    platform: 'FVTT', // 롤20이면 "roll20", FVTT면 "FVTT"
    npcs: [
    ],
    logs: [
      {
        index: '1', // orpg\src\campaigns\TEST\logs 폴더 내에 있는 html 파일 이름
        name: '29화', // 저장소에서 표시할 파일 이름
        images: [
        ],
        interfaces: [
        ],
      },
    ]
  },
];

export interface Campaign {
  title: string;
  label: string;
  platform: string;
  npcs: NPC[];
  logs: Log[];
}

export interface NPC {
  name: string;
  avatar: string;
}

export interface Log {
  index: string;
  name: string;
  images?: Image[];
  interfaces?: Image[];
}

export interface Image {
  id: string;
  file: string;
}
