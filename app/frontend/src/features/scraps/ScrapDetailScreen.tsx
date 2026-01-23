import MaterialIcon from '../../components/MaterialIcon'
import Avatar from '../../components/ui/Avatar'
import { getScrapDetailViewData } from './viewModel'

function renderInlineHighlights(text: string) {
  return text.split(/([#@][\w_]+)/g).map((part, index) => {
    if (part.startsWith('#') || part.startsWith('@')) {
      return (
        <span key={`${part}-${index}`} className="text-blue-500">
          {part}
        </span>
      )
    }
    return <span key={`${part}-${index}`}>{part}</span>
  })
}

export default function ScrapDetailScreen() {
  const data = getScrapDetailViewData()

  return (
    <>
      <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide bg-white">
        <article className="flex flex-col p-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Avatar
              src={data.post.author.avatar}
              alt={data.post.author.name}
              size="lg"
              className="shrink-0"
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-900 text-[15px] font-bold">
                    {data.post.author.name}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {data.post.author.handle}
                  </p>
                </div>
                <button className="text-slate-500 hover:bg-slate-100 rounded-full p-1 -mr-2">
                  <MaterialIcon name="more_horiz" />
                </button>
              </div>
            </div>
          </div>
          <p className="text-slate-900 text-[20px] leading-snug font-medium mb-3">
            {renderInlineHighlights(data.post.text[0])}
          </p>
          <p className="text-slate-900 text-[20px] leading-snug font-medium mb-1">
            {renderInlineHighlights(data.post.text[1])}
          </p>
          <div className="py-4 border-b border-slate-200">
            <p className="text-slate-500 text-[14px]">{data.post.timeLabel}</p>
          </div>
          <div className="flex items-center justify-between pt-2 mt-1">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 p-2 -ml-2 text-slate-500 hover:text-pink-500 transition-colors rounded-full hover:bg-pink-50 group">
                <MaterialIcon name="favorite" className="text-[26px]" />
                <span className="text-sm font-bold group-hover:text-pink-500">
                  {data.post.likesLabel}
                </span>
              </button>
              <button className="flex items-center gap-2 p-2 text-slate-500 hover:text-blue-500 transition-colors rounded-full hover:bg-blue-50 group">
                <MaterialIcon name="chat_bubble" className="text-[26px]" />
                <span className="text-sm font-bold group-hover:text-blue-500">
                  {data.post.commentsLabel}
                </span>
              </button>
            </div>
            <button className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
              <MaterialIcon name="ios_share" className="text-[24px]" />
            </button>
          </div>
        </article>

        <div className="flex flex-col">
          {data.replies.map((reply) => (
            <article
              key={reply.id}
              className="flex flex-row items-start gap-3 p-4 border-b border-slate-200 bg-slate-50/60"
            >
              <Avatar
                src={reply.author.avatar}
                alt={reply.author.name}
                size="md"
                className="shrink-0 mt-0.5"
              />
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between h-5 mb-0.5">
                  <div className="flex items-center gap-2 truncate">
                    <p className="text-slate-900 text-sm font-bold">
                      {reply.author.name}
                    </p>
                    <span className="text-slate-500 text-xs">
                      {reply.author.handle} • {reply.time}
                    </span>
                  </div>
                  <button className="text-slate-500 hover:bg-slate-100 rounded p-0.5">
                    <MaterialIcon name="more_horiz" className="text-[16px]" />
                  </button>
                </div>
                <p className="text-slate-900 text-[14px] leading-relaxed mb-2">
                  {renderInlineHighlights(reply.text)}
                </p>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5 text-slate-500 hover:text-pink-500 transition-colors cursor-pointer">
                    <MaterialIcon name="favorite" className="text-[18px]" />
                    <span className="text-xs font-medium">
                      {reply.likesLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 hover:text-blue-500 transition-colors cursor-pointer">
                    <MaterialIcon name="chat_bubble" className="text-[18px]" />
                    <span className="text-xs font-medium">
                      {reply.commentsLabel}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <button className="absolute bottom-20 right-4 z-40 flex items-center justify-center size-14 bg-blue-500 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all">
        <MaterialIcon name="reply" className="text-3xl" />
      </button>
    </>
  )
}
