const Projects = () => {
  return (
    <div>
      <div className="flex text-white text-xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD]   my-auto ">#</span>
            Projects{" "}
          </p>
          <img
            src="/Stroke.png"
            className="h-[1px] mt-4 w-[30em] pr-10 "
            alt=""
          />
        </div>

        <div className="">
          <p> View all ~~{">"}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  ">
          <img src="/project1.jpg" className="w-full " alt="" />
          <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
            {" "}
            React.js Tailwind{" "}
          </p>
          <h1 className="px-5 text-2xl text-white "> Task management app</h1>
          <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
            {" "}
            minecraft server hosting
          </p>
          <p className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit ">
            View {"<~>"}{" "}
          </p>
        </div>
        <div className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  ">
          <img src="/project2.jpg" className="w-full " alt="" />
          <p className="p-3 text-[#ABB2BF] mb-3 border-b-[1px] border-[#ABB2BF] ">
            {" "}
            Next.js Tailwind Express.js MongoDB{" "}
          </p>
          <h1 className="px-5 text-2xl text-white "> E-Fastfood order app</h1>
          <p className="py-1 px-5 text-sm text-[#ABB2BF] ">
            {" "}
            minecraft server hosting
          </p>
          <p className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit ">
            View {"<~>"}{" "}
          </p>
        </div>
        <div className="flex flex-col border-[1px] border-[#ABB2BF] col-span-1  ">
          <img src="/project3.jpg" className="w-full " alt="" />
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
      </div>
    </div>
  );
};

export default Projects;
