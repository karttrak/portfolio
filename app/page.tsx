import Image from "next/image";
import Header from "./Header";
import TextSection from "./TextSection";

import StarSvg from "./components/StarSvg";

import sections from "./homepage.json"

export default function Home() {
  const starIcons = new Array(20).fill(0).map((_, i) => <StarSvg key={i} />)

  return (
    <>
      <Header />

      {/* HERO SECTION START */}
      <section className="relative flex flex-col md:flex-row justify-center items-center gap-20 py-32 px-8 md:px-20 lg:px-32 w-full">
        {starIcons}
        <div className="relative m-auto md:m-0 md:w-2/3 max-w-[32rem] text-center text-4xl text-pretty font-genos font-medium z-2">
          <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] bg-[#CADCE4] dark:bg-[#1F282D] blur-xl rounded-xl"></div>
          <h1 className="relative text-5xl text-yellow-400">
            Kyle Thornburgh
          </h1>
          <h2 className="relative text-4xl">Full-stack engineer</h2>
          <p className="relative text-3xl">
            I love crafting clean code and intuitive designs for modern applications.
          </p>
        </div>
        <div className="relative m-auto md:m-0 w-64 h-60 -z-1">
          <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] bg-[#CADCE4] dark:bg-[#1F282D] blur-xl rounded-full"></div>
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

      <main className="flex flex-col p-8 items-center md:items-start">
        <TextSection {...sections.about}>
          <Image
            className=""
            src="./ufo.svg"
            alt="Jupiter"
            width={300}
            height={300}
            aria-hidden
          />
        </TextSection>

        <h2 className="mt-12 lg:mb-12 w-full text-center text-5xl text-yellow-400 font-medium">Experience</h2>

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

        <TextSection {...sections.next} />

        <TextSection
          title="Contact"
          headingLevel={2}
        >
          <p>If you&apos;d like to connect or discuss how I can contribute to your organization, please don&apos;t hesitate to reach out. <a className="hover:text-blue-400 underline" href="mailto:thornburghkyle+dev@gmail.com" target="_blank" tabIndex={1}>Send me an email</a>.</p>
        </TextSection>

        <TextSection
          title="Projects"
          headingLevel={2}
        >
          <div>
            <Image
              className=""
              src="/projects/ferragamo-thumbnail.jpg"
              width={300}
              height={280}
              alt="Example image of a location detail page for a Salvatore Ferragamo store."
            />
            <p className="text-pretty">
              Sample location page for a Salvatore Ferragamo store. Page is fully responsive to support anything from a mobile device to an ultrawide monitor. The page adheres to all WCAG 2.0 Level AA rules for accessibility and is optimized for local SEO using structured data markup in the form of JSON-LD in the HTML.
            </p>
          </div>
        </TextSection>


        <section className="section">
          <h2 className="mb-12 lg:mb-16 w-full text-center text-5xl text-yellow-400 font-medium">Projects</h2>

        </section>
        <section className="section">
          <h2 className="text-5xl">
            Contact
          </h2>
          <p className="text-pretty">
            If you&apos;d like to connect or discuss how I can contribute to your organization, please don&apos;t hesitate to reach out. <a href="mailto:thornburghkyle+dev@gmail.com">Send me an email.</a>
          </p>
        </section>
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
