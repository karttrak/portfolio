"use client"

export default function Header() {
  function scrollToSection(e: React.MouseEvent, sectionId: string) {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  const sectionTitles = [
    "About",
    "Experience",
    "Projects",
    "Contact"
  ];
  const listItemElements = sectionTitles.map(sectionTitle => {
    const sectionId = sectionTitle.toLowerCase();

    return (
      <li key={sectionId} className="">
        <a href={`#${sectionId}`}
          className="py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground font-semibold"
          onClick={(e) => scrollToSection(e, sectionId)}
        >
          {sectionTitle}
        </a>
      </li>
    )
  })

  return (
    <header className="fixed top-0 py-4 z-10">
      <nav className="w-full p-2 bg-sky-100/70 dark:bg-slate-800/80 rounded-full backdrop-blur-sm shadow-md">
        <ul className="flex justify-around gap-x-2 sm:gap-x-4 w-full max-w-screen-md">
          {listItemElements}
        </ul>
      </nav>
    </header>
  )
}