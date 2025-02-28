"use client";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const [projects, setProjects] = useState(null);

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
    <div className="max-w-[1100px] text-white mx-auto my-4">
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
            Big data projects{" "}
          </p>
        </div>
        {!projects ? (
          <div className="text-6xl text-white "> LOADING PROJECTS.... </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-6 mx-4 mb-4 ">
            {projects
              .filter((projects) => projects.type == "big data")
              .map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  "
                >
                  <Image
                    width={900}
                    height={400}
                    src={`/${p.img}`}
                    className="w-full "
                    alt=""
                  />
                  <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
                    {" "}
                    {p.technos}
                  </p>
                  <h1 className="px-5 text-2xl text-white "> {p.name}</h1>
                  <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
                    {p.description}
                  </p>
                  <Link
                    href={`${p.url}`}
                    target="_blank"
                    className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit "
                  >
                    View {"<~>"}{" "}
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
      <div>
        <div className="flex text-white text-3xl my-10 justify-between ">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD] my-auto ">#</span>
            Software dev projects
          </p>
        </div>
        {!projects ? (
          <div className="text-6xl text-white "> LOADING PROJECTS.... </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-6 mx-4 mb-4 ">
            {projects
              .filter((projects) => projects.type == "Software")
              .map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  "
                >
                  <Image
                    width={900}
                    height={400}
                    src={`/${p.img}`}
                    className="w-full "
                    alt=""
                  />
                  <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
                    {" "}
                    {p.technos}
                  </p>
                  <h1 className="px-5 text-2xl text-white "> {p.name}</h1>
                  <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
                    {p.description}
                  </p>
                  <Link
                    href={`${p.url}`}
                    target="_blank"
                    className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit "
                  >
                    View {"<~>"}{" "}
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
