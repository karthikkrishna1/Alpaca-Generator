import React from "react";

type Props = {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
};

const Nav = ({ activeNav, setActiveNav }: Props) => {
  const options: string[] = [
    "hair",
    "ears",
    "eyes",
    "mouth",
    "neck",
    "leg",
    "accessories",
    "background",
  ];
  console.log(activeNav);

  return (
    <div>
      <h2 className="text-left pl-4">Accesorize the Alpacas</h2>
      <div className="flex flex-wrap gap-3 w-12/12">
        {options.map((option) => (
          <button
            onClick={() => setActiveNav((curOption: string) => option)}
            className={` ${
              option == activeNav ? "bg-blue-500" : ""
            } text-center`}
            key={option}
            // onClick={() => setActive(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nav;
