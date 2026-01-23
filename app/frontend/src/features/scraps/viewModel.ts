import { scrapDetailData } from '../../mocks/scrap-detail'
import { formatCount } from '../../utils/format'
import type { ScrapDetailView } from './types'

export function getScrapDetailViewData(): ScrapDetailView {
  return {
    post: {
      ...scrapDetailData.post,
      likesLabel: formatCount(scrapDetailData.post.likes),
      commentsLabel: formatCount(scrapDetailData.post.comments),
    },
    replies: scrapDetailData.replies.map((reply) => ({
      ...reply,
      likesLabel: formatCount(reply.likes),
      commentsLabel: formatCount(reply.comments),
    })),
  }
}
