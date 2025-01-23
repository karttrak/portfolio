import Image from "next/image"
import clsx from "clsx"
import ReactMarkdown from "react-markdown"

type Props = {
  title: string,
  description: string,
  imageUrl: string,
  linkUrl?: string,
  className?: string
}

export default function Project(props: Props) {
  return (
    <div className={clsx(props.className, "flex flex-col gap-8 md:flex-row-reverse items-center")}>
      <div className="flex flex-col gap-y-8 text-left md:basis-1/2 xl:basis-3/5">
        <span className="text-3xl font-medium font-genos">{props.title}</span>
        <ReactMarkdown linkTarget="_blank">
          {props.description}
        </ReactMarkdown>
      </div>
      <div className="group relative w-full md:basis-1/2 xl:basis-2/5">
        <a href={props.linkUrl ? props.linkUrl : props.imageUrl} target="_blank">
          <Image src="/new-tab-icon.svg"
            alt="Open in new tab."
            className="absolute bottom-2 right-2 w-8 h-8 md:opacity-50 md:group-hover:opacity-100"
            width={32}
            height={32}
          />
          <Image src={props.imageUrl}
            alt={`Thumbnail image of ${props.title}`}
            className="w-full max-h-96 lg:max-h-80 xl:max-h-64 object-cover object-top shadow-lg"
            width={550}
            height={300}
          />
        </a>
      </div>
    </div>
  )
}