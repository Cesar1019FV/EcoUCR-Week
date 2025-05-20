import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 125 40" // Adjusted viewBox for shorter text
    width="120" // Adjusted width
    height="39" // Kept height consistent
    aria-label="EcoUCR Logo" // Updated aria-label
    {...props}
  >
    <path
      d="M25.23,6.51C19.77,3.43,13.29,3.78,8.2,6.8A18.5,18.5,0,0,0,2.2,21.19c1.1,7.51,6.44,13.72,13.73,15.37,1.7.38,3.43.46,5.14.27,4.63-.5,8.93-2.92,12.08-6.5A18.76,18.76,0,0,0,38.2,18.1c-1.61-7.61-7.61-13.4-15.06-14.47A10.57,10.57,0,0,0,25.23,6.51Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M21.38,34.38A14.1,14.1,0,0,1,9.11,28.6a14.47,14.47,0,0,1-3.25-15.2,14.16,14.16,0,0,1,14.25-9.82,14.31,14.31,0,0,1,13.85,12.1c.17,1.2.12,2.42-.13,3.61-.92,4.36-4.09,7.9-8.14,9.57A15.41,15.41,0,0,1,21.38,34.38Z"
      fill="hsl(var(--accent))"
      opacity="0.7"
    />
    <text
      x="42"
      y="27"
      fontFamily="var(--font-geist-sans), Arial, sans-serif"
      fontSize="20"
      fontWeight="bold"
      fill="hsl(var(--foreground))"
    >
      EcoUCR
    </text>
  </svg>
);

export default Logo;
