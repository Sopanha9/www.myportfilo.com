import { Header } from "@/sections/Header";
import { MainSection } from "@/sections/MainSection";

export const Container = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl min-h-[1000px] mx-auto px-6 py-12">
      <a
        href="#content"
        className="absolute text-black text-sm font-bold bg-white box-border caret-transparent block tracking-[1.4px] leading-5 uppercase translate-x-[-100.0%] px-4 py-3 border-2 border-solid border-white left-0 top-0"
      >
        Skip to Content
      </a>
      <div className="box-border caret-transparent gap-x-6 flex flex-col justify-normal gap-y-6 md:flex-row md:justify-between">
        <Header />
        <MainSection />
      </div>
    </div>
  );
};
