"use client";
import React from "react";
import { useState, useEffect } from "react";

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
      <div className="flex  text-2xl my-10 justify-between   gap-2">
        <p className="my-auto">
          {" "}
          <span className="text-[#C778DD]  my-auto ">#</span>
          Experience(5 months){" "}
        </p>
        <img
          src="/Stroke.png"
          className="h-[1px] hidden sm:block mt-4 w-[27em] pr-10 "
          alt=""
        />
      </div>{" "}
      {!skills ? (
        <div className="text-6xl text-white "> LOADING SKILLS.... </div>
      ) : (
        <div className="relative">
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
                    experience.id % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
                >
                  <div className="  p-4 rounded shadow-lg">
                    <h3 className="text-xl font-semibold">
                      {experience.role} at {experience.company}
                    </h3>
                    <p className="text-gray-400">{experience.duration}</p>
                    <p className="mt-2">{experience.description}</p>
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
