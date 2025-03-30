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

export interface IReview {
  id: number;
  language: string;
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

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const categories: ICategory[] = [
      {
        id: 1,
        name: "categories.brow.name",
        img: `${imageLink}/brow/brow.jpeg`,
        src: `${imageLink}/brow`,
        description: "categories.brow.description",
        path: "brow",
        menus: []
      },
      {
        id: 2,
        name: "categories.lip.name",
        img: `${imageLink}/lip/lip.jpeg`,
        src: `${imageLink}/lip`,
        description: "categories.lip.description",
        path: "lip",
        menus: []
      },
      {
        id: 3,
        name: "categories.eyefat.name",
        img: `${imageLink}/eyefat/eyefat.jpeg`,
        src: `${imageLink}/eyefat`,
        description: "categories.eyefat.description",
        path: "eyefat",
        menus: []
      },
      {
        id: 4,
        name: "categories.eyelash.name",
        img: `${imageLink}/eyelash/perm.jpeg`,
        src: `${imageLink}/eyelash`,
        description: "categories.eyelash.description",
        path: "eyelash",
        menus: []
      },
      {
        id: 5,
        name: "categories.eyeline.name",
        img: `${imageLink}/eyeline/eyeline.jpeg`,
        src: `${imageLink}/eyeline`,
        description: "categories.eyeline.description",
        path: "eyeline",
        menus: []
      },
      {
        id: 6,
        name: "categories.mark.name",
        img: `${imageLink}/mark/mark.jpeg`,
        src: `${imageLink}/mark`,
        description: "categories.mark.description",
        path: "mark",
        menus: []
      },
      {
        id: 7,
        name: "categories.scar.name",
        img: `${imageLink}/scar/scar.jpeg`,
        src: `${imageLink}/scar`,
        description: "categories.scar.description",
        path: "scar",
        menus: []
      },
      {
        id: 8,
        name: "categories.hairline.name",
        img: `${imageLink}/hairline/hairline0.jpeg`,
        src: `${imageLink}/hairline`,
        description: "categories.hairline.description",
        path: "hairline",
        menus: []
      }
    ];
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
      name: "menu.1.natural_brow.name",
      price: 150,
      description: "menu.1.natural_brow.description",
      discount: 0,
      duration: 60,
      img: `${imageLink}/brow/natural/natural`,
      imgCnt: 4
    },
    {
      id: 2,
      name: "menu.1.soft_combo_brow.name",
      price: 200,
      description: "menu.1.soft_combo_brow.description",
      discount: 0,
      duration: 120,
      img: `${imageLink}/brow/combo/combo`,
      imgCnt: 20
    },
    {
      id: 3,
      name: "menu.1.shadow_brow.name",
      price: 50,
      description: "menu.1.shadow_brow.description",
      discount: 0,
      duration: 10,
      img: `${imageLink}/brow/shadow/shadow`,
      imgCnt: 15
    }
  ],
  2: [
    {
      id: 4,
      name: "menu.2.blurring_lip.name",
      price: 180,
      description: "menu.2.blurring_lip.description",
      discount: 0,
      duration: 60,
      imgCnt: 11
    }
  ],
  3: [
    {
      id: 8,
      name: "menu.3.aegyo_sal.name",
      price: 80,
      description: "menu.3.aegyo_sal.description",
      discount: 0,
      duration: 30,
      imgCnt: 10
    }
  ],
  4: [
    {
      id: 9,
      name: "menu.4.yoonble_perm.name",
      price: 80,
      description: "menu.4.yoonble_perm.description",
      discount: 0,
      duration: 30,
      imgCnt: 11
    },
    {
      id: 10,
      name: "menu.4.keratin_lash.name",
      price: 80,
      description: "menu.4.keratin_lash.description",
      discount: 0,
      duration: 30,
      imgCnt: 0
    }
  ],
  5: [
    {
      id: 5,
      name: "menu.5.silk_eyeliner.name",
      price: 100,
      description: "menu.5.silk_eyeliner.description",
      discount: 0,
      duration: 60,
      img: `${imageLink}/eyeline/black/black`,
      imgCnt: 4
    },
    {
      id: 6,
      name: "menu.5.idol_brown_line.name",
      price: 80,
      description: "menu.5.idol_brown_line.description",
      discount: 0,
      duration: 30,
      img: `${imageLink}/eyeline/brown/brown`,
      imgCnt: 3
    }
  ],
  6: [
    {
      id: 11,
      name: "menu.6.beauty_mark.name",
      price: 80,
      description: "menu.6.beauty_mark.description",
      discount: 0,
      duration: 30,
      img: "/spot/",
      imgCnt: 5
    }
  ],
  7: [
    {
      id: 12,
      name: "menu.7.scar_removal.name",
      price: 80,
      description: "menu.7.scar_removal.description",
      discount: 0,
      duration: 30,
      imgCnt: 2
    }
  ],
  8: [
    {
      id: 7,
      name: "menu.8.crew_hairline.name",
      price: 80,
      description: "menu.8.crew_hairline.description",
      discount: 0,
      duration: 30,
      imgCnt: 1
    }
  ]
};

const pathToCategoryId: Record<string, number> = {
  brow: 1,
  lip: 2,
  eyefat: 3,
  eyelash: 4,
  eyeline: 5,
  mark: 6,
  scar: 7,
  hairline: 8,
};

export const getMenus = async (path?: string): Promise<IMenu[]> => {
  try {
    if (path !== undefined) {
      const categoryId = pathToCategoryId[path];
      return menuData[categoryId] || [];
    }
    return Object.values(menuData).flat();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getReviews = async (): Promise<IReview[]> => {
  try {
    const reviews: IReview[] = [];
    const languages = ['ko', 'ja'];

    languages.forEach((lang) => {
      for (let i = 0; i < 29; i++) { // 둘 다 28까지 존재..!
        reviews.push({
          id: reviews.length,
          img: `${imageLink}/review/${lang}/${i}.jpeg`,
          language: lang,
        });
      }
    });
    return reviews;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

