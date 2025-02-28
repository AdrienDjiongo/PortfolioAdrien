import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex text-white text-2xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD]   my-auto ">#</span>
            About-me{" "}
          </p>
          <Image
            src="/Stroke.png"
            className="h-[1px] mt-4 hidden sm:block w-[27em] pr-10 "
            alt=""
            width={900}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mx-4 sm:mr-8 text-sm sm:text-xl text-[#ABB2BF] ">
        <p>Hello, i&aposm Adrien</p>
        <p>
          {" "}
          I am a passionate software developer and data analyst based in Douala,
          Cameroon. With expertise in both frontend and backend technologies. I
          build scalable, efficient web solutions. Additionally, my proficiency
          in some data analysis tools allows me to transform raw data into
          meaningful insights.
        </p>
        <p>
          {" "}
          Over the years, I have honed my skills through internships,
          collaborative projects, and self-driven learning, which you can
          explore in my portfolio. Currently diving deeper into data science and
          mobile development, I aim to create impactful tools that address
          real-world challenges. Beyond coding et data analysis, I&aposm an
          educator and a continuous learner, constantly striving to bridge the
          gap between technology and fields like finance and analytics.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
