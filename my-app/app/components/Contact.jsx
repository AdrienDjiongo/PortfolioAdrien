const Contact = () => {
  return (
    <div>
      <div className="flex text-white text-xl my-10 justify-between ">
        <div className="flex  gap-2">
          <p className="my-auto">
            {" "}
            <span className="text-[#C778DD]   my-auto ">#</span>
            Contact{" "}
          </p>
          <img
            src="/Stroke.png"
            className="h-[1px] mt-4 w-[27em] pr-10 "
            alt=""
          />
        </div>
      </div>

      <p className="text-[#ABB2BF] text-xl">
        I'm interested in freelance opportunities. However, if you have other
        request or question, don’t hesitate to contact me
      </p>
    </div>
  );
};

export default Contact;
