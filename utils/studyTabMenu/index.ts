export const TabMenus = [
  "전체",
  "프론트엔드",
  "백엔드",
  "디자인",
  "기획",
  "모바일",
] as const;

export const TabTechStacks = {
  전체: {
    React: false,
    Vue: false,
    Angular: false,
    Spring: false,
    Django: false,
    Nestjs: false,
    iOS: false,
    Android: false,
  },
  프론트엔드: {
    React: false,
    Vue: false,
    Angular: false,
    Svelte: false,
    Nodejs: false,
    TypeScript: false,
    JavaScript: false,
    Nextjs: false,
  },
  백엔드: {
    Java: false,
    Kotlin: false,
    Python: false,
    MySQL: false,
    MongoDB: false,
    Spring: false,
    Django: false,
    Nestjs: false,
  },
  디자인: {
    Figma: false,
    Ai: false,
    Ps: false,
    Cinema4D: false,
    Id: false,
    Xd: false,
    Ae: false,
  },
  기획: {
    Notion: false,
    Miro: false,
    Figma: false,
  },
  모바일: {
    iOS: false,
    Android: false,
    ReactNative: false,
    Swift: false,
    Flutter: false,
    Kotilin: false,
  },
};

export type TabMenuType = keyof typeof TabTechStacks;

export type TechStacks = typeof TabTechStacks[TabMenuType];

export type TechStacksKeys = keyof TechStacks;
