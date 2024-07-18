import { PortfolioCardType, typeWork } from './types/portfolio.ts';
import project1 from './assets/portfolio/project1/101-BB-01-pages-1.jpg';
import project2 from './assets/portfolio/project1/101-BB-01-pages-2.jpg';
import project3 from './assets/portfolio/project1/101-BB-01-pages-3.jpg';
import project4 from './assets/portfolio/project1/101-BB-01-pages-4.jpg';
import project2_1 from './assets/portfolio/project2/Screenshot 2024-07-01.png';
import project2_2 from './assets/portfolio/project2/Screenshot 2024-07-02.png';
import project2_3 from './assets/portfolio/project2/Screenshot 2024-07-03.png';
import project2_4 from './assets/portfolio/project2/Screenshot 2024-07-04.png';
import project3_1 from './assets/portfolio/project3/Screenshot 2024-07-01.png';
import project3_2 from './assets/portfolio/project3/Screenshot 2024-07-02.png';
import project3_3 from './assets/portfolio/project3/Screenshot 2024-07-03.png';

export const slogan = "Створення орієнтирів завтрашнього дня сьогодні"
export const phoneNumber = "(098) 005 54 04" 
export const address = "Вул Героїв Майдану 15 офіс 58, м.Буча"

export const portfolioList: PortfolioCardType[] = [
  {
    id: "1",
    title: "Building constracrions in Bucha",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.construction,
    backgroundImage: project1,
    listOfWorks: [project1, project2, project3, project4]
  },
  {
    id: "2",
    title: "Kitchen remodeling in Hollywood Hills",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.design,
    backgroundImage: project2_2,
    listOfWorks: [project2_1, project2_2, project2_3, project2_4]
  },
  {
    id: "3",
    title: "Office remodeling in Hollywood Hills",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.remodeling,
    backgroundImage: project3_3,
    listOfWorks: [project3_1, project3_3, project3_2]
  },
  {
    id: "3",
    title: "Office remodeling in Hollywood Hills",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
    typeOfWork: typeWork.remodeling,
    backgroundImage: project3_3,
    listOfWorks: [project3_1, project3_3, project3_2]
  },
]