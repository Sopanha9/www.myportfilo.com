export const Navigation = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="box-border caret-transparent hidden md:block"
    >
      <ul
        role="list"
        className="box-border caret-transparent list-none w-max mt-16 pl-0"
      >
        <li className="box-border caret-transparent">
          <a
            href="#about"
            className="items-center box-border caret-transparent flex py-3"
          >
            <span className="bg-neutral-700 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"></span>
            <span className="text-stone-500 text-xs font-medium box-border caret-transparent block tracking-[0.3px] leading-4 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              About
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="#experience"
            className="items-center box-border caret-transparent flex py-3"
          >
            <span className="bg-neutral-700 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"></span>
            <span className="text-stone-500 text-xs font-medium box-border caret-transparent block tracking-[0.3px] leading-4 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Experience
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="#education"
            className="items-center box-border caret-transparent flex py-3"
          >
            <span className="bg-neutral-700 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"></span>
            <span className="text-stone-500 text-xs font-medium box-border caret-transparent block tracking-[0.3px] leading-4 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Education
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="#references"
            className="items-center box-border caret-transparent flex py-3"
          >
            <span className="bg-neutral-700 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"></span>
            <span className="text-stone-500 text-xs font-medium box-border caret-transparent block tracking-[0.3px] leading-4 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              References
            </span>
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="#writing"
            className="items-center box-border caret-transparent flex py-3"
          >
            <span className="bg-neutral-700 box-border caret-transparent block h-px min-h-0 min-w-0 w-8 mr-4 md:min-h-[auto] md:min-w-[auto]"></span>
            <span className="text-stone-500 text-xs font-medium box-border caret-transparent block tracking-[0.3px] leading-4 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              Writing
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
