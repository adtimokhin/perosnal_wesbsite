import { useEffect, useState } from "react";
import SelectedProjectLine from "./SelectedProjectLine/SelectedProjectLine";
import { useInView } from "react-intersection-observer";
import MyContext from "../../../../utils/UseContext";

function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    console.log(value);

    if (inView) {
      import("../../../../data/projects.json")
        .then(({ projects }) => {
          // Set the projects data.
          setProjectsData(projects);
        })
        .catch((err) => {
          console.error("Failed to load projects data: ", err);
        });
    }
  }, [inView]);

  return (
    <MyContext.Consumer>
      <div className="w-full h-screen pt-[20vh]">
        {/* Selected Projects Display */}
        <div id="selected_projects" className="w-full relative">
          <h3
            className="text-[48px] font-display font-thin"
            style={
              {
                // color: `${value.theme.textColor == "none" ? "#ECF4E4" : value.theme.textColor}`,
              }
            }
          >
            {/* Selected Projects */}
            {value}
          </h3>

          <div
            id="line_projects"
            className="w-full flex flex-col justify-center items-center h-fit"
            ref={ref}
          >
            {inView &&
              projectsData.map((project) => (
                <SelectedProjectLine key={project.id} data={project} />
              ))}
          </div>
        </div>

        {/* TODO: Finish later */}
        {/* Other Projects Display */}

        {/* <div id="other_projects">
        <h3 className="text-[50px] font-display font-thin">Other Projects</h3>
        <div id="list_other_projects"></div>
      </div> */}
      </div>
    </MyContext.Consumer>
  );
}

export default Projects;
