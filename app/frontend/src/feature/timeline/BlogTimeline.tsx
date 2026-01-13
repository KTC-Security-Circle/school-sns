import React, { useState } from 'react';
import { Post } from '../../App';
import { Heart, MessageSquare, Share2, Filter, Clock, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type BlogTimelineProps = {
  onViewPost: (post: Post) => void;
};

const mockBlogs: Post[] = [
  {
    id: '1',
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
    createdAt: new Date(2024, 11, 8),
    images: ['https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=800&h=400&fit=crop'],
  },
  {
    id: '2',
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
    createdAt: new Date(2024, 11, 6),
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
    createdAt: new Date(2024, 11, 5),
    images: ['https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?w=800&h=400&fit=crop'],
  },
  {
    id: '4',
    type: 'blog',
    userId: '4',
    userName: '高橋美咲',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    username: 'takahashi_misaki',
    title: 'データ構造とアルゴリズム：ソートアルゴリズムの比較',
    content: 'バブルソート、クイックソート、マージソートなど、様々なソートアルゴリズムの特徴と計算量を比較します。実装例とともに、それぞれの使い分けについても解説...',
    tags: ['アルゴリズム', 'データ構造', 'CS'],
    likes: 178,
    comments: 34,
    createdAt: new Date(2024, 11, 3),
  },
];

export default function BlogTimeline({ onViewPost }: BlogTimelineProps) {
  const [filter, setFilter] = useState<'all' | 'following'>('all');
  const [posts, setPosts] = useState(mockBlogs);

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
            <h1 className="text-gray-900">ブログ</h1>
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

      {/* ブログ記事リスト */}
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white active:bg-gray-50 transition-colors"
            onClick={() => onViewPost(post)}
          >
            {post.images && post.images.length > 0 && (
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={post.userAvatar}
                  alt={post.userName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-900 truncate">{post.userName}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">{format(post.createdAt, 'M/d', { locale: ja })}</span>
                  </div>
                </div>
              </div>

              <h2 className="text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.content}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    onClick={(e) => e.stopPropagation()}
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}