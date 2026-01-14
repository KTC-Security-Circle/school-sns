import { createFileRoute } from '@tanstack/react-router'
import ProfileScreen from '../features/profile/ProfileScreen'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProfileScreen />
}
