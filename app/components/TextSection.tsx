import React from "react"
import clsx from "clsx"

import { kebabCase } from "../utilities"

type Props = {
  title: string,
  headingLevel: number,
  className?: string,
  paragraphs: string[],
  reverse?: boolean
  children?: React.ReactNode
}

export default function TextSection(props: Props) {
  const paragraphElements = props.paragraphs?.map((p, i) => {
    return <p key={i} className="text-pretty">{p}</p>
  })

  const sectionClasses = clsx(
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "gap-y-12",
    "py-4",
    "w-full",
    "lg:gap-y-0",
    "lg:gap-x-20",
    props.reverse && "flex-row-reverse",
    props.className,
  )

  const contentContainerClasses = clsx(
    "space-y-8",
    "max-w-[70ch]",
    props.children && "lg:basis-1/3 grow"
  )

  const childrenContainerClasses = clsx(
    "flex",
    "justify-center",
    "text-center",
    "max-w-[70ch]",
    paragraphElements && "lg:basis-1/3",
  )

  return (
    <section className={sectionClasses}>
      {props.headingLevel === 2 ?
        <h2 id={kebabCase(props.title)} className="lg:mb-12 w-full text-center text-5xl text-[--heading] font-medium">{props.title}</h2>
        : null}

      {paragraphElements ?
        <div className={contentContainerClasses}>
          {props.headingLevel === 3 ?
            <h3 className="mb-8 w-full text-center lg:text-left text-4xl sm:text-5xl font-medium">{props.title}</h3>
            : null}
          {paragraphElements}
        </div>
        : null}

      {props.children ?
        <div className={childrenContainerClasses}>
          {props.children}
        </div>
        : null}
    </section>
  )
}