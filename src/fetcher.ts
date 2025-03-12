export const imageLink = 'https://d206helh22e0a3.cloudfront.net/images';

export interface ICategory {
  id: number;
  name: string;
  img: string; // 카테고리 대표 이미지 링크 1개
  src: string; // 카테고리별 이미지 링크
  description: string;
  path: string;
  menus: IMenu[];
}

export interface IMenu {
  id: number;
  name: string;
  price: number;
  description: string;
  discount: number;
  duration: number;
  img?: string; // 카테고리 내 메뉴별 이미지 링크
  imgCnt: number; // 메뉴별 이미지 개수
}

// export const getArtmakes = async (): Promise<IArtmake[]> => {
//   try {
//     const response = await axios.get<IArtmake[]>("/api/artmake");
//     return response.data;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const categories: ICategory[] = [
      {
        id: 1,
        name: "눈썹",
        img: imageLink + "/brow/brow.jpeg",
        src: imageLink + "/brow",
        description: "자연 | 소프트 콤보 | 섀도우 눈썹",
        path: "brow",
        menus: [] // getMenus()에서 가져올 예정
      },
      {
        id: 2,
        name: "립",
        img: imageLink + "/lip/lip.jpeg",
        src: imageLink + "/lip",
        description: "블러링 립",
        path: "lip",
        menus: []
      },
      {
        id: 3,
        name: "애교살",
        img: imageLink + "/eyefat/eyefat.jpeg",
        src: imageLink + "/eyefat",
        description: "애교살 음영 라인 | 물광 하이라이터",
        path: "eyefat",
        menus: []
      },
      {
        id: 4,
        name: "속눈썹",
        img: imageLink + "/eyelash/perm.jpeg",
        description: "윤블펌 | 케라틴 영양펌",
        path: "eyelash",
        src: imageLink + '/eyelash',
        menus: []
      }, {
        id: 5,
        name: "아이라인",
        img: imageLink + "/eyeline/eyeline.jpeg",
        src: imageLink + '/eyeline',
        description: "실크 아이라인 | 아이돌 브라운 라인",
        path: "eyeline",
        menus: []
      }, {
        id: 6,
        name: "점",
        img: imageLink + "/mark/mark.jpeg",
        src: imageLink + '/brow',
        description: "컨설팅 미인점",
        path: "mark",
        menus: []
      }, {
        id: 7,
        name: "잔흔",
        img: imageLink + "/scar/scar.jpeg",
        description: "잔흔 제거",
        path: "scar",
        src: imageLink + '/scar',
        menus: []
      }, {
        id: 8,
        name: "헤어라인",
        img: imageLink + "/hairline/hairline0.jpeg",
        src: imageLink + '/hairline',
        description: "승무원 헤어라인",
        path: "hairline",
        menus: []
      }
    ]
    return categories;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const menuData: Record<number, IMenu[]> = {
  1: [
    {
      id: 1,
      name: "자연 눈썹",
      price: 150,
      description: "마이크로 미세 니들을 활용하여 실제 눈썹 모처럼 섬세하게 한 올 한 올 결을 그려내어 자연스럽게 모량을 증가 느낌을 주는 기법입니다.",
      discount: 0,
      duration: 60,
      img: imageLink + "/brow/natural/natural",
      imgCnt: 4
    },
    {
      id: 2,
      name: "소프트 콤보 눈썹",
      price: 200,
      description: "자연눈썹 기법을 바탕으로 시술 후, 눈썹모가 부족한 부분 등에 미세한 점들을 채워 음영감을 더해주는 하이브리드 기법입니다.",
      discount: 0,
      duration: 120,
      img: imageLink + "/brow/combo/combo",
      imgCnt: 20
    },
    {
      id: 3,
      name: "섀도우 눈썹",
      price: 50,
      description:
        "점으로 면을 채워 부드러운 음영감을 표현해주는 기법으로, 안개를 흩뿌린듯 은은하게 착색됩니다. 자연스러운 그라데이션으로 표현되는 기법입니다.",
      discount: 0,
      duration: 10,
      img: imageLink + "/brow/shadow/shadow",
      imgCnt: 15
    }
  ],
  2: [
    {
      id: 4,
      name: "블러링 립",
      price: 180,
      description: "입술에 자연스럽고 생기 있는 색감을 부여하여 건강하고 또렷한 인상을 연출하는 시술입니다.",
      discount: 0,
      duration: 60,
      imgCnt: 11
    }
  ],
  3: [
    {
      id: 8,
      name: "애교살 음영 라인",
      price: 80,
      description: "애교살에 자연스러운 볼륨감을 더해 밝고 생기 있는 인상을 연출해 줍니다.",
      discount: 0,
      duration: 30,
      imgCnt: 10
    }
  ],
  4: [
    {
      id: 9,
      name: "윤블펌",
      price: 80,
      description:
        "맞춤 컬링 시술로, 개개인의 눈매와 속눈썹 결을 고려한 자연스러운 컬링 효과를 제공합니다.",
      discount: 0,
      duration: 30,
      imgCnt: 11
    }, {
      id: 10,
      name: "케라틴 영양펌",
      price: 80,
      description: "",
      discount: 0,
      duration: 30,
      imgCnt: 0
    }
  ],
  5: [
    {
      id: 5,
      name: "실크아이라인",
      price: 100,
      description:
        "애교살에 자연스러운 볼륨감을 더해 밝고 생기 있는 인상을 연출해 줍니다.",
      discount: 0,
      duration: 60,
      img: "/black/black",
      imgCnt: 4
    },
    {
      id: 6,
      name: "아이돌브라운라인",
      price: 80,
      description:
        "맞춤 컬링 시술로, 개개인의 눈매와 속눈썹 결을 고려한 자연스러운 컬링 효과를 제공합니다.",
      discount: 0,
      duration: 30,
      img: "/brown/brown",
      imgCnt: 3
    },
  ],
  6: [
    {
      id: 11,
      name: "미인점",
      price: 80,
      description:
        "------ 미인점 시술 설명 ------",
      discount: 0,
      duration: 30,
      img: "/spot/",
      imgCnt: 5
    },
  ],
  7: [
    {
      id: 12,
      name: "잔흔 제거",
      price: 80,
      description:
        "------ 잔흔 제거 시술 설명 ------",
      discount: 0,
      duration: 30,
      imgCnt: 2
    },
  ],
  8: [
    {
      id: 7,
      name: "승무원헤어라인",
      price: 80,
      description: "한 올 한 올 정교하게 결을 살려 그려 넣는 헤어라인 시술입니다.",
      discount: 0,
      duration: 30,
      imgCnt: 1
    }
  ]
}

export const getMenus = async (categoryId?: number): Promise<IMenu[]> => {
  try {
    if (categoryId !== undefined) {
      return menuData[categoryId] || [];
    }
    return Object.values(menuData).flat();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
