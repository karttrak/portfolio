type StarSvgStyle = {
  top: string,
  left: string,
  width: number,
  height: number,
  transform: string,
  fill: string,
}

type StarSvgProps = {
  topRange?: [number, number],
  leftRange?: [number, number],
}

function randomStarStyle(topRange: [number, number], leftRange: [number, number]): StarSvgStyle {
  const width = Math.floor(Math.random() * 40) + 20;
  const height = width;

  return {
    top: `calc(${Math.floor(Math.random() * (topRange[1] - topRange[0])) + topRange[0]}% - ${width / 2}px)`,
    left: `calc(${Math.floor(Math.random() * (leftRange[1] - leftRange[0])) + leftRange[0]}% - ${height / 2}px)`,
    width: width,
    height: height,
    transform: `rotate(${Math.floor(Math.random() * 90)}deg)`,
    fill: "var(--star-color)",
  }
}

export default function StarSvg({ topRange = [10, 90], leftRange = [10, 90] }: StarSvgProps) {
  const styles = randomStarStyle(topRange, leftRange);

  return (
    <svg className="absolute h-auto -z-1" style={styles} viewBox="0 0 137.32 142.85" aria-hidden>
      <g>
        <polygon points="78.13 70.19 137.32 67.98 78.16 65.02 88.1 55.98 74.96 62.46 79.74 47.69 71.69 59.59 69.47 0 66.48 59.59 57.78 47.83 62.97 61.66 50.34 55.91 59.68 64.56 0 67.55 60.76 69.83 49.77 78.79 62.85 73.29 56.57 87.23 65.99 76.13 69.35 142.85 71.86 75.83 81.3 87.58 75.2 73.08 88.67 79.01 78.13 70.19" />
      </g>
    </svg>
  )
}
