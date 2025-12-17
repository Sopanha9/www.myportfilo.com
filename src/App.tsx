import { ChatWidget } from "@/components/ChatWidget";
import { MainContent } from "@/sections/MainContent";

export const App = () => {
  return (
    <body className="text-stone-100 text-base not-italic normal-nums font-normal accent-auto bg-stone-950 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)_2px,rgba(245,243,237,0.01)_2px,rgba(245,243,237,0.01)_4px),radial-gradient(circle_at_20%_50%,rgba(217,119,6,0.03)_0px,rgba(0,0,0,0)_50%),radial-gradient(circle_at_80%_80%,rgba(217,119,6,0.02)_0px,rgba(0,0,0,0)_50%),none] bg-size-[auto,auto,auto,auto] box-border caret-transparent block tracking-[normal] leading-[26px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible bg-[position:0%,0%,0%,0%_0%,0%,0%,0%] border-separate font-dm_sans before:accent-auto before:bg-[radial-gradient(circle,rgba(0,0,0,0)_0px,rgba(0,0,0,0.4)_100%)] before:box-border before:caret-transparent before:text-stone-100 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:pointer-events-none before:fixed before:text-start before:indent-[0px] before:normal-case before:visible before:z-0 before:border-separate before:inset-0 before:font-dm_sans">
      <div className="absolute box-border caret-transparent block"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <ChatWidget />
        </div>
        <MainContent />
      </div>
    </body>
  );
};
