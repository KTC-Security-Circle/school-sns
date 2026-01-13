import React, { useState } from 'react';
import { Post, Comment, User } from '../../App';
import { ArrowLeft, Heart, MessageSquare, Share2, Send, Edit, Trash2, AtSign, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

type ScrapDetailProps = {
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
    content: 'おめでとうございます！🎉 どんなプロダクトを作ったんですか？',
    createdAt: new Date(2024, 11, 10, 15, 30),
  },
  {
    id: '2',
    postId: '1',
    userId: '3',
    userName: '鈴木一郎',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
    username: 'suzuki_ichiro',
    content: 'すごい！詳しく聞きたいです！',
    createdAt: new Date(2024, 11, 10, 16, 45),
  },
];

export default function ScrapDetail({ post, onBack, onEdit, currentUser }: ScrapDetailProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likes, setLikes] = useState(post.likes);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>(mockComments);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      const newComment: Comment = {
        id: Math.random().toString(),
        postId: post.id,
        userId: currentUser?.id || '',
        userName: currentUser?.name || '',
        userAvatar: currentUser?.avatar || '',
        username: currentUser?.username || '',
        content: commentText,
        createdAt: new Date(),
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const isOwnPost = post.userId === currentUser?.id;

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 -ml-2 active:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-gray-900">Scrap</h1>
        </div>
      </div>

      {/* メイン投稿 */}
      <div className="bg-white border-b-8 border-gray-100">
        <div className="p-4">
          <div className="flex items-start gap-3 mb-4">
            <img
              src={post.userAvatar}
              alt={post.userName}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-900 font-medium">{post.userName}</span>
                <span className="text-gray-500 text-sm">@{post.username}</span>
              </div>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {format(post.createdAt, 'yyyy年M月d日 HH:mm', { locale: ja })}
              </span>
            </div>

            {isOwnPost && (
              <div className="flex gap-1">
                <button
                  onClick={() => onEdit(post)}
                  className="p-2 text-gray-500 active:bg-gray-100 rounded-full transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 active:bg-gray-100 rounded-full transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          <p className="text-gray-900 text-lg mb-4 whitespace-pre-wrap leading-relaxed">{post.content}</p>

          {post.images && post.images.length > 0 && (
            <div className="rounded-xl overflow-hidden mb-4 border border-gray-200">
              <img
                src={post.images[0]}
                alt="Post image"
                className="w-full"
              />
            </div>
          )}

          {/* メンション表示 */}
          {post.mentions && post.mentions.length > 0 && (
            <div className="mb-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <AtSign className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-2">参加メンバー</div>
                  <div className="flex flex-wrap gap-2">
                    {post.mentions.map((mention) => (
                      <div key={mention} className="bg-white rounded-full px-3 py-1.5 shadow-sm border border-blue-100">
                        <span className="text-blue-700 font-medium text-sm">@{mention}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full text-sm font-medium border border-indigo-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 pt-4 border-t border-gray-200">
            <button
              className={`flex items-center gap-2 active:scale-95 transition-all ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
              onClick={handleLike}
            >
              <div className={`p-2 rounded-full ${isLiked ? 'bg-red-50' : 'bg-gray-50'}`}>
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              </div>
              <span className="font-medium">{likes}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="p-2 rounded-full bg-gray-50">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="font-medium">{comments.length}</span>
            </div>
            <button className="flex items-center gap-2 text-gray-500 active:scale-95 transition-all ml-auto">
              <div className="p-2 rounded-full bg-gray-50">
                <Share2 className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* コメント入力 */}
      {currentUser ? (
        <div className="bg-white border-b border-gray-200 p-4">
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
                placeholder="コメントを追加..."
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
        <div className="bg-white border-b border-gray-200 p-6 text-center">
          <p className="text-gray-600 text-sm mb-3">コメントするにはログインが必要です</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm active:scale-95 transition-transform">
            ログイン
          </button>
        </div>
      )}

      {/* コメント一覧 */}
      <div className="bg-gray-50">
        {comments.length > 0 && (
          <div className="px-4 py-2 bg-white border-b border-gray-200">
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
                      {format(comment.createdAt, 'M月d日 HH:mm', { locale: ja })}
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