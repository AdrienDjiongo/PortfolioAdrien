const Skills = () => {
  return (
    <div>
      <div className="flex text-white text-2xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD]  my-auto ">#</span>
            Education and skills{" "}
          </p>
          <img
            src="/Stroke.png"
            className="h-[1px] hidden sm:block mt-4 w-[27em] pr-10 "
            alt=""
          />
        </div>
      </div>
      <div className="grid mx-auto  grid-cols-7 gap-4 my-10 p-6 text-xl bg-[url('/bg-skills-edu.png')]   ">
        <div className=" col-span-7 sm:col-span-3 border-[1px] bg-[#5f6775] sm:w-fit px-4 rounded-lg border-[#ABB2BF]  ">
          <p className="text-white p-2 border-b-[1px] border-[#ABB2BF]  ">
            Diplomas
          </p>
          <div className="m-4 flex flex-col gap-4  ">
            {" "}
            <p className="text-[#ABB2BF]  ">
              2025 - Bachelor in statistics & big data
            </p>
            <p className="text-[#ABB2BF]">2024 - HND in software engineering</p>
          </div>
        </div>
        <div className=" bg-[#5f6775] sm:w-fit px-4 rounded-lg col-span-7 sm:col-span-3 border-[1px] border-[#ABB2BF]  ">
          <p className="text-white p-2 border-b-[1px] border-[#ABB2BF]  ">
            Programming languages
          </p>
          <div className="m-4 flex flex-col gap-4">
            {" "}
            <p className="text-[#ABB2BF]">Javascript, PHP</p>
            <p className="text-[#ABB2BF]">SQL, HTML, CSS</p>
          </div>
        </div>
        <div className=" bg-[#5f6775] sm:w-fit px-4 rounded-lg col-span-7 sm:col-span-3 border-[1px] border-[#ABB2BF]  ">
          <p className="text-white p-2 border-b-[1px] border-[#ABB2BF]  ">
            Frameworks and libraries
          </p>
          <div className="m-4 flex flex-col gap-4">
            {" "}
            <p className="text-[#ABB2BF]">React.js, Express.js, Node.js</p>
            <p className="text-[#ABB2BF]">Next.js, Tailwind.css </p>
          </div>
        </div>
        <div className=" bg-[#5f6775] sm:w-fit px-4 rounded-lg col-span-7 sm:col-span-4 border-[1px] border-[#ABB2BF]  ">
          <p className="text-white p-2 border-b-[1px] border-[#ABB2BF]  ">
            Database & Bigdata
          </p>
          <p className="text-[#ABB2BF] m-4">MySQL, PostgreSQL, MongoDB</p>
          <p className="text-[#ABB2BF] m-4">SPSS, Power BI</p>
          <p className="text-[#ABB2BF] m-4">Microsoft access, Excel</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
