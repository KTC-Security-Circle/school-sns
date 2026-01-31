import { Link, createLazyFileRoute } from '@tanstack/react-router'
import type { SearchType } from '@/features/search/types'
import TabItem from '@/features/search/result/components/TabItem'

export const Route = createLazyFileRoute('/search/result/')({
  component: RouteComponent,
})

const TAB_LABELS: Record<SearchType, string> = {
  artifact: 'アーティファクト',
  scrap: 'スクラップ',
  user: 'ユーザー',
  tag: 'タグ',
}

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex overflow-y-auto border-b border-slate-500 p-0 bg-slate-50 scrollbar-hidden">
        {(['scrap', 'artifact', 'user', 'tag'] satisfies Array<SearchType>).map(
          (type) => (
            <Link key={type} to="." search={(s) => ({ ...s, type })}>
              <TabItem label={TAB_LABELS[type]} isActive={data.type === type} />
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
