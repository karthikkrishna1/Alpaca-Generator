import React from "react";
import { AvatarStateType } from "../App";

type Props = {
  avatarState: AvatarStateType;
};

const Avatar = ({ avatarState }: Props) => {
  console.log(avatarState.eyes);
  return (
    <div className="flex flex-col w-6/12 shrink-0">
      <div className="relative">
        <img
          className="absolute z-10"
          src={`src\\assets\\mouth\\${avatarState.mouth}.png`}
          alt="mouth"
        />
        <img
          className="absolute z-10"
          src={`src\\assets\\accessories\\${avatarState.accessories}.png`}
        />
        <img
          className="absolute"
          src={`src\\assets\\backgrounds\\${avatarState.background}.png`}
        />
        <img
          className="absolute"
          src={`src\\assets\\ears\\${avatarState.ears}.png`}
        />
        <img
          className="z-20 absolute"
          src={`src\\assets\\eyes\\${avatarState.eyes}.png`}
        />
        <img
          className="absolute z-0"
          src={`src\\assets\\hair\\${avatarState.hair}.png`}
        />
        <img
          className="absolute"
          src={`src\\assets\\leg\\${avatarState.leg}.png`}
        />

        <img
          className="absolute"
          src={`src\\assets\\neck\\${avatarState.neck}.png`}
        />
        <img
          className="absolute"
          src={`src\\assets\\${avatarState.nose}.png`}
        />
      </div>

      <div className="flex flex-row">
        <button className="">Random</button>
        <button className="">Download</button>
      </div>
    </div>
  );
};

export default Avatar;
