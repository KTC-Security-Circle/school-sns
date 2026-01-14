import { createFileRoute } from '@tanstack/react-router'
import TimelineScreen from '../features/timeline/TimelineScreen'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TimelineScreen variant="scrap" />
}
