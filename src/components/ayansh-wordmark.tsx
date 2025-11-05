export function AyanshWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 500"
      fill="none"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="currentColor"
        fontSize="220"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        AYANSH KR YADAV
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="${color}" font-size="160" font-weight="bold" font-family="sans-serif">AYANSH KR YADAV</text></svg>`;
}
