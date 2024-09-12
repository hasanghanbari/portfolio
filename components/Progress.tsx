import React from "react";

const Progress = ({ title, persent }: { title: string; persent: string }) => {
  return (
    <div className="pb-[15px]">
      <div className="mb-1 text-base font-semibold text-black-500 dark:text-black-500 text-[24px]">
        {title}
      </div>
      <div className="w-full bg-orange-200 rounded-full h-2.5 mb-4 dark:bg-black-50">
        <div
          className={`bg-orange-500 h-2.5 rounded-full`}
          style={{width: persent}}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
