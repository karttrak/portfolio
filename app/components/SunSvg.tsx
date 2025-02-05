type Props = {
  className?: string
}

export default function CircleSvg(props: Props) {
  return (
    <svg className={props.className} fill="currentColor" strokeWidth="2" stroke="currentColor" strokeLinecap="round" viewBox="-16 -16 32 32" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="8" />
      <path id="ray" d="M 0, -15 L 0, -13" />
      <use href="#ray" transform="rotate(45)" />
      <use href="#ray" transform="rotate(90)" />
      <use href="#ray" transform="rotate(135)" />
      <use href="#ray" transform="rotate(180)" />
      <use href="#ray" transform="rotate(215)" />
      <use href="#ray" transform="rotate(270)" />
      <use href="#ray" transform="rotate(315)" />
    </svg>
  )
}