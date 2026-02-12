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
    <header className="fixed top-0 flex justify-center w-full z-10">
      <a href="#main" className="absolute left-0 top-0 py-2 px-4 z-50 -translate-y-full focus:translate-y-0 transition" tabIndex={0}>Skip to main content</a>

      <nav className="py-4">
        <ul className="p-2 bg-[--header-background] rounded-full backdrop-blur-sm shadow-md flex justify-around gap-x-2 sm:gap-x-4 max-w-screen-md">
          {listItemElements}
        </ul>
      </nav>
    </header>
  )
}