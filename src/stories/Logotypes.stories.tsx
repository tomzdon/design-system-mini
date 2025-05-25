import type { Meta } from "@storybook/react";
import LightLogo1 from "../assets/logo-color.svg";
import LightLogo2 from "../assets/logo-dark.svg";
import LightLogo3 from "../assets/logo-short-color.svg";
import LightLogo4 from "../assets/logo-short-black.svg";

import DarkLogo1 from "../assets/logo-color-dark.svg";
import DarkLogo2 from "../assets/logo-light.svg";
import DarkLogo3 from "../assets/logo-short-dark.svg";
import DarkLogo4 from "../assets/logo-short-light.svg";
import "../index.css";
export default {
  title: "Design System/Logotypes",
} as Meta;

const LogoGroup = ({
                     logos,
                     theme,
                   }: {
  logos: string[];
  theme: "light" | "dark";
}) => {
  const isDark = theme === "dark";
  const bg = isDark ? "bg-[#0d1224]" : "bg-neutral-50";
  const border = isDark ? "" : "border border-neutral-200";

  return (
    <div className={`${bg} rounded-xl p-10 ${border} space-y-6 flex flex-col justify-center align-center w-full`}>
      {logos.map((src, index) => (
        <div key={index} className=" flex justify-center gap-4 ">
          <img src={src} alt={`Logo ${index + 1}`} className="h-10 md:h-12" />
        </div>
      ))}
    </div>
  );
};

export const Logotypes = () => {
  return (
    <div className="space-y-8 bg-white dark:bg-[#FAFAFA] p-6">
      <div>
        <h1 className="mb-2">Logotypes</h1>
        <p className="mb-4">
          Displays the primary logo or a variation used to represent the brand
          visually.
        </p>
      </div>

      <LogoGroup
        theme="light"
        logos={[LightLogo1, LightLogo2, LightLogo3, LightLogo4]}
      />

      <LogoGroup
        theme="dark"
        logos={[DarkLogo1, DarkLogo2, DarkLogo3, DarkLogo4]}
      />
    </div>
  );
};
