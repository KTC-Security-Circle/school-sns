import { Outlet, createFileRoute } from '@tanstack/react-router'
import z from 'zod'

const searchParamsSchema = z.object({
  keyword: z.string().nullable().default(null),
})

export const Route = createFileRoute('/search')({
  validateSearch: searchParamsSchema,
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-5 w-full items-center">
      <Outlet />
    </div>
  )
}
