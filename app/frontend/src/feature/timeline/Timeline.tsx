import React, { useState } from 'react';
import { Post } from '../../App';
import { Heart, MessageSquare, Share2, Clock, AtSign } from 'lucide-react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type TimelineProps = {
  onViewPost: (post: Post) => void;
};

const mockPosts: Post[] = [
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
    createdAt: new Date(2024, 11, 10, 16, 30),
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
    createdAt: new Date(2024, 11, 10, 14, 20),
  },
  {
    id: '3',
    type: 'blog',
    userId: '3',
    userName: '鈴木一郎',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
    username: 'suzuki_ichiro',
    title: 'UIデザインの基礎：ユーザビリティを高める10のポイント',
    content: '良いUIデザインは、ユーザーの体験を大きく向上させます。この記事では、初心者デザイナーが押さえておくべき10の重要なポイントを紹介します...',
    tags: ['デザイン', 'UI/UX', 'ユーザビリティ'],
    likes: 234,
    comments: 67,
    createdAt: new Date(2024, 11, 9, 18, 45),
    images: ['https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?w=800&h=400&fit=crop'],
  },
  {
    id: '4',
    type: 'scrap',
    userId: '3',
    userName: '鈴木一郎',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
    username: 'suzuki_ichiro',
    content: 'サークルの新歓イベント大成功！来年度に向けて頑張ろう💪',
    tags: ['サークル', 'イベント'],
    likes: 67,
    comments: 18,
    createdAt: new Date(2024, 11, 9, 15, 30),
    images: ['https://images.unsplash.com/photo-1758270705482-cee87ea98738?w=800&h=400&fit=crop'],
  },
  {
    id: '5',
    type: 'blog',
    userId: '1',
    userName: '田中太郎',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    username: 'tanaka_taro',
    title: 'React Hooksを使った状態管理の実践',
    content: 'useStateとuseEffectを活用した効率的なコンポーネント設計について解説します。Reactの状態管理は初心者にとって難しい概念の一つですが、Hooksを理解することで、より直感的にコードを書くことができるようになります...',
    tags: ['React', 'JavaScript', 'フロントエンド'],
    likes: 89,
    comments: 23,
    createdAt: new Date(2024, 11, 8, 10, 15),
    images: ['https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=800&h=400&fit=crop'],
  },
  {
    id: '6',
    type: 'scrap',
    userId: '4',
    userName: '高橋美咲',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    username: 'takahashi_misaki',
    content: 'データ構造とアルゴリズムの課題、やっと終わった...難しかった😅',
    tags: ['課題', 'アルゴリズム'],
    likes: 34,
    comments: 9,
    createdAt: new Date(2024, 11, 8, 9, 10),
  },
  {
    id: '7',
    type: 'blog',
    userId: '2',
    userName: '佐藤花子',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    username: 'sato_hanako',
    title: 'TypeScriptの型システム入門',
    content: 'TypeScriptの強力な型システムを活用することで、より堅牢なアプリケーションを構築できます。この記事では、基本的な型定義から、ジェネリクス、ユーティリティ型まで幅広く解説します...',
    tags: ['TypeScript', 'プログラミング', '型安全'],
    likes: 156,
    comments: 41,
    createdAt: new Date(2024, 11, 6, 14, 0),
  },
  {
    id: '8',
    type: 'scrap',
    userId: '5',
    userName: '伊藤健太',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    username: 'ito_kenta',
    content: 'GitHubのプルリクエスト、初めてマージされた！オープンソースに貢献できて嬉しい',
    tags: ['GitHub', 'OSS'],
    likes: 89,
    comments: 21,
    createdAt: new Date(2024, 11, 5, 20, 30),
  },
];

export default function Timeline({ onViewPost }: TimelineProps) {
  const [filter, setFilter] = useState<'all' | 'scrap' | 'blog'>('all');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const filteredPosts = mockPosts
    .filter(post => filter === 'all' || post.type === filter)
    .map(post => ({
      ...post,
      isLiked: likedPosts.has(post.id)
    }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3">
          <h1 className="text-gray-900 mb-3">タイムライン</h1>

          {/* フィルター */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('scrap')}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${filter === 'scrap'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                }`}
            >
              スクラップ
            </button>
            <button
              onClick={() => setFilter('blog')}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${filter === 'blog'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                }`}
            >
              ブログ
            </button>
          </div>
        </div>
      </div>

      {/* タイムライン */}
      <div className="divide-y divide-gray-200 bg-gray-50">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`bg-white active:bg-gray-50 transition-colors ${post.type === 'blog' ? 'border-l-4 border-indigo-500' : ''
              }`}
            onClick={() => onViewPost(post)}
          >
            {post.type === 'blog' ? (
              /* ブログ投稿 */
              <div className="p-4">
                {post.images && post.images.length > 0 && (
                  <div className="relative -mx-4 -mt-4 mb-4 overflow-hidden">
                    <img
                      src={post.images[0]}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      ブログ
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.userAvatar}
                      alt={post.userName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 truncate font-medium">{post.userName}</span>
                        <span className="text-gray-500 text-xs">@{post.username}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{format(post.createdAt, 'M/d HH:mm', { locale: ja })}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-gray-900 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {post.content}
                  </p>

                  {/* メンション */}
                  {post.mentions && post.mentions.length > 0 && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
                      <div className="flex items-center gap-2">
                        <AtSign className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <div className="flex flex-wrap gap-1 text-sm">
                          <span className="text-gray-600">共同執筆:</span>
                          {post.mentions.map((mention, index) => (
                            <span key={mention} className="text-blue-700 font-medium">
                              @{mention}{index < post.mentions!.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium border border-indigo-100"
                        onClick={(e) => e.stopPropagation()}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-gray-500">
                      <button
                        className={`flex items-center gap-1.5 active:scale-95 transition-all ${post.isLiked ? 'text-red-500' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                      >
                        <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                      <button
                        className="flex items-center gap-1.5 active:scale-95 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>
                    </div>
                    <button className="text-indigo-600 text-sm font-medium active:text-indigo-700">
                      続きを読む →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Scrap投稿 */
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <img
                    src={post.userAvatar}
                    alt={post.userName}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-gray-900 text-sm font-medium">{post.userName}</span>
                      <span className="text-gray-500 text-xs">@{post.username}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-500 text-xs">
                        {format(post.createdAt, 'M月d日 HH:mm', { locale: ja })}
                      </span>
                    </div>

                    <p className="text-gray-900 mb-3 whitespace-pre-wrap leading-relaxed">{post.content}</p>

                    {post.images && post.images.length > 0 && (
                      <div className="rounded-lg overflow-hidden mb-3 border border-gray-200">
                        <img
                          src={post.images[0]}
                          alt="Scrap image"
                          className="w-full"
                        />
                      </div>
                    )}

                    {/* メンション */}
                    {post.mentions && post.mentions.length > 0 && (
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-2.5 mb-3 border border-blue-100">
                        <div className="flex items-center gap-2 flex-wrap">
                          <AtSign className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <div className="flex flex-wrap gap-1 text-xs">
                            {post.mentions.map((mention, index) => (
                              <span key={mention} className="text-blue-700 font-medium">
                                @{mention}{index < post.mentions!.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full text-xs font-medium border border-indigo-100"
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
                        className={`flex items-center gap-1.5 active:scale-95 transition-all ${post.isLiked ? 'text-red-500' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                      >
                        <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                      <button
                        className="flex items-center gap-1.5 active:scale-95 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>
                      <button
                        className="flex items-center gap-1.5 active:scale-95 transition-all ml-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}