export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect
      width="256"
      height="256"
      fill="var(--color-neutral-100)"
      rx="32"
    ></rect>
    <circle cx="61" cy="65" r="32" fill="var(--color-orange-600)"></circle>
  </svg>
);
