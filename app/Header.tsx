/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 flex py-4 px-8 h-24 bg-white/10 dark:bg-black/10 z-10">
      <img
        className="relative r-0"
        src="/kt-logo.svg"
        alt="Logo"
      />
    </header>
  )
}