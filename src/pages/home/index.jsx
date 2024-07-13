import { useState } from "react";
import Counter from "../../components/counter/idnex";
import Example from "../../components/example";
import BarChartSvg from "../../components/icons/BarchartSvg";
import CameraSvg from "../../components/icons/CameraSvg";
import ProjectList from "../../components/projects";

const listProject = [
  {
    type: "purple",
    date: "12 June 2024",
    title: "Portfolio Page",
    description: "This project is all about making your own portfolio page",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss", "Chrome"],
    price: "Free",
    image: "/project-1.png",
    url: "projects/portfolio-page-1/introduction",
    projectName: "portfolio-page-1",
    icon: <BarChartSvg />,
  },
  {
    type: "red",
    date: "12 Jun 2024",
    title: "Portfolio Page 2",
    description: "This project is all about making your own portfolio page 2",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss", "Chrome"],
    price: "Free",
    image: "/project-2.png",
    url: "projects/portfolio-page-2/introduction",
    projectName: "portfolio-page-2",
    icon: <CameraSvg />,
  },
  {
    type: "blue",
    date: "12 Jun 2024",
    title: "Portfolio Page 3",
    description: "This project is all about making your own portfolio page 3",
    difficulty: "Easy",
    category: "Frontend",
    tags: ["React", "Figma", "Tailwindcss", "Chrome"],
    price: "Free",
    image: "/project-2.png",
    url: "projects/portfolio-page-3/introduction",
    projectName: "portfolio-page-3",
    icon: <BarChartSvg />,
  },
];

function Home() {
  console.log("=================Render=================");
  const [count, setCount] = useState(0);

  const increaseCount = (count) => {
    setCount((prev) => prev + count);
  };
  const decreaseCount = (count) => {
    setCount(prev => prev - count);
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center flex-col">
      {/* <ProjectList list={listProject} /> */}
      <Counter
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </div>
  );
}

export default Home;
