export function AyanshMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="
            M0 0h64v256H0V0Z
            M64 0h128v64H64V0Z
            M192 0h64v256h-64V0Z
            M64 96h128v64H64V96Z

            M288 0h64v112h-64V0Z
            M352 112h64v32h-64v-32Z
            M416 0h64v112h-64V0Z
            M288 144h64v112h-64V144Z
            M416 144h64v112h-64V144Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0h32v128H0V0ZM32 0h64v32H32V0ZM96 0h32v128H96V0ZM32 48h64v32H32V48ZM144 0h32v56h-32V0ZM176 56h32v16h-32V56ZM208 0h32v56h-32V0ZM144 72h32v56h-32V72ZM208 72h32v56h-32V72Z"/></svg>`;
}
