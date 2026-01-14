import { createFileRoute } from '@tanstack/react-router'
import SettingsScreen from '../features/settings/SettingsScreen'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SettingsScreen />
}
