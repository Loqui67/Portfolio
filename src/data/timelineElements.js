import { t } from "@lingui/macro";

const rawElements = [
  {
    title: () => t`EngeeneringSchoolDiplomaTitle`,
    description: () => t`EngeeneringSchoolDiplomaDescription`,
    date: () => t`EngeeneringSchoolDiplomaDate`,
    future: true,
  },
  {
    title: () => t`StageA5Title`,
    description: () => t`StageA5Description`,
    date: () => t`StageA5Date`,
    future: true,
  },
  {
    title: () => t`StageA4Title`,
    description: () => t`StageA4Description`,
    date: () => t`StageA4Date`,
    future: true,
  },
  {
    title: () => t`StageA3Title`,
    description: () => t`StageA3Description`,
    date: () => t`StageA3Date`,
    future: false,
  },
  {
    title: () => t`StageA2Title`,
    description: () => t`StageA2Description`,
    date: () => t`StageA2Date`,
    future: false,
  },
  {
    title: () => t`EntryCesiTitle`,
    description: () => t`EntryCesiDescription`,
    date: () => t`EntryCesiDate`,
    future: false,
  },
  {
    title: () => t`BacTitle`,
    description: () => t`BacDescription`,
    date: () => t`BacDate`,
    future: false,
  },
  {
    title: () => t`highschoolTitle`,
    description: () => t`highschoolDescription`,
    date: () => t`highschoolDate`,
    future: false,
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
