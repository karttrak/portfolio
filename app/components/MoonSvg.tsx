type Props = {
  className?: string
}

export default function CircleSvg(props: Props) {
  return (
    <svg className={props.className} fill="currentColor" strokeWidth="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="-16 -16 32 32" xmlns="http://www.w3.org/2000/svg">
      <path id="moon" d="
        M -6, -10
        A 13 13, 0, 1, 0, 10 6
        A 13 13, 0, 0, 1, -6 -10
        "
      />
      <path id="star" d="
        M 9, -15
        A 6 6, 0, 0, 0, 15 -9
        A 6 6, 0, 0, 0, 9 -3
        A 6 6, 0, 0, 0, 3 -9
        A 6 6, 0, 0, 0, 9 -15
        "
      />
    </svg>
  )
}