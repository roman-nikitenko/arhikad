import { PortfolioCardType, typeWork } from './types/portfolio.ts';
import construction1 from './assets/portfolio/constraction1.jpg';
import construction2 from './assets/portfolio/constraction2.jpg';
import construction3 from './assets/portfolio/constraction3.jpg';
import project1 from './assets/portfolio/project1/101-BB-01-pages-1.jpg';
import project2 from './assets/portfolio/project1/101-BB-01-pages-2.jpg';
import project3 from './assets/portfolio/project1/101-BB-01-pages-3.jpg';
import project4 from './assets/portfolio/project1/101-BB-01-pages-4.jpg';

export const portfolioList: PortfolioCardType[] = [
  {
    id: "1",
    title: "Building constracrions in Bucha",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.construction,
    backgroundImage: construction1,
    listOfWorks: [project1, project2, project3, project4]
  },
  {
    id: "2",
    title: "Kitchen remodeling in Hollywood Hills",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.design,
    backgroundImage: construction2,
    listOfWorks: [project1, project2, project3, project4]
  },
  {
    id: "3",
    title: "Office remodeling in Hollywood Hills",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.remodeling,
    backgroundImage: construction3,
    listOfWorks: [project1, project2, project3, project4]
  },
]