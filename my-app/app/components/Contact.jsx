import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="mb-10">
      <div className="flex text-white text-2xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD]   my-auto ">#</span>
            Contact{" "}
          </p>
          <img
            src="/Stroke.png"
            className="h-[1px] hidden sm:block mt-4 w-[27em] pr-10 "
            alt=""
          />
        </div>
      </div>

      <p className="text-[#ABB2BF] mx-4 text-xl">
        I'm interested in freelance opportunities. However, if you have other
        request or question, don't hesitate to contact me
      </p>

      <div className="border-[1px] text-[#ABB2BF] p-4 w-fit flex flex-col gap-3 my-10 mx-auto  border-[#ABB2BF] ">
        <p className="text-white border-[#ABB2BF] border-b-[1px] pb-1  ">
          Message me here
        </p>
        <div className="flex flex-col gap-2">
          {" "}
          <div className="flex gap-4 ">
            <Phone size={25} strokeWidth={1.3} />
            <p className="">+237 697 662 945</p>
          </div>
          <div className="flex gap-4 ">
            <Mail size={25} strokeWidth={1.3} />
            <p className="">AdrienDjiongo@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
