export enum typeWork {
  construction = "Будівництво",
  design = "Дизайн",
  remodeling = "Реконструкція",
}

export type PortfolioCardType = {
  id: string;
  title: string;
  subTitle: string;
  typeOfWork: typeWork;
  backgroundImage: string;
  listOfWorks: string[];
}