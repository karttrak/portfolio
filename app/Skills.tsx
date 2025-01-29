import Image from "next/image"
import clsx from "clsx"

import CircleSvg from "./components/CircleSvg"

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
      label: "A11y",
      imageUrl: "skills/a11y-logo.svg",
      invertOnDarkMode: true
    },
  ]

  const skillElements = skills.map((skill, i) => {
    const skillClasses = clsx("size-12", "sm:size-16", skill.invertOnDarkMode && "dark:invert")
    const styles = {
      gridRow: i % 7 == 0 ? "2 / span 2" : undefined
    }

    return (
      <li key={i} style={styles} className="relative row-span-2 flex flex-col justify-center items-center text-sm sm:text-base size-24 sm:size-32 bg-[--background] rounded-full slide-in-left">
        <CircleSvg className="absolute w-full" />
        <Image
          className={skillClasses}
          src={skill.imageUrl}
          width={50}
          height={50}
          alt={`${skill.label} logo`}
        />
        {skill.label}
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