import { Navigation } from "@/sections/Header/components/Navigation";
import { SocialLinks } from "@/sections/Header/components/SocialLinks";

export const Header = () => {
  return (
    <header
      role="banner"
      className="box-border caret-transparent flex-col max-h-none w-full py-24 top-auto md:max-h-[1000px] md:w-2/5 md:top-0"
    >
      <div className="box-border caret-transparent">
        <h1 className="text-5xl font-semibold box-border caret-transparent tracking-[-1.2px] leading-[52.8px] font-fraunces md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">
          <a
            href="/"
            className="text-5xl box-border caret-transparent tracking-[-1.2px] leading-[52.8px] md:text-6xl md:tracking-[-1.5px] md:leading-[60px]"
          >
            Mike Lembo
          </a>
        </h1>
        <h2 className="text-amber-600 text-base font-medium box-border caret-transparent tracking-[0.4px] leading-6 mt-4 font-dm_mono md:text-lg md:tracking-[0.45px] md:leading-7">
          Product Manager
        </h2>
        <p className="text-stone-400 box-border caret-transparent max-w-md mt-6">
          15 years of experience across Digital Assets, Fintech, RegTech, and
          Government.
        </p>
        <Navigation />
        <SocialLinks />
      </div>
    </header>
  );
};
