import React, { useState } from 'react';
import { Post } from '../../App';
import { ArrowLeft, Image, Tag, Sparkles, Eye, AtSign, X } from 'lucide-react';

type BlogEditorProps = {
  onSave: () => void;
  onCancel: () => void;
  existingPost?: Post;
};

// モックユーザーリスト
const mockUsers = [
  { username: 'tanaka_taro', name: '田中太郎' },
  { username: 'sato_hanako', name: '佐藤花子' },
  { username: 'suzuki_ichiro', name: '鈴木一郎' },
  { username: 'takahashi_misaki', name: '高橋美咲' },
  { username: 'ito_kenta', name: '伊藤健太' },
];

export default function BlogEditor({ onSave, onCancel, existingPost }: BlogEditorProps) {
  const [title, setTitle] = useState(existingPost?.title || '');
  const [content, setContent] = useState(existingPost?.content || '');
  const [tags, setTags] = useState(existingPost?.tags.join(', ') || '');
  const [mentions, setMentions] = useState<string[]>(existingPost?.mentions || []);
  const [isPreview, setIsPreview] = useState(false);
  const [showMentionPicker, setShowMentionPicker] = useState(false);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      // 保存処理（モック）
      alert('ブログ記事を保存しました！');
      onSave();
    }
  };

  const handleAiSuggestion = () => {
    alert('AI機能は開発中です。タイトルや内容の改善案を提案します。');
  };

  const handleAddMention = (username: string) => {
    const newMentions = [...mentions, username];
    setMentions(newMentions);
    setContent(content + ` @${username}`);
  };

  const handleRemoveMention = (username: string) => {
    const newMentions = mentions.filter((mention) => mention !== username);
    setMentions(newMentions);
    setContent(content.replace(` @${username}`, ''));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <button
            onClick={onCancel}
            className="text-gray-600 active:text-gray-900 text-sm"
          >
            キャンセル
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="text-gray-700 active:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors text-sm flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              {isPreview ? '編集' : 'プレビュー'}
            </button>
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm active:bg-indigo-700 transition-colors"
            >
              {existingPost ? '更新' : '公開'}
            </button>
          </div>
        </div>
      </div>

      {!isPreview ? (
        /* 編集モード */
        <div className="p-4">
          {/* タイトル */}
          <div className="mb-4">
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
              placeholder="記事のタイトルを入力..."
              required
            />
          </div>

          {/* カバー画像 */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">
              カバー画像
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center active:border-indigo-400 transition-colors">
              <Image className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm mb-1">タップして画像をアップロード</p>
              <p className="text-gray-400 text-xs">JPG, PNG (最大5MB)</p>
            </div>
          </div>

          {/* 本文 */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="content" className="block text-sm text-gray-700">
                本文
              </label>
              <button
                onClick={handleAiSuggestion}
                className="flex items-center gap-1 text-indigo-600 active:text-indigo-700 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                AI改善案
              </button>
            </div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm"
              rows={15}
              placeholder="記事の本文を入力...&#10;&#10;Markdown記法が使用できます。"
              required
            />
            <p className="text-gray-500 text-sm mt-2">
              {content.length} 文字
            </p>
          </div>

          {/* タグ */}
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm text-gray-700 mb-2">
              タグ
            </label>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-gray-400" />
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                placeholder="React, JavaScript, Web開発 (カンマ区切り)"
              />
            </div>
            <p className="text-gray-500 text-sm mt-2">
              カンマ区切りで複数のタグを追加できます
            </p>
          </div>

          {/* メンション */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">
              メンション
            </label>
            <button
              onClick={() => setShowMentionPicker(!showMentionPicker)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 active:bg-gray-50 transition-colors text-sm w-full"
            >
              <AtSign className="w-5 h-5" />
              <span>共同執筆者をメンション</span>
            </button>

            {/* メンションピッカー */}
            {showMentionPicker && (
              <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {mockUsers.map((user) => (
                  <button
                    key={user.username}
                    onClick={() => handleAddMention(user.username)}
                    className={`w-full px-4 py-3 text-left active:bg-gray-50 transition-colors flex items-center justify-between ${mentions.includes(user.username) ? 'bg-indigo-50' : ''
                      }`}
                  >
                    <div>
                      <div className="text-sm text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">@{user.username}</div>
                    </div>
                    {mentions.includes(user.username) && (
                      <span className="text-indigo-600 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* メンションリスト */}
            {mentions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {mentions.map((username) => {
                  const user = mockUsers.find(u => u.username === username);
                  return (
                    <span
                      key={username}
                      className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                    >
                      @{user?.name || username}
                      <button
                        onClick={() => handleRemoveMention(username)}
                        className="active:text-blue-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* ヒント */}
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
            <h4 className="text-indigo-900 mb-2 text-sm">執筆のヒント</h4>
            <ul className="text-indigo-700 text-sm space-y-1">
              <li>• わかりやすいタイトルを心がけましょう</li>
              <li>• コードを含める場合は、適切にフォーマットしましょう</li>
              <li>• 関連性の高いタグを付けると、記事が見つけやすくなります</li>
            </ul>
          </div>
        </div>
      ) : (
        /* プレビューモード */
        <div>
          <div className="h-56 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
            <p className="text-white text-sm">カバー画像プレビュー</p>
          </div>

          <div className="p-4">
            <h1 className="text-gray-900 mb-4">
              {title || 'タイトルを入力してください'}
            </h1>

            {tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.split(',').map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            )}

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
                {content || '本文を入力してください'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}