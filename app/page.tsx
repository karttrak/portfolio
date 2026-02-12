import Image from "next/image";

// Page sections
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";

// Reusable components
import Section from "./components/Section";
import TextSection from "./components/TextSection";
import StarSvg from "./components/StarSvg";

// Data
import sections from "./homepage.json"

export default function Home() {
  const starIcons = new Array(20).fill(0).map((_, i) => <StarSvg key={i} />)
  const starIconsLeftMargin = new Array(20).fill(0).map((_, i) => {
    return <StarSvg key={i}
      top={`calc(${Math.floor(Math.random() * 100)}% - 20px)`}
      left={`calc(${Math.floor(Math.random() * 20)}% - 20px)`}
    />
  })
  const starIconsRightMargin = new Array(20).fill(0).map((_, i) => {
    return <StarSvg key={i}
      top={`calc(${Math.floor(Math.random() * 100)}% - 20px)`}
      left={`calc(${Math.floor(Math.random() * 20) + 80}% - 20px)`}
    />
  })

  return (
    <>
      <div id="stars" className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none -z-20">
        {starIconsLeftMargin}
        {starIconsRightMargin}
      </div>

      <main id="main" className="relative flex flex-col gap-20 items-center md:items-start px-4 sm:px-8 w-full max-w-screen-xl">
        {/* HERO SECTION START */}
        <section className="relative flex flex-wrap justify-center items-center gap-y-12 gap-x-20 py-24 sm:py-56 px-8 w-full min-h-min">
          {starIcons}
          <div className="relative m-auto md:m-0 md:w-2/3 max-w-[32rem] text-center text-4xl font-genos font-medium z-2">
            <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] bg-[--background] blur-xl rounded-xl"></div>
            <h1 className="relative text-5xl text-[--heading]">
              Kyle Thornburgh
              <span className="block text-4xl text-foreground">Full-stack engineer</span>
            </h1>
            <p className="relative text-3xl text-pretty">
              I love crafting clean code and intuitive designs for modern applications.
            </p>
          </div>
          <div className="relative m-auto md:m-0 w-64 h-60 -z-1">
            <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] bg-[--background] blur-xl rounded-full"></div>
            <Image
              className="relative w-64 h-60 -z-1"
              src="/sloth.svg"
              alt="An illustration of a sloth floating in space."
              width={256}
              height={240}
              priority
            />
          </div>
        </section >
        {/* HERO SECTION END */}

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[--background] blur-xl rounded-xl -z-10"></div>

        {/* ABOUT SECTION START */}
        <section className="flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-y-12 md:gap-y-0 md:gap-x-12 lg:gap-x-20 w-full py-8">
          <h2 id="about" className="lg:mb-12 w-full text-center text-5xl text-[--heading] font-medium">{sections.about.title}</h2>

          <div className="max-w-[70ch] flex-1">
            <p className="text-pretty">{sections.about.paragraphs}</p>
          </div>

          <div className="flex justify-center text-center max-w-[70ch] flex-1">
            <Skills />
          </div>
        </section>
        {/* ABOUT SECTION END */}

        <Experience />

        <Section
          className="gap-y-16"
          title="Projects"
          headingLevel={2}
        >
          <Project
            title="Pheasant Field B&B Website"
            imageUrl="/projects/pheasant-field-thumbnail.png"
            altText="Homepage of Pheasant Field Bed and Breakfast website showcasing a bench facing a pond with a fountain in the distance."
            linkUrl="https://pheasantfield.com/"
          >
            <p>
              Designed and developed the website for <a href="https://pheasantfield.com/" target="_blank" rel="noopener">Pheasant Field Bed and Breakfast</a> using WordPress with custom CSS for a clean, responsive, and accessible user experience. Optimized for mobile and ADA compliance, the site integrates booking tools and SEO best practices to boost online visibility. This project showcases my ability to combine technical skills and business insight to create effective, user-friendly web solutions.
            </p>
          </Project>
          <Project
            title="Fundrise Transactions page"
            imageUrl="/projects/fundrise-desktop.png"
            altText="Fundrise Transactions page showing a list of pending and completed transactions along with their details."
          >
            <p>
              I implemented the redesign of the Transactions page for <a href="https://fundrise.com" target="_blank" rel="noopener noreferrer">Fundrise</a>, enhancing usability and user experience on both mobile and desktop platforms. Transaction details are initially hidden for ease of navigation, with users able to expand them as needed, ensuring a seamless and intuitive experience for investors. The project utilized Java and MySQL for the backend, with AngularJS powering the frontend.
            </p>
          </Project>
          <Project
            title="Salvatore Ferragamo location pages"
            imageUrl="/projects/ferragamo-showcase.jpg"
            altText="A details page of a Salvatore Ferragamo store, displaying location details such as address, contact information, and hours of operation."
          >
            <p>
              Developed as part of Yext&apos;s <a href="https://www.yext.com/platform/pages" target="_blank" rel="noopener noreferrer">Pages</a> product, this project is a fully responsive website that helps users locate their nearest Ferragamo store and view key store details. Built using Soy templates, SCSS, and CoffeeScript, the website is optimized for local SEO and adheres to WCAG 2.0 Level AA accessibility standards, ensuring a seamless and inclusive user experience.
            </p>
          </Project>
        </Section>

        <TextSection className="text-center" {...sections.next} />
      </main>
    </>
  );
}
