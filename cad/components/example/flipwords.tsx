import React from "react";
import { FlipWords } from "../ui/flip-words";

function FlipWordsDemo() {
  const a = ["From"];
  const b = ["Chaos"];
  const c = ["to"];
  const d = ["Clarity:"];
  const e = ["Clavel"];
  const f = ["Advertising"];
  const g = ["Marketing's"];
  const h = ["Virtual Assistant"];
  const i = ["Services"];

  return (
    <div className="h-[80vh] flex justify-center items-center ">
      <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={a} />
        <FlipWords words={b} />
        <FlipWords words={c} />
        <FlipWords words={d} />
        <FlipWords words={e} />
        <FlipWords words={f} />
        <FlipWords words={g} />
        <FlipWords words={h} />
        <FlipWords words={i} />
      </div>
    </div>
  );
}
export default FlipWordsDemo;
