import Image from "next/image"
import clsx from "clsx"

export default function Skills() {
  type Skill = {
    label: string,
    imageUrl: string,
    invertOnDarkMode?: boolean
  }

  const skills: Skill[] = [
    {
      label: "HTML",
      imageUrl: "skills/html-logo.svg"
    },
    {
      label: "Next.js",
      imageUrl: "skills/nextjs-logo.svg",
      invertOnDarkMode: true
    },
    {
      label: "MySQL",
      imageUrl: "skills/mysql-logo.svg",
      invertOnDarkMode: true
    },
    {
      label: "CSS",
      imageUrl: "skills/css-logo.svg"
    },
    {
      label: "React",
      imageUrl: "skills/react-logo.svg"
    },
    {
      label: "Java",
      imageUrl: "skills/Java-logo.svg"
    },
    {
      label: "Firebase",
      imageUrl: "skills/firebase-logo.svg"
    },
    {
      label: "TypeScript",
      imageUrl: "skills/typescript-logo.svg"
    },
    {
      label: "Svelte",
      imageUrl: "skills/Svelte-logo.svg"
    },
    {
      label: "Accessibility",
      imageUrl: "skills/a11y-logo.svg",
      invertOnDarkMode: true
    },
  ]

  const skillElements = skills.map((skill, i) => {
    const skillClasses = clsx("size-12", "sm:size-16", skill.invertOnDarkMode && "dark:invert")
    const styles = {
      backgroundImage: "linear-gradient(to bottom right, magenta, cyan)",
      gridRow: i % 7 == 0 ? "2 / span 2" : undefined
    }

    return (
      <li key={i} style={styles} className="row-span-2 p-0.5 text-sm sm:text-base rounded-full size-28 sm:size-32">
        <div className="flex flex-col justify-center items-center p-2 w-full h-full rounded-full bg-[--background]">
          <Image
            className={skillClasses}
            src={skill.imageUrl}
            width={50}
            height={50}
            alt={`${skill.label} logo`}
          />
          {skill.label}
        </div>
      </li>
    )
  })

  return (
    <>
      <ul className="grid grid-rows-8 grid-flow-col justify-center gap-y-2">
        {skillElements}
      </ul>
    </>
  )
}