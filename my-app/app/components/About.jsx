const About = () => {
  return (
    <div>
      <div className="flex text-white text-xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD]   my-auto ">#</span>
            About-me{" "}
          </p>
          <img
            src="/Stroke.png"
            className="h-[1px] mt-4 w-[27em] pr-10 "
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mr-8 text-xl text-[#ABB2BF] ">
        <p>Hello, i'm Adrien</p>
        <p>
          {" "}
          I am a dedicated software developer based in Douala, Cameroon, with a
          passion for creating innovative and efficient web solutions. With
          expertise in frontend technologies like React.js, Tailwind CSS, and
          JavaScript, I build user-focused applications that merge functionality
          and aesthetics. My background includes a BTS in software engineering
          and ongoing studies in statistics and big data, allowing me to combine
          technical development with data-driven insights.
        </p>
        <p>
          {" "}
          Over the years, I have honed my skills through internships,
          collaborative projects, and self-driven learning, which you can
          explore in my portfolio. Currently diving deeper into backend and
          mobile development, I aim to create impactful tools that address
          real-world challenges. Beyond coding, I'm an educator and a continuous
          learner, constantly striving to bridge the gap between technology and
          fields like finance and analytics.{" "}
        </p>
        <p className="text-white px-3 py-1 mx-6 my-4 border-[1px] border-[#C778DD] w-fit ">
          Read more {"~~>"}{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
