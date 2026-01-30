import { createFileRoute, redirect } from '@tanstack/react-router'
import { useFetchSelfInfoOptions } from '@/api/routes/users'

export const Route = createFileRoute('/settings/')({
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(useFetchSelfInfoOptions())
    } catch (_) {
      throw redirect({ to: '/auth/login' })
    }
  },
})
