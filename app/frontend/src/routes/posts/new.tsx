import { createFileRoute } from '@tanstack/react-router'
import NewPostScreen from '../../features/posts/NewPostScreen'

export const Route = createFileRoute('/posts/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NewPostScreen />
}
