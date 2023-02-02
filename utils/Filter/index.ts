export const FilterMenus = [
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
    HTML: false,
    CSS: false,
    JavaScript: false,
    TypeScript: false,
    React: false,
    Vue: false,
    Svelte: false,
    Angular: false,
    jQuery: false,
    Nextjs: false,
    Redux: false,
  },
  백엔드: {
    Java: false,
    Kotlin: false,
    Nodejs: false,
    Python: false,
    MongoDB: false,
    MySQL: false,
    MariaDB: false,
    PostgreSQL: false,
    Redis: false,
    Spring: false,
    SpringBoot: false,
    Nestjs: false,
    Django: false,
    PHP: false,
    Docker: false,
  },
  디자인: {
    Figma: false,
    Sketch: false,
    Ai: false,
    Ps: false,
    InDesign: false,
    Ae: false,
  },
  기획: {
    Notion: false,
  },
  모바일: {
    Flutter: false,
    Swift: false,
  },
};

export type FilterMenuType = keyof typeof TabTechStacks;

export type TechStacks = typeof TabTechStacks[FilterMenuType];

export type TechStacksKeys = keyof TechStacks;
