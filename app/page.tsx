import Image from "next/image";
import Header from "./Header";
import Section from "./Section";
import TextSection from "./TextSection";
import Skills from "./Skills";
import Project from "./Project";

import StarSvg from "./components/StarSvg";

import sections from "./homepage.json"

export default function Home() {
  const starIcons = new Array(20).fill(0).map((_, i) => <StarSvg key={i} />)

  return (
    <>
      <Header />

      {/* HERO SECTION START */}
      <section className="relative flex flex-col md:flex-row justify-center items-center gap-20 py-32 px-8 md:px-20 lg:px-32 w-full h-screen">
        {starIcons}
        <div className="relative m-auto md:m-0 md:w-2/3 max-w-[32rem] text-center text-4xl text-pretty font-genos font-medium z-2">
          <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] bg-[--background] blur-xl rounded-xl"></div>
          <h1 className="relative text-5xl text-[--heading]">
            Kyle Thornburgh
          </h1>
          <h2 className="relative text-4xl">Full-stack engineer</h2>
          <p className="relative text-3xl">
            I love crafting clean code and intuitive designs for modern applications.
          </p>
        </div>
        <div className="relative m-auto md:m-0 w-64 h-60 -z-1">
          <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] bg-[--background] blur-xl rounded-full"></div>
          <Image
            className="relative w-64 h-60 -z-1"
            src="/sloth.svg"
            alt="Sloth logo"
            width={256}
            height={240}
            aria-label="A sloth wearing an astronaut helmet and floating in space"
          />
        </div>
      </section >
      {/* HERO SECTION END */}

      <main className="flex flex-col p-8 items-center md:items-start max-w-[75rem]">

        {/* ABOUT SECTION START */}
        <section className="flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-y-12 py-20 w-full md:gap-y-0 md:gap-x-12 lg:gap-x-20">
          <h2 className="lg:mb-12 w-full text-center text-5xl text-[--heading] font-medium">{sections.about.title}</h2>

          <div className="space-y-8 max-w-[70ch] flex-1">
            <p className="text-pretty">{sections.about.paragraphs}</p>
          </div>

          <div className="flex justify-center text-center max-w-[70ch] flex-1">
            <Skills />
          </div>
        </section>
        {/* ABOUT SECTION END */}

        <h2 className="mt-12 w-full text-center text-5xl text-[--heading] font-medium">Experience</h2>

        <TextSection {...sections.yext}>
          <Image
            className=""
            src="./rocket-ship.svg"
            alt="Jupiter"
            width={300}
            height={300}
          />
        </TextSection>

        <TextSection {...sections.fundrise} reverse={true}>
          <Image
            className=""
            src="./jupiter.svg"
            alt="Jupiter"
            width={300}
            height={300}
          />
        </TextSection>

        <TextSection {...sections.entrepreneur}>
          <Image
            className=""
            src="./ufo.svg"
            alt="Jupiter"
            width={300}
            height={300}
          />
        </TextSection>

        <Section
          title="Projects"
          headingLevel={2}
        >
          <Project
            className="max-w-[80ch]"
            title="Salvatore Ferragamo Store Pages"
            description="Sample location page for a Salvatore Ferragamo store. Page is fully responsive, optimized for local SEO, and adheres to all WCAG 2.0 Level AA rules for accessibility."
            imageUrl="/projects/ferragamo-thumbnail.jpg"
            linkUrl="/projects/ferragamo-showcase.jpg"
          />
          <Project
            className="max-w-[80ch]"
            title="Fundrise Transactions"
            description="I implemented the redesign for the Transactions page in 2018."
            imageUrl="/projects/fundrise-desktop.png"
            linkUrl="/projects/fundrise-desktop.png"
          />
          <Project
            className="max-w-[80ch]"
            title="Website for Freedom Analytics"
            description="I built a website with SvelteKit that displayed hiring information about the company and directed people to apply by emailing the recruiter."
            imageUrl="/projects/freedom-thumbnail.png"
            linkUrl="/projects/freedom-showcase.png"
          />
        </Section>

        <TextSection className="text-center" {...sections.next} />

        <Section
          title="Contact"
          headingLevel={2}
          className="max-w-[80ch]"
        >
          <p>If you&apos;d like to connect or discuss how I can contribute to your organization, please don&apos;t&nbsp;hesitate to reach out. <a className="hover:text-blue-400 underline" href="mailto:thornburghkyle+dev@gmail.com" target="_blank" tabIndex={1}>Send&nbsp;me&nbsp;an&nbsp;email</a>.</p>
        </Section>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
