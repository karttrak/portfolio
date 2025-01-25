import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-y-8 w-full max-w-[80ch] py-12 px-4 sm:px-8 text-center text-pretty">
      <h2 id="contact" className="lg:mb-4 text-center text-5xl text-[--heading] font-medium">Contact</h2>
      <p>
        Interested in collaborating or learning more about my work? Let&apos;s connect!
      </p>
      <div className="flex gap-8">
        <a
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/kyle-thornburgh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="w-5 dark:invert"
            src="/linkedin.svg"
            alt="linkedIn Logo."
            width={20}
            height={20}
          />
          My LinkedIn
        </a>
        <a
          className="flex items-center gap-2"
          href="mailto:thornburghkyle+dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="w-5 dark:invert"
            src="/email.svg"
            alt="Email icon."
            width={20}
            height={20}
          />
          Send&nbsp;an&nbsp;email
        </a>
      </div>
      <p className="text-base">
        © 2025 Kyle Thornburgh
      </p>
    </footer>
  )
}