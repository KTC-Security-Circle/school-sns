import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

const searchParamsSchema = z.object({
  replyTo: z.string().nullable().default(null),
})

export const Route = createFileRoute('/timeline/scraps/create/')({
  validateSearch: searchParamsSchema,
})
