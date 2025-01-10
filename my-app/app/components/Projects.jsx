"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("Projects.json")
      .then((response) => {
        console.log("just fetched and final filter value is");
        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.project);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(projects);

  return (
    <div>
      <div className="flex text-white text-2xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD] my-auto ">#</span>
            Projects{" "}
          </p>
          <img
            src="/Stroke.png"
            className="h-[1px] hidden sm:block mt-4 w-[30em] pr-10 "
            alt=""
          />
        </div>

        <div className="">
          <Link href="/projects"> View all ~~{">"}</Link>
        </div>
      </div>

      {!projects ? (
        <div className="text-6xltext-white "> LOADING PROJECTS.... </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 gap-y-6 mx-4 ">
          {" "}
          {projects.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  "
            >
              <img src={`/${p.img}`} className="w-full " alt="" />
              <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
                {" "}
                {p.technos}
              </p>
              <h1 className="px-5 text-2xl text-white "> {p.name}</h1>
              <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
                {" "}
                minecraft server hosting
              </p>
              <p className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit ">
                View {"<~>"}{" "}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
