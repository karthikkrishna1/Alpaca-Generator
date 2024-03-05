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
      <div className="flex flex-wrap">
        {options.map((option) => (
          <button
            onClick={() => setActiveNav((curOption: string) => option)}
            className={`w-4/12 ${option == activeNav ? "bg-blue-500" : ""}`}
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
