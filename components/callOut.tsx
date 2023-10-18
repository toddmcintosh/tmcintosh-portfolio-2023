import React from "react";

interface ReusableBoxProps {
  children: JSX.Element | JSX.Element[] | string;
}

const CallOut: React.FC<ReusableBoxProps> = ({ children }) => {
  return (
    <div
      className="grid md:grid-cols-[5px_auto_5px] md:grid-rows-none grid-rows-[5px_auto_5px] clear-both mb-16 md:mb-8 font-light text-lg leading-10 bg-cover"
      style={{
        backgroundImage:
          'linear-gradient(rgba(17, 24, 39, 0.9) 40%, rgba(17, 24, 39, 0.1) 90%), url("/pexels-brett-sayles-4508745.jpg")',
      }}
    >
      <div className="border-x border-t md:border-x-0  md:border-y md:border-l bg-black/5 dark:bg-white/5 md:rounded-s  rounded-t  border-purple-500/50"></div>
      <div className=" bg-black/5 dark:bg-white/5 py-4 px-6  text-purple-500 ">
        <div className="inline p-1 px-2 bg-black/70  leading-10 box-decoration-clone">
          {children}
        </div>{" "}
      </div>
      <div className="border-x border-b md:border-x-0 md:border-y md:border-r bg-black/5 dark:bg-white/5 rounded-b md:rounded-e border-purple-500/50 "></div>
    </div>
  );
};

interface SectionTitleProps {
  text: String;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    // <div className="mb-4 text-lg font-bold text-orange-500 py-4 px-4   text-left bg-black/5 dark:bg-white/5 rounded items-center border-orange-300 border-b">
    <div className="mb-2 text-lg font-bold text-orange-600 text-left ">
      {text}
    </div>
  );
};

export default CallOut;
