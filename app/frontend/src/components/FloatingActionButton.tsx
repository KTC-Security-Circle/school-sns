import { Link } from '@tanstack/react-router'
import { cn } from '../utils/cn'
import MaterialIcon from './MaterialIcon'

type FloatingActionButtonProps = {
  to: string
  className?: string
  icon?: string
}

export default function FloatingActionButton({
  to,
  className,
  icon = 'add',
}: FloatingActionButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center justify-center size-14 bg-slate-900 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all z-40',
        className,
      )}
      aria-label="Create post"
    >
      <MaterialIcon name={icon} className="text-2xl" />
    </Link>
  )
}
