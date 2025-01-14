import Image from "next/image"
import clsx from "clsx"

type Props = {
  title: string,
  description: string,
  imageUrl: string,
  linkUrl: string,
  className?: string
}

export default function Project(props: Props) {
  return (
    <div className={clsx(props.className, "flex flex-col gap-8 sm:flex-row items-center")}>
      <div className="group relative w-full sm:basis-1/2 md:basis-1/3">
        <a href={props.linkUrl} target="_blank">
          <Image src="/new-tab-icon.svg"
            alt="Open in new tab"
            className="absolute bottom-2 right-2 w-8 h-8 md:opacity-50 md:group-hover:opacity-100"
            width={32}
            height={32}
          />
          <Image src={props.imageUrl}
            alt={`Thumbnail image of ${props.title}`}
            className="w-full shadow-lg"
            width={550}
            height={300}
          />
        </a>
      </div>
      <div className="flex flex-col gap-y-8 text-left sm:basis-1/2 md:basis-2/3">
        <span className="text-3xl font-genos">{props.title}</span>
        <p className="text-pretty">{props.description}</p>
      </div>
    </div>
  )
}