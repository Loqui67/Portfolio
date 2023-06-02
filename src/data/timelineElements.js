import { t } from "@lingui/macro";

const rawElements = [
  // {
  //   title: () => t`EngeeneringSchoolDiplomaTitle`,
  //   description: () => t`EngeeneringSchoolDiplomaDescription`,
  //   date: () => t`EngeeneringSchoolDiplomaDate`,
  //   future: true,
  //   image: "/images/DiplomeInge.png",
  // },
  // {
  //   title: () => t`StageA5Title`,
  //   description: () => t`StageA5Description`,
  //   date: () => t`StageA5Date`,
  //   future: true,
  //   image: "/images/LastYearInternship.png",
  // },
  {
    title: () => t`StageA4Title`,
    description: () => t`StageA4Description`,
    date: () => t`StageA4Date`,
    future: true,
    image: "/images/StageEtranger.png",
  },
  {
    title: () => t`StageA3Title`,
    description: () => t`StageA3Description`,
    date: () => t`StageA3Date`,
    future: false,
    image: "/images/Thinkfab.png",
  },
  {
    title: () => t`StageA2Title`,
    description: () => t`StageA2Description`,
    date: () => t`StageA2Date`,
    future: false,
    image: "/images/Alcatel.png",
  },
  {
    title: () => t`EntryCesiTitle`,
    description: () => t`EntryCesiDescription`,
    date: () => t`EntryCesiDate`,
    future: false,
    image: "/images/CESI.png",
  },
  {
    title: () => t`BacTitle`,
    description: () => t`BacDescription`,
    date: () => t`BacDate`,
    future: false,
    image: "/Images/DiplomeBac.png",
  },
  {
    title: () => t`highschoolTitle`,
    description: () => t`highschoolDescription`,
    date: () => t`highschoolDate`,
    future: false,
    image: "/Images/Obernai_LycéeFreppel.png",
  },
];

export const elements = () =>
  rawElements.map((element, index) => ({
    id: index.toString(),
    ...element,
  }));

export const isValidElementId = (id) => {
  return id >= 0 && id < elements().length;
};
