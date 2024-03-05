import React, { useRef } from "react";
// import download from "downloadjs";
import { toPng } from "html-to-image";
import { AvatarStateType } from "../App";

type Props = {
  avatarState: AvatarStateType;
};

const Avatar = ({ avatarState }: Props) => {
  const avatarRef = useRef(null);
  const handleDownload = async () => {
    if (!avatarRef.current) return;
    toPng(avatarRef.current, { cacheBust: false }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = dataUrl;
      link.click();
      //   download(dataUrl, "my-alpaca.png");
    });
  };
  console.log(avatarState.eyes);
  return (
    <div ref={avatarRef} className="w-6/12 shrink-0">
      <div id="avatar-img" className="relative">
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

      <div className="absolute bottom-10">
        <button className="float-left ml-15 mr-20">Random</button>
        <button onClick={handleDownload} className="float-right ml-20">
          Download
        </button>
      </div>
    </div>
  );
};

export default Avatar;
