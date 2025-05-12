"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Experience = () => {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.experience);
      });
  }, []);

  return (
    <div className="container text-white mx-auto p-4">
      <div className="flex  text-2xl my-10     gap-2">
        <p className="my-auto">
          {" "}
          <span className="text-[#C778DD]  my-auto ">#</span>
          Experience(8 months){" "}
        </p>
        <Image
          src="/Stroke.png"
          className="h-[1px] hidden sm:block mt-4 w-[27em] pr-10 "
          width={900}
          height={400}
          alt=""
        />
      </div>{" "}
      {!skills ? (
        <div className="text-6xl text-white "> LOADING SKILLS.... </div>
      ) : (
        <div className="relative -mx-2 ">
          <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          <ul className="space-y-8">
            {skills.map((experience) => (
              <li
                key={experience.id}
                className={`flex ${
                  experience.id % 2 !== 0 ? "justify-start" : "justify-end"
                } items-center w-full`}
              >
                <div
                  className={`w-1/2 -mx-2 border-[1px] border-[#ABB2BF]  ${
                    experience.id % 2 === 0 ? " pr-2 sm:pr-8" : " pl-2 sm:pl-8"
                  }`}
                >
                  <div className=" p-1  sm:p-4 rounded shadow-lg">
                    <h3 className="sm:text-xl ">
                      {experience.role} at{" "}
                      <span className="text-[#C778DD]">
                        {" "}
                        {experience.company}{" "}
                      </span>
                    </h3>
                    <p className=" text-sm sm:text-base text-gray-400">
                      {experience.duration}
                    </p>
                    <p className=" text-sm sm:text-base mt-2">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Experience;
