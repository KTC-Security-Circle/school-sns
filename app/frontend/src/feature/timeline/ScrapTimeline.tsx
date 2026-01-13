import React, { useState } from 'react';
import { Post } from '../../App';
import { Heart, MessageSquare, Share2, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type ScrapTimelineProps = {
  onViewPost: (post: Post) => void;
};

const mockScraps: Post[] = [
  {
    id: '1',
    type: 'scrap',
    userId: '1',
    userName: '田中太郎',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    username: 'tanaka_taro',
    content: '今日のハッカソンで優勝しました！チームメンバーに感謝🎉',
    tags: ['ハッカソン', '開発'],
    likes: 45,
    comments: 12,
    createdAt: new Date(2024, 11, 10),
    isLiked: true,
  },
  {
    id: '2',
    type: 'scrap',
    userId: '2',
    userName: '佐藤花子',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    username: 'sato_hanako',
    content: 'TypeScriptの型推論が面白すぎる！まだまだ学ぶことがたくさんある。',
    tags: ['TypeScript', 'プログラミング'],
    likes: 23,
    comments: 5,
    createdAt: new Date(2024, 11, 10),
  },
  {
    id: '3',
    type: 'scrap',
    userId: '3',
    userName: '鈴木一郎',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
    username: 'suzuki_ichiro',
    content: 'サークルの新歓イベント大成功！来年度に向けて頑張ろう💪',
    tags: ['サークル', 'イベント'],
    likes: 67,
    comments: 18,
    createdAt: new Date(2024, 11, 9),
    images: ['https://images.unsplash.com/photo-1758270705482-cee87ea98738?w=800&h=400&fit=crop'],
  },
  {
    id: '4',
    type: 'scrap',
    userId: '4',
    userName: '高橋美咲',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    username: 'takahashi_misaki',
    content: 'データ構造とアルゴリズムの課題、やっと終わった...難しかった😅',
    tags: ['課題', 'アルゴリズム'],
    likes: 34,
    comments: 9,
    createdAt: new Date(2024, 11, 9),
  },
  {
    id: '5',
    type: 'scrap',
    userId: '5',
    userName: '伊藤健太',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    username: 'ito_kenta',
    content: 'GitHubのプルリクエスト、初めてマージされた！オープンソースに貢献できて嬉しい',
    tags: ['GitHub', 'OSS'],
    likes: 89,
    comments: 21,
    createdAt: new Date(2024, 11, 8),
  },
];

export default function ScrapTimeline({ onViewPost }: ScrapTimelineProps) {
  const [filter, setFilter] = useState<'all' | 'following'>('all');
  const [posts, setPosts] = useState(mockScraps);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-gray-900">Scraps</h1>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | 'following')}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">すべて</option>
              <option value="following">フォロー中</option>
            </select>
          </div>
        </div>
      </div>

      {/* タイムライン */}
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 active:bg-gray-50 transition-colors"
            onClick={() => onViewPost(post)}
          >
            <div className="flex items-start gap-3">
              <img
                src={post.userAvatar}
                alt={post.userName}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-gray-900 text-sm">{post.userName}</span>
                  <span className="text-gray-500 text-sm">@{post.username}</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-500 text-sm">
                    {format(post.createdAt, 'M月d日', { locale: ja })}
                  </span>
                </div>

                <p className="text-gray-900 mb-3 whitespace-pre-wrap leading-relaxed">{post.content}</p>

                {post.images && post.images.length > 0 && (
                  <img
                    src={post.images[0]}
                    alt="Scrap image"
                    className="w-full rounded-lg mb-3"
                  />
                )}

                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-gray-500">
                  <button
                    className={`flex items-center gap-2 active:scale-95 transition-transform ${post.isLiked ? 'text-red-500' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(post.id);
                    }}
                  >
                    <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button
                    className="flex items-center gap-2 active:scale-95 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button
                    className="flex items-center gap-2 active:scale-95 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}