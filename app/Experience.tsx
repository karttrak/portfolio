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
          {"Since 2019, I have been self-employed through a wide spectrum of ventures. First, I managed the operations for a last-mile delivery company (Freedom Analytics), then operations and finances for a traditional bed and breakfast (Pheasant Field), and most recently have taken on clients doing freelance WordPress development (Petal Forge). At Freedom Analytics, I managed a team of up to 100 employees and developed automated processes to streamline operations and drive efficiency. At Pheasant Field B&B, I oversee day-to-day operations and guest services, ensuring exceptional experiences for both customers and staff. At Petal Forge, I take projects from concept to launch, delivering sites that increase traffic and engagement. These ventures have strengthened my strategic thinking, team leadership, and adaptability—skills that complement my technical expertise and prepare me for success in software engineering roles."}
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