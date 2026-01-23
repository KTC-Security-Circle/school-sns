export type ScrapAuthor = {
  name: string
  handle: string
  avatar: string
}

export type ScrapDetailPost = {
  author: ScrapAuthor
  text: Array<string>
  timeLabel: string
  likes: number
  comments: number
}

export type ScrapReply = {
  id: string
  author: ScrapAuthor
  time: string
  text: string
  likes: number
  comments: number
}

export type ScrapDetailData = {
  post: ScrapDetailPost
  replies: Array<ScrapReply>
}

export type ScrapDetailView = {
  post: ScrapDetailPost & {
    likesLabel: string
    commentsLabel: string
  }
  replies: Array<
    ScrapReply & {
      likesLabel: string
      commentsLabel: string
    }
  >
}
