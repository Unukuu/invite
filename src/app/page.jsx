"use client";

import { useState } from "react";
import Invite from "./components/invite";

export default function Home() {
  const [yesorno, setYesorno] = useState(false);
  console.log(yesorno);
  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center w-full h-full p-10">
      <p className="text-3xl font-bold">Орой болзох уу ?</p>
      <div className="flex gap-3 items-center justify-center">
        <button
          onClick={() => {
            setYesorno(true);
          }}
          className="btn btn-accent"
        >
          Yes
        </button>
        <button
          onClick={() => {
            setYesorno(true);
          }}
          className="btn btn-ghost"
        >
          No
        </button>
      </div>
      <div>{yesorno ? <Invite /> : ""}</div>
    </div>
  );
}
