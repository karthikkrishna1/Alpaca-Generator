import React from "react";

type Props = {
  options: string[];
  setOption: (el: string) => void;
  activeOption: string;
};

const Subnav = ({ options, setOption, activeOption }: Props) => {
  console.log(activeOption);
  return (
    <div>
      <h2>Style</h2>
      <div className="flex flex-wrap">
        {options.map((option: string) => {
          console.log(option === activeOption ? option : "false");

          return (
            <button
              className={`${option === activeOption ? "bg-blue-500" : ""}`}
              onClick={() => setOption(option)}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Subnav;
