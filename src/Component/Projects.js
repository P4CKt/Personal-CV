import React from "react";
import NewProjects from "./Projects/NewProjects";
function Projects() {
  return (
    <section className="bg-[#FFFFFF] font-['Inter'] pt-[5.2rem]">
      <h1 className="font-[500] font-['Inter']  text-[36px] tracking-[.01em] leading-[44px]">
        Projects
      </h1>
      <div className="mx-[18rem]">
        <NewProjects />
      </div>
    </section>
  );
}

export default Projects;
