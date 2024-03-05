import { useState } from "react";

import Heading from "./components/Heading";
import Avatar from "./components/Avatar";
import Nav from "./components/Nav";
import Subnav from "./components/Subnav";

export interface AvatarStateType {
  [key: keyof TotalOptions]: string;
}

export interface TotalOptions {
  [key: string]: string[];
}
const totalOptions: TotalOptions = {
  hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
  ears: ["default", "tilt-backward", "tilt-forward"],
  background: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
  leg: [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  mouth: ["astonished", "default", "eating", "laugh", "tongue"],
  neck: ["bend-backward", "bend-forward", "default", "thick"],
  accessories: ["earings", "flower", "glasses", "headphone"],
  nose: ["nose"],
};

function App() {
  const [AvatarState, setAvatarState] = useState<AvatarStateType>({
    ears: "default",
    hair: "default",
    mouth: "default",
    neck: "default",
    leg: "default",
    background: "blue50",
    accessories: "headphone",
    eyes: "default",
    nose: "nose",
  });

  const [activeNav, setActiveNav] = useState<string>("hair");
  const setOption = (e: string) => {
    setAvatarState((oldState) => {
      let newState = { ...oldState };
      console.log(activeNav);
      newState[activeNav as keyof AvatarStateType] = e;
      return newState;
    });
  };

  return (
    <main className="flex flex-col">
      <Heading />
      <div className="flex flex-row space-x-4">
        <Avatar avatarState={AvatarState} />
        <div className="flex flex-col">
          <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
          <Subnav
            options={totalOptions[activeNav]}
            activeOption={AvatarState[activeNav as keyof AvatarStateType]}
            setOption={setOption}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
