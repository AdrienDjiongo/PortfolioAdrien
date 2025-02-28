import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-5 text-white">
      <div>
        <h1 className={` lg:text-5xl  text-2xl sm:text-4xl`}>
          Adrien is a{" "}
          <span className="text-[#C778DD] ">Fullstack developer</span>, and also
          a <span className="text-[#C778DD] ">Data analyst</span>{" "}
        </h1>
        <p className="text-[#ABB2BF] text-lg max-w-[83%] sm:max-w-[75%]">
          able to build responsive and attractive websites, web applications,
          transform raw data into impactful informations by the aid of
          dashboards
        </p>
      </div>

      <Image
        className=" sm:block hidden bg-[url('/bg-me.png')]"
        src="/me1.png"
        alt="burger image "
        width={250}
        height={45}
      />
    </div>
  );
};

export default Hero;
