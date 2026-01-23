import { createFileRoute } from '@tanstack/react-router'
import ScrapDetailScreen from '../../features/scraps/ScrapDetailScreen'
import ScrapDetailHeader from '../../features/scraps/components/ScrapDetailHeader'

export const Route = createFileRoute('/scraps/$scrapId')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: ScrapDetailHeader,
      bottomNav: 'scraps',
      backgroundClassName: 'bg-white',
      frameClassName: 'bg-white border-x border-slate-200 shadow-2xl',
    },
  },
})

function RouteComponent() {
  return <ScrapDetailScreen />
}
