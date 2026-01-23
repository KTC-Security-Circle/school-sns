import { createFileRoute } from '@tanstack/react-router'
import TimelineScreen from '../../features/timeline/TimelineScreen'
import TimelineHeader from '../../features/timeline/components/TimelineHeader'
import FloatingActionButton from '../../components/FloatingActionButton'

export const Route = createFileRoute('/artifacts/')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: TimelineHeader,
      bottomNav: 'artifacts',
      backgroundClassName: 'bg-white',
      frameClassName: 'bg-white border-x border-slate-200 shadow-2xl',
      fab: <FloatingActionButton to="/posts/new" />,
    },
  },
})

function RouteComponent() {
  return <TimelineScreen variant="artifact" />
}
