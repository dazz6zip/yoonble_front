export interface IArtmakeCategory {
  id: number;
  name: string;
  img: string;
  description: string;
  path: string;
}

export interface IArtmake {
  id: number;
  name: string;
  category: IArtmakeCategory;
  price: number;
  description: string;
  discount: number;
  duration: number;
  img: string;
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

export const getArtmakeCategories = async (): Promise<IArtmakeCategory[]> => {
  try {
    // 임시 데이터 반환 (백엔드 통신 없이)
    const mockData: IArtmakeCategory[] = [
      {
        id: 1,
        name: "눈썹",
        img: "https://d206helh22e0a3.cloudfront.net/images/combo/combo4.jpeg",
        description: "자연눈썹, 소프트콤보눈썹, 섀도우눈썹",
        path: "brow"
      },
      {
        id: 2,
        name: "립",
        img: "https://d206helh22e0a3.cloudfront.net/images/lip/lip9.jpeg",
        description: "블러링립",
        path: "lip"
      },
      {
        id: 3,
        name: "아이라인",
        img: "https://d206helh22e0a3.cloudfront.net/images/eyeline/eyeline5.jpeg",
        description: "실크아이라인, 아이돌브라운라인",
        path: "eyeline"
      },
      {
        id: 4,
        name: "헤어라인",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fplain%2520backgrounds%2F&psig=AOvVaw3WvHL_ds9hIxsC1i3cHuYM&ust=1741330484333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDI6trv9IsDFQAAAAAdAAAAABAE",
        description: "승무원헤어라인",
        path: "hairline"
      },
      {
        id: 5,
        name: "애교살",
        img: "https://d206helh22e0a3.cloudfront.net/images/eyefat/eyefat8.jpeg",
        description: "애교살음영라인",
        path: "eyefat"
      },
      {
        id: 6,
        name: "속눈썹",
        img: "https://d206helh22e0a3.cloudfront.net/images/perm/perm6.jpeg",
        description: "윤블펌, 케라틴 영양펌",
        path: "/perm"
      },
      {
        id: 7,
        name: "점",
        img: "https://d206helh22e0a3.cloudfront.net/images/dot/dot5.jpeg",
        description: "미인점",
        path: "/spot"
      }, {
        id: 8,
        name: "흉터",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fplain%2520backgrounds%2F&psig=AOvVaw3WvHL_ds9hIxsC1i3cHuYM&ust=1741330484333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDI6trv9IsDFQAAAAAdAAAAABAE",
        description: "잔흔 제거",
        path: "/scar"
      },
    ];
    return mockData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getArtmakes = async (): Promise<IArtmake[]> => {
  try {
    const categories = await getArtmakeCategories();
    // 임시 데이터 반환 (백엔드 통신 없이)
    const mockData: IArtmake[] = [
      {
        id: 1,
        name: "자연눈썹",
        category: categories.find(c => c.name === "눈썹")!,
        price: 150,
        description:
          "개인의 모발 흐름 구조를 정밀 분석한 후 초미세 마이크로 니들을 활용하여 한 올 한 올 정교하게 그려넣는 증모 효과 기술입니다.",
        discount: 0,
        duration: 60,
        img: "/combo/"
      },
      {
        id: 2,
        name: "소프트콤보눈썹",
        price: 200,
        category: categories.find(c => c.name === "눈썹")!,
        description:
          "입술에 자연스럽고 생기 있는 색감을 부여하여 건강하고 또렷한 인상을 연출하는 시술입니다.",
        discount: 0,
        duration: 120,
        img: "/combo/"
      },
      {
        id: 3,
        name: "섀도우눈썹",
        category: categories.find(c => c.name === "눈썹")!,
        price: 50,
        description:
          "얼굴의 조화를 이루고 인상을 더욱 돋보이게 해주는 반영구 시술입니다.",
        discount: 0,
        duration: 10,
        img: "/combo/"
      },
      {
        id: 4,
        name: "블러링립",
        category: categories.find(c => c.name === "립")!,
        price: 180,
        description:
          "한 올 한 올 정교하게 결을 살려 그려 넣는 헤어라인 시술입니다.",
        discount: 0,
        duration: 60,
        img: "/combo/"
      },
      {
        id: 5,
        name: "실크아이라인",
        category: categories.find(c => c.name === "아이라인")!,
        price: 100,
        description:
          "애교살에 자연스러운 볼륨감을 더해 밝고 생기 있는 인상을 연출해 줍니다.",
        discount: 0,
        duration: 60,
        img: "/combo/"
      },
      {
        id: 6,
        name: "아이돌브라운라인",
        category: categories.find(c => c.name === "헤어라인")!,
        price: 80,
        description:
          "맞춤 컬링 시술로, 개개인의 눈매와 속눈썹 결을 고려한 자연스러운 컬링 효과를 제공합니다.",
        discount: 0,
        duration: 30,
        img: "/combo/"
      },
      {
        id: 7,
        name: "승무원헤어라인",
        category: categories.find(c => c.name === "헤어라인")!,
        price: 80,
        description:
          "시술 설명------",
        discount: 0,
        duration: 30,
        img: "/combo/"
      }, {
        id: 8,
        name: "애교살음영라인",
        category: categories.find(c => c.name === "애교살")!,
        price: 80,
        description:
          "시술 설명------",
        discount: 0,
        duration: 30,
        img: "/combo/"
      }, {
        id: 9,
        name: "윤블펌",
        category: categories.find(c => c.name === "속눈썹")!,
        price: 80,
        description:
          "시술 설명------",
        discount: 0,
        duration: 30,
        img: "/combo/"
      }, {
        id: 10,
        name: "케라틴 영양펌",
        category: categories.find(c => c.name === "속눈썹펌")!,
        price: 80,
        description:
          "시술 설명------",
        discount: 0,
        duration: 30,
        img: "/combo/"
      }, {
        id: 11,
        name: "미인점",
        category: categories.find(c => c.name === "점")!,
        price: 80,
        description:
          "시술 설명------",
        discount: 0,
        duration: 30,
        img: "/combo/"
      }, {
        id: 12,
        name: "잔흔 제거",
        category: categories.find(c => c.name === "흉터")!,
        price: 80,
        description:
          "시술 설명------",
        discount: 0,
        duration: 30,
        img: "/combo/"
      },
    ];
    return mockData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
