"use client";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const page = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <div className="max-w-[1100px] text-white mx-auto">
      <Header />

      <p className="text-3xl">
        <span className="text-[#C778DD] ">/</span>Projects
      </p>
      <p className=" text-sm "> list of my projects</p>

      <div>
        <div className="flex text-white text-3xl my-10 justify-between ">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD] my-auto ">#</span>
            Complete apps{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-6 mx-4 mb-4 ">
          {projects.map((p) => (
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

        {/*  <div className="flex text-white text-3xl my-14 justify-between ">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD] my-auto ">#</span>
            Small projects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-6 mx-4 ">
          <div className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  ">
            <img src="/project-img2.png" className="w-full " alt="" />
            <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
              {" "}
              PHP Javascript SQL{" "}
            </p>
            <h1 className="px-5 text-2xl text-white ">
              {" "}
              Instant messaging web app
            </h1>
            <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
              {" "}
              minecraft server hosting
            </p>
            <p className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit ">
              View {"<~>"}{" "}
            </p>
          </div>
          <div className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  ">
            <img src="/project-img1.png" className="w-full " alt="" />
            <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
              {" "}
              PHP Javascript SQL{" "}
            </p>
            <h1 className="px-5 text-2xl text-white ">
              {" "}
              Instant messaging web app
            </h1>
            <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
              {" "}
              minecraft server hosting
            </p>
            <p className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit ">
              View {"<~>"}{" "}
            </p>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default page;
