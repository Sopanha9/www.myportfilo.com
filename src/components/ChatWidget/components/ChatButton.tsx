export const ChatButton = () => {
  return (
    <button
      aria-label="Open chat"
      className="relative text-white bg-amber-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] caret-transparent text-center p-4 rounded-bl rounded-br rounded-tl rounded-tr hover:bg-amber-700"
    >
      <img
        src="https://c.animaapp.com/mj9qaqh0C8o0vq/assets/icon-1.svg"
        alt="Icon"
        className="box-border caret-transparent h-6 w-6"
      />
      <span
        aria-label="1 unread message"
        className="absolute text-xs items-center bg-red-600 box-border caret-transparent flex h-5 justify-center leading-4 w-5 rounded-full -right-1 -top-1"
      >
        1
      </span>
    </button>
  );
};
