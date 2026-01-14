import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

export default function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={`relative flex min-h-screen w-full max-w-md flex-col ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  )
}
