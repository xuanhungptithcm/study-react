import { useEffect, useReducer, useState } from "react";
import Counter from "../../components/counter/idnex";
import Example from "../../components/example";
import BarChartSvg from "../../components/icons/BarchartSvg";
import CameraSvg from "../../components/icons/CameraSvg";
import ProjectList from "../../components/projects";
import Pokemon from "../../components/pokemon";

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

// useState
// 1. initial state
// 2. function to update state

// useReducer
// 1. initial state
// 2. reducer function
// 3. dispatch
// 4. action

const INIT_STATE = 0;
const reducerCount = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state - action.payload;
    case "Nhan":
      return state * 2;
    case "Chia":
      return state / 2;
    case "BinhPhuong":
      return state * state;
    default:
      throw new Error("Invalid Action");
  }
};

function Home() {
  const [isShowCounter, setIsShowCounter] = useState(false);
  const [countS, dispatch] = useReducer(reducerCount, INIT_STATE);

  const increaseCount = (count) => {
    dispatch({ type: "INCREASE", payload: count });
  };
  const decreaseCount = (count) => {
    dispatch({ type: "DECREASE", payload: count });
  };

  // useEffect(() => {
  //   console.log("useEffect without dependency");
  // });

  // useEffect(() => {
  //   console.log("useEffect with empty dependency");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect with countS dependency");
  // }
  // , [countS]);

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center flex-col">
      {/* <ProjectList list={listProject} /> */}
      <div className="flex flex-col items-center gap-y-4">
        <button
          className="bg-red-600 text-white"
          onClick={() => setIsShowCounter((prev) => !prev)}
        >
          {!isShowCounter ? "Show" : "Hide"} counter
        </button>
        {isShowCounter && (
          <Counter
            count={countS}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
          // <Pokemon />
        )}
      </div>
    </div>
  );
}

export default Home;
