export enum typeWork {
  construction = "Construction",
  design = "Design",
  remodeling = "Remodeling",
}

export type PortfolioCardType = {
  id: string;
  title: string;
  subTitle: string;
  typeOfWork: typeWork;
  backgroundImage: string;
  listOfWorks: string[];
}