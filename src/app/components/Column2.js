import React from "react";

export default function Column2({ column_text_1, column_body_2 }) {
  return (
    <div className="md:flex mx-5 md:mx-0 relative underline-c pb-[100px] justify-center section">
      <div className="w-fit md:w-2/4 md:px-20 pb-10">
        <h2>{column_text_1}</h2>
      </div>
      <div className="flex flex-col gap-y-10">
        {column_body_2.map((el) => (
          <div key={el.id} className="flex gap-x-2 md:gap-x-7">
            <div className="flex md:w-fit items-start">
              <img className="" src="/assets/images/icon-bullet-point.svg" alt="" />
            </div>
            <div className="flex w-fit flex-col gap-y-4 md:w-4/6">
              <h3>{el.header}</h3>
              <p className="">{el.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
