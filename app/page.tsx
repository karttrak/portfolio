// Layout / Sections
import Header from "./Header";
import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";

// Reusable components
import Section from "./components/Section";
import TextSection from "./components/TextSection";
import StarSvg from "./components/StarSvg";
import Image from "next/image";

// Data
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
            className="mt-8 md:mt-0"
            title="Salvatore Ferragamo location pages"
            description="Developed as part of Yext's [Pages](https://www.yext.com/platform/pages) product, this project is a fully responsive website that helps users locate their nearest Ferragamo store and view key store details. Built using Soy templates, SCSS, and CoffeeScript, the website is optimized for local SEO and adheres to WCAG 2.0 Level AA accessibility standards, ensuring a seamless and inclusive user experience."
            imageUrl="/projects/ferragamo-showcase.jpg"
            linkUrl="/projects/ferragamo-showcase.jpg"
          />
          <Project
            className="mt-8 md:mt-0"
            title="Fundrise Transactions page"
            description="I implemented the redesign of the Transactions page for [Fundrise](https://fundrise.com/), enhancing usability and user experience on both mobile and desktop platforms. Transaction details are initially hidden for ease of navigation, with users able to expand them as needed, ensuring a seamless and intuitive experience for investors. The project utilized Java and MySQL for the backend, with AngularJS powering the frontend."
            imageUrl="/projects/fundrise-desktop.png"
            linkUrl="/projects/fundrise-desktop.png"
          />
          <Project
            className="mt-8 md:mt-0"
            title="Freedom Analytics website"
            description="Designed and developed a website for Freedom Analytics to streamline hiring efforts. The landing page highlighted key facts about the company and showcased benefits, while the Careers page provided comprehensive details for the job and encouraged candidates apply. Built with SvelteKit and deployed on Netlify, the website offered a modern, responsive, and user-friendly experience to attract talent."
            imageUrl="/projects/freedom-showcase.png"
            linkUrl="/projects/freedom-showcase.png"
          />
        </Section>

        <TextSection className="text-center" {...sections.next} />

        <Section
          title="Contact"
          headingLevel={2}
          className="max-w-[80ch] text-center text-pretty"
        >
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
                alt="linkedIn Logo"
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
                alt="Email icon"
                width={20}
                height={20}
              />
              Send&nbsp;an&nbsp;email
            </a>
          </div>
        </Section>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2"
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
          className="flex items-center gap-2"
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
      <Footer />
    </>
  );
}
