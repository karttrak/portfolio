type Props = {
  className: string
}

export default function CircleSvg(props: Props) {
  return (
    <svg className={props.className} viewBox="-50 -50 100 100" aria-hidden>
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="magenta" />
          <stop offset="100%" stopColor="cyan" />
        </linearGradient>
      </defs>
      <circle fill="none" stroke="url(#gradient)" strokeWidth={2} r="49" />
    </svg>
  )
}