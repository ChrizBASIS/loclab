'use client';

/**
 * LocLab SVG Logomark
 * Minimalist architectural mark: An abstract modular house form
 * combining the letter "L" with a building module silhouette.
 * Clean geometric lines, no fill. Works at any size from favicon to print.
 */
interface LogoProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function Logo({ color = 'currentColor', size = 28, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LocLab Logo"
    >
      {/* House outline with integrated L-shape and modular cutout */}
      <path
        d="M4 36V6L20 2L36 6V24H20V36H4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      {/* Module separation / door form */}
      <path
        d="M20 36V24H36"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
    </svg>
  );
}
