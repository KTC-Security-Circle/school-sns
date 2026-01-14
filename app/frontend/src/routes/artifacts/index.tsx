import { createFileRoute } from '@tanstack/react-router'
import TimelineScreen from '../../features/timeline/TimelineScreen'

export const Route = createFileRoute('/artifacts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TimelineScreen variant="artifact" />
}
