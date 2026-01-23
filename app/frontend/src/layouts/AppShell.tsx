import { useMatches } from '@tanstack/react-router'
import BottomNav from '../components/BottomNav'
import PhoneFrame from '../components/PhoneFrame'
import ScreenHeader from '../components/ScreenHeader'
import { cn } from '../utils/cn'
import type { BottomNavItem } from '../components/BottomNav'
import type { ReactNode } from 'react'

export type AppShellConfig = {
  backgroundClassName?: string
  frameClassName?: string
  headerClassName?: string
  header?: React.ComponentType
  bottomNav?: BottomNavItem
  showBottomNav?: boolean
  disableShell?: boolean
  fab?: ReactNode
}

type AppShellProps = {
  children: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const matches = useMatches()
  const currentMatch = matches[matches.length - 1]
  const shell =
    (currentMatch.staticData as { shell?: AppShellConfig }).shell ?? {}
  const Header = shell.header
  const bottomNav = shell.bottomNav
  const showBottomNav = shell.showBottomNav ?? Boolean(bottomNav)
  const fab = shell.fab

  if (shell.disableShell) {
    return <>{children}</>
  }

  return (
    <div className={cn('app-shell', shell.backgroundClassName)}>
      <PhoneFrame className={shell.frameClassName}>
        <main className="flex-1 w-full overflow-y-auto scrollbar-hide relative pb-safe">
          {Header ? (
            <ScreenHeader className={shell.headerClassName}>
              <Header />
            </ScreenHeader>
          ) : null}
          {children}
        </main>
        {showBottomNav && bottomNav ? <BottomNav active={bottomNav} /> : null}
        {fab ? (
          <div
            className={cn(
              'absolute right-4 transition-all duration-300 z-40',
              showBottomNav
                ? 'bottom-[calc(80px+env(safe-area-inset-bottom))]'
                : 'bottom-[calc(24px+env(safe-area-inset-bottom))]',
            )}
          >
            {fab}
          </div>
        ) : null}
      </PhoneFrame>
    </div>
  )
}
