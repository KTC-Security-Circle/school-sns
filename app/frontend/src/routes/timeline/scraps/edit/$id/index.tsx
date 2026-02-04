import { createFileRoute } from '@tanstack/react-router'
import { useFetchScrapDetailOptions } from '@/api/routes/scraps'
import { useFetchTagsOptions } from '@/api/routes/tags'

export const Route = createFileRoute('/timeline/scraps/edit/$id/')({
  loader: ({ context, params }) => {
    context.queryClient.ensureQueryData(useFetchTagsOptions())
    context.queryClient.ensureQueryData(useFetchScrapDetailOptions(params.id))
  },
})
