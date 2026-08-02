import type { ReactNode } from 'react'

// The chamfered corners (top-right / bottom-left) are cut with clip-path,
// which clips the element's own border away right at the diagonal — CSS
// never draws a stroke along a clip-path edge, so a plain `border` class
// leaves those two corners looking unbordered. Faking the border with two
// stacked, identically-chamfered layers (an outer box in the border color,
// an inner box inset by 1px in the fill color) sidesteps that entirely: the
// "border" is just the sliver of outer color showing around the inner box,
// so it's solid all the way round, corners included.
const OUTER_CHAMFER = 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))'
const INNER_CHAMFER = 'polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px))'

interface CtaButtonProps {
  href: string
  primary: boolean
  /** Tailwind bg-* class matching the section behind this button, used as the non-primary fill. */
  surfaceClass: string
  onMouseEnter: () => void
  padding: string
  justifyCenter?: boolean
  external?: boolean
  title?: string
  id?: string
  children: ReactNode
}

export default function CtaButton({
  href,
  primary,
  surfaceClass,
  onMouseEnter,
  padding,
  justifyCenter,
  external,
  title,
  id,
  children,
}: CtaButtonProps) {
  const content = `flex items-center ${justifyCenter ? 'justify-center' : ''} gap-2 ${padding} font-pixel text-xs w-full h-full`

  if (primary) {
    return (
      <a
        id={id}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onMouseEnter={onMouseEnter}
        title={title}
        className={`${content} bg-green text-retro-bg hover:bg-green-bright shadow-green-glow animate-pulse-green transition-all duration-150 hover:scale-105 active:scale-100`}
        style={{ clipPath: OUTER_CHAMFER }}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      id={id}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={onMouseEnter}
      title={title}
      className="group block p-px bg-retro-border hover:bg-green transition-all duration-150 hover:scale-105 active:scale-100"
      style={{ clipPath: OUTER_CHAMFER }}
    >
      <span
        className={`${content} ${surfaceClass} text-retro-muted group-hover:text-green transition-colors duration-150`}
        style={{ clipPath: INNER_CHAMFER }}
      >
        {children}
      </span>
    </a>
  )
}
