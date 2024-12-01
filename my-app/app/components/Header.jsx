import { Menu } from "lucide-react";

import "@fontsource/fira-code/400.css"; // Regular weight
import "@fontsource/fira-code/700.css"; // Bold weight (optional)

const Header = () => {
  return (
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
  );
};

export default Header;
