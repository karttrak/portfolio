import Image from "next/image";
import clsx from "clsx";

import Section from "./components/Section"

export default function Experience() {
  const containerClasses = clsx(
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "gap-y-12",
    "mt-12",
    "py-4",
    "w-full",
    "lg:gap-y-0",
    "lg:gap-x-20",
  )

  const contentWrapperClasses = clsx(
    "space-y-8",
    "max-w-[70ch]",
    "lg:basis-1/3 grow",
  )

  const imageWrapperClasses = clsx(
    "flex",
    "justify-center",
    "text-center",
    "max-w-[70ch]",
    "lg:basis-1/3",
  )
  return (

    <Section
      title="Experience"
      headingLevel={2}
    >
      <div className={clsx(containerClasses, "slide-in-left")}>
        <div className={contentWrapperClasses}>
          <h3 className="mb-8 w-full text-center lg:text-left text-4xl sm:text-5xl font-medium">Yext</h3>
          {"I specialized in delivering custom store locator websites for major brands, such as Saks Fifth Avenue, Macy's, and Sleep Number, optimizing them for local SEO to enhance visibility and user engagement. Working on tight deadlines, I consistently completed high-quality, multi-page websites in just 2-3 weeks. To improve internal workflow, I developed a CLI tool using Go and Bash that automated syncing localization files by interfacing with the Smartling API. Additionally, I collaborated with Android and iOS developers around the world to integrate Yext's advertising SDK into apps with a combined 5 million monthly active users."}
        </div>

        <div className={imageWrapperClasses}>
          <Image
            src="./ufo.svg"
            alt="An illustration of a UFO."
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className={clsx(containerClasses, "flex-row-reverse", "slide-in-right")}>
        <div className={contentWrapperClasses}>
          <h3 className="mb-8 w-full text-center lg:text-left text-4xl sm:text-5xl font-medium">Fundrise</h3>
          {"I co-designed and implemented the User Account Levels feature from the ground up, tailoring offerings to customers based on their portfolio holdings to drive increased investment activity. This long-term initiative involved developing multiple suites of automated onboarding emails to engage users and encourage them to explore newly available features. Additionally, I overhauled the Transactions page to enhance clarity and usability. Collaborating with the Accounting and Real Estate departments, I created internal reporting tools that empowered data-driven decision-making and significantly boosted company efficiency."}
        </div>

        <div className={imageWrapperClasses}>
          <Image
            src="./jupiter.svg"
            alt="An illustration of Jupiter."
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className={clsx(containerClasses, "slide-in-left")}>
        <div className={contentWrapperClasses}>
          <h3 className="mb-8 w-full text-center lg:text-left text-4xl sm:text-5xl font-medium">Entrepreneurship</h3>
          <p>
            Since 2019, I&apos;ve built and operated businesses across logistics, hospitality, and now web development. I began by leading operations for a last-mile delivery company, managing a team of nearly 100 employees and implementing automated systems to improve efficiency and scale. I then oversaw operations for a traditional bed and breakfast, refining processes and delivering consistently exceptional guest experiences.
          </p>

          <p>
            Most recently, I created <a href="https://petalforgestudio.com/?utm_source=thornburgh" target="_blank" rel="noopener">Petal Forge</a>, a freelance web development studio where I design and build high-performing WordPress websites from concept to launch. I partner with clients to create fast, modern, and scalable sites that drive traffic and engagement.
          </p>

          <p>
            Across these ventures, I&apos;ve developed strong strategic thinking, operational discipline, and client-focused execution &ndash; skills that directly inform my approach to building reliable, impactful software.
          </p>

        </div>

        <div className={imageWrapperClasses}>
          <Image
            src="./rocket-ship.svg"
            alt="An illustration of a rocket ship."
            width={300}
            height={300}
          />
        </div>
      </div>
    </Section>
  )
}