import ProjectDate from "./ProjectDate";
import ProjectImage from "./ProjectImage";
import ProjectSubTitle from "./ProjectSubTitle";
import ProjectTag, { DefaultIconSvg, ProjectTag2 } from "./ProjectTag";
import ProjectTitle from "./ProjectTitle";

const Typography = ({ variant, children }) => {
  const renderVariant = (variant, children) => {
    switch (variant) {
      case "h1":
        return <h1 className="text-2xl font-bold">{children}</h1>;
      case "h2":
        return <h2 className="text-xl font-bold">{children}</h2>;
      case "h3":
        return <h3 className="text-lg font-bold">{children}</h3>;
      case "h4":
        return <h4 className="text-lg font-bold">{children}</h4>;
      case "h5":
        return <h5 className="text-lg font-bold">{children}</h5>;
      case "subtitle1":
        return (
          <p className="text-[#FFFFFF8F] text-sm leading-[20px] font-normal text-red-700">
            {children}
          </p>
        );
      default:
        return <h1 className="text-2xl font-bold">{children}</h1>;
    }
  };

  return renderVariant(variant, children);
};

const ProjectList = ({ list = [] }) => {
  return (
    <main className="flex flex-col gap-y-8">
      {list.map((item, index) => {
        return (
          <div key={index} className="flex gap-x-6 w-full justify-between px-6">
            <div className="left w-full flex-1">
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-3">
                  <ProjectTag tag={item.type}>
                    <span>{!item.icon ? <DefaultIconSvg /> : item.icon}</span>
                  </ProjectTag>
                  <ProjectTag2 tag={item.type} icon={item.icon} />
                </div>
                <ProjectDate date={item.date} />
              </div>
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
            </div>
            <div className="right">
              <ProjectImage image={"https://placehold.co/184x184"} />
            </div>
          </div>
        );
      })}

      <Typography variant="subtitle1">
        I’m coding almost daily and I will be adding new projects here bi
        weekly, some free and some paid.
        <span className="text-white font-bold">Add your email</span> to be
        notified when a
        <span className="text-white font-bold pl-1">
          new projects is added.
        </span>
      </Typography>
    </main>
  );
};

export default ProjectList;
