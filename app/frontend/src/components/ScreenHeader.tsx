import type { ReactNode } from 'react'

type ScreenHeaderProps = {
  children: ReactNode
  className?: string
}

export default function ScreenHeader({
  children,
  className,
}: ScreenHeaderProps) {
  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 ${
        className ?? ''
      }`}
    >
      {children}
    </header>
  )
}
