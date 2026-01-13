import React, { useState } from 'react';
import { Post, Comment, User } from '../../App';
import { ArrowLeft, Heart, MessageSquare, Share2, Send, Edit, Trash2, Clock, Sparkles, AtSign } from 'lucide-react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type BlogDetailProps = {
  post: Post;
  onBack: () => void;
  onEdit: (post: Post) => void;
  currentUser: User | null;
};

const mockComments: Comment[] = [
  {
    id: '1',
    postId: '1',
    userId: '2',
    userName: '佐藤花子',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    username: 'sato_hanako',
    content: 'とても参考になりました！useReducerについても知りたいです。',
    createdAt: new Date(2024, 11, 9, 10, 15),
  },
  {
    id: '2',
    postId: '1',
    userId: '3',
    userName: '鈴木一郎',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
    username: 'suzuki_ichiro',
    content: '実装例がわかりやすくて助かります。実務でも活用してみます。',
    createdAt: new Date(2024, 11, 9, 14, 30),
  },
];

export default function BlogDetail({ post, onBack, onEdit, currentUser }: BlogDetailProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likes, setLikes] = useState(post.likes);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [showAiSummary, setShowAiSummary] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim() && currentUser) {
      const newComment: Comment = {
        id: Math.random().toString(),
        postId: post.id,
        userId: currentUser.id,
        userName: currentUser.name,
        userAvatar: currentUser.avatar,
        username: currentUser.username,
        content: commentText,
        createdAt: new Date(),
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const handleAiSummary = () => {
    setShowAiSummary(!showAiSummary);
  };

  const isOwnPost = post.userId === currentUser?.id;

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 -ml-2 active:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-gray-900">ブログ</h1>
        </div>
      </div>

      {/* メイン記事 */}
      <article>
        {post.images && post.images.length > 0 && (
          <img
            src={post.images[0]}
            alt={post.title}
            className="w-full h-56 object-cover"
          />
        )}

        <div className="p-4">
          {/* 著者情報 */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={post.userAvatar}
                alt={post.userName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 text-sm">{post.userName}</span>
                  <span className="text-gray-500 text-xs">@{post.username}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{format(post.createdAt, 'yyyy/M/d', { locale: ja })}</span>
                </div>
              </div>
            </div>

            {isOwnPost && (
              <div className="flex gap-1">
                <button
                  onClick={() => onEdit(post)}
                  className="p-2 text-gray-500 active:bg-gray-100 rounded-full transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 active:bg-gray-100 rounded-full transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* タイトル */}
          <h1 className="text-gray-900 mb-4">{post.title}</h1>

          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* AI要約 */}
          <div className="mb-4">
            <button
              onClick={handleAiSummary}
              className="flex items-center gap-2 text-indigo-600 active:text-indigo-700 mb-3 text-sm"
            >
              <Sparkles className="w-5 h-5" />
              <span>AI要約を{showAiSummary ? '隠す' : '表示'}</span>
            </button>

            {showAiSummary && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span className="text-indigo-900 text-sm">AI要約</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  この記事では、React Hooksを使った効率的な状態管理について解説しています。useStateとuseEffectの基本的な使い方から、複雑な状態管理のパターンまで、実装例を交えながら詳しく説明されています。
                </p>
              </div>
            )}
          </div>

          {/* 本文 */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
              {post.content}
            </p>
          </div>

          {/* アクション */}
          <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
            <button
              className={`flex items-center gap-2 active:scale-95 transition-transform ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
              onClick={handleLike}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likes}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-500">
              <MessageSquare className="w-6 h-6" />
              <span>{comments.length}</span>
            </div>
            <button className="flex items-center gap-2 text-gray-500 active:scale-95 transition-transform">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </article>

      {/* コメント入力 */}
      {currentUser ? (
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="この記事についてコメント..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm"
                rows={2}
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleComment}
                  disabled={!commentText.trim()}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm active:scale-95 transition-transform disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  投稿
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-t border-gray-200 p-6 text-center">
          <p className="text-gray-600 text-sm mb-3">コメントするにはログインが必要です</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm active:scale-95 transition-transform">
            ログイン
          </button>
        </div>
      )}

      {/* コメント一覧 */}
      <div className="bg-gray-50">
        {comments.length > 0 && (
          <div className="px-4 py-3 bg-white border-t border-gray-200">
            <h3 className="text-gray-900 text-sm">コメント {comments.length}件</h3>
          </div>
        )}

        <div className="divide-y divide-gray-200">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4">
              <div className="flex items-start gap-3">
                <img
                  src={comment.userAvatar}
                  alt={comment.userName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-gray-900 text-sm">{comment.userName}</span>
                    <span className="text-gray-500 text-xs">@{comment.username}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500 text-xs">
                      {format(comment.createdAt, 'M/d HH:mm', { locale: ja })}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="bg-white p-12 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">まだコメントがありません</p>
            <p className="text-gray-400 text-xs mt-1">
              最初のコメントを投稿してみましょう
            </p>
          </div>
        )}
      </div>
    </div>
  );
}