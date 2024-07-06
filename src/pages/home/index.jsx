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
  },
]

function Home() {
  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center flex-col">
      <ProjectList list={listProject}/>
    </div>
  );
}

export default Home;
