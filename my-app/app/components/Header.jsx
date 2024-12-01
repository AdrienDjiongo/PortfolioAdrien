import Image from "next/image";
import { Menu } from "lucide-react";

import "@fontsource/fira-code/400.css"; // Regular weight
import "@fontsource/fira-code/700.css"; // Bold weight (optional)

const Header = () => {
  return (
    <div>
      <div className=" flex text-white justify-between my-7 ">
        <p className="text-xl">Adrien</p>
        <Menu className=" sm:hidden" size={30} />
        <div className="gap-8 hidden sm:flex text-[#ABB2BF] ">
          <p>
            {" "}
            <span className="text-[#C778DD] ">#</span>Home
          </p>
          <p>
            <span className="text-[#C778DD] ">#</span>Works
          </p>
          <p>
            <span className="text-[#C778DD] ">#</span>About-me
          </p>
          <p>
            <span className="text-[#C778DD] ">#</span>contacts
          </p>
        </div>
      </div>

      <div className="flex gap-5 text-white">
        <div>
          <h1 className={` lg:text-5xl  text-2xl sm:text-4xl`}>
            Adrien is a{" "}
            <span className="text-[#C778DD] ">Fullstack developer</span>, and a{" "}
            <span className="text-[#C778DD] ">Mobile developer</span>. very soon
            also a <span className="text-[#C778DD] ">Data analyst</span>{" "}
          </h1>
          <p className="text-[#ABB2BF] text-lg max-w-[75%]">
            able to build responsive and attractive websites, web applications
            and mobile applications
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
    </div>
  );
};

export default Header;
