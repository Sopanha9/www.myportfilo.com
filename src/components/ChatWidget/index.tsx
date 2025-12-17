import { ChatButton } from "@/components/ChatWidget/components/ChatButton";

export const ChatWidget = () => {
  return (
    <div className="fixed box-border caret-transparent z-50 right-4 bottom-4">
      <div
        role="status"
        className="absolute text-sm bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent leading-5 origin-[100%_100%] w-64 border border-amber-600/30 mb-2 p-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid right-0 -top-20 hover:bg-neutral-800"
      >
        Tired of reading resumes? Just ask me about Mike
        <div className="absolute bg-zinc-900 box-border caret-transparent h-4 translate-y-2 rotate-45 w-4 border-amber-600/30 border-b border-r border-solid right-4 bottom-0"></div>
      </div>
      <ChatButton />
    </div>
  );
};
