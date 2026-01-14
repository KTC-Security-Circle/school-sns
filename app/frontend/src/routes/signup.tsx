import { createFileRoute } from '@tanstack/react-router'
import SignupScreen from '../features/auth/SignupScreen'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupScreen />
}
