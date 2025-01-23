import React from "react"
import clsx from "clsx"

type Props = {
  title: string,
  headingLevel: number,
  children: React.ReactNode
  className?: string,
}

export default function Section(props: Props) {
  function getSectionHeading(): React.ReactNode {
    if (props.headingLevel === 2) {
      return <h2 className="text-center text-5xl text-[--heading] font-medium">{props.title}</h2>
    } else if (props.headingLevel === 3) {
      return <h3 className="text-center lg:text-left text-5xl font-medium">{props.title}</h3>
    }

    throw new Error(`Unsupported heading level passed: ${props.headingLevel}`)
  }

  return (
    <section className={clsx(props.className, "flex flex-col justify-center items-center mx-auto py-4 w-full")}>
      {getSectionHeading()}
      {props.children}
    </section>
  )
}