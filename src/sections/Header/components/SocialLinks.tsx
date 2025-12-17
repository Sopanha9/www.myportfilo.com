export const SocialLinks = () => {
  return (
    <ul
      aria-label="Social links"
      role="list"
      className="items-center box-border caret-transparent flex list-none ml-1 mt-8 pl-0"
    >
      <li className="text-xs box-border caret-transparent shrink-0 leading-4 mr-5">
        <a
          href="https://www.linkedin.com/in/michaellembo/"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
          className="text-stone-500 box-border caret-transparent block p-1 hover:text-amber-600"
        >
          <img
            src="https://c.animaapp.com/mj9qaqh0C8o0vq/assets/icon-5.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
        </a>
      </li>
      <li className="text-xs box-border caret-transparent shrink-0 leading-4 mr-5">
        <a
          href="https://calendly.com/mike-lembo"
          aria-label="Calendly (opens in a new tab)"
          title="Calendly"
          className="text-stone-500 box-border caret-transparent block p-1 hover:text-amber-600"
        >
          <img
            src="https://c.animaapp.com/mj9qaqh0C8o0vq/assets/icon-6.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
        </a>
      </li>
    </ul>
  );
};
