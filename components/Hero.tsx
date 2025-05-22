import React from "react";
import { LinkPreview } from "./LinkPreview";

export const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 md:mt-20 px-8 ">
      <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
        I'm an Analytics Professional, I love to generate insights through data{" "}
        <span className="text-cyan-500">I love to code as well.</span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
        I have around 9 years of analytics experience churning data and churning numbers to generate valuable insights 
        for companies to take better
      </p>
      <div className="mt-8 text-zinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
        Building{" "}
        <LinkPreview
          className={
            "text-zinc-200 font-bold hover:text-cyan-500 transition duration-150 outline-none"
          }
          url="https://www.purpleberryai.com"
        >
          Purpleberry AI
        </LinkPreview>{" "}
        {/* and{" "}
        <LinkPreview
          className={
            "text-zinc-200 font-bold hover:text-cyan-500 transition duration-150"
          }
          url="https://www.aceternity.com"
        >
          Aceternity
        </LinkPreview>{" "} */}
        when I'm not working on my day job.
      </div>
    </div>
  );
};
