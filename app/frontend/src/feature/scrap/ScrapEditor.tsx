import React, { useState } from 'react';
import { Post } from '../../App';
import { ArrowLeft, Image, Tag, X } from 'lucide-react';
import { AtSign } from 'lucide-react';

type ScrapEditorProps = {
  onSave: () => void;
  onCancel: () => void;
  existingPost?: Post;
};

export default function ScrapEditor({ onSave, onCancel, existingPost }: ScrapEditorProps) {
  const [content, setContent] = useState(existingPost?.content || '');
  const [tags, setTags] = useState<string[]>(existingPost?.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [mentions, setMentions] = useState<string[]>(existingPost?.mentions || []);
  const [showMentionPicker, setShowMentionPicker] = useState(false);

  const handleSave = () => {
    if (content.trim()) {
      alert('投稿しました！');
      onSave();
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddMention = (username: string) => {
    if (!mentions.includes(username)) {
      setMentions([...mentions, username]);
    }
    setShowMentionPicker(false);
  };

  const handleRemoveMention = (username: string) => {
    setMentions(mentions.filter(m => m !== username));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const mockUsers = [
    { name: 'Alice', username: 'alice' },
    { name: 'Bob', username: 'bob' },
    { name: 'Charlie', username: 'charlie' },
    { name: 'David', username: 'david' },
    { name: 'Eve', username: 'eve' },
  ];

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
          <h1 className="text-gray-900">投稿</h1>
          <button
            onClick={handleSave}
            disabled={!content.trim()}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm active:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {existingPost ? '更新' : '投稿'}
          </button>
        </div>
      </div>

      {/* エディター */}
      <div className="p-4">
        {/* 本文 */}
        <div className="mb-4">
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            rows={8}
            placeholder="今何してる？何を学んだ？"
            required
          />
          <p className="text-gray-500 text-sm mt-2">
            {content.length} 文字
          </p>
        </div>

        {/* 画像アップロード */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">
            画像を追加
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center active:border-indigo-400 transition-colors">
            <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm mb-1">タップして画像をアップロード</p>
            <p className="text-gray-400 text-xs">JPG, PNG (最大5MB)</p>
          </div>
        </div>

        {/* タグ */}
        <div className="mb-4">
          <label htmlFor="tagInput" className="block text-sm text-gray-700 mb-2">
            タグ
          </label>
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-gray-400" />
            <input
              id="tagInput"
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              placeholder="タグを追加 (Enterで確定)"
            />
            <button
              onClick={handleAddTag}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg active:bg-indigo-700 transition-colors text-sm"
            >
              追加
            </button>
          </div>

          {/* タグリスト */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                >
                  #{tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="active:text-indigo-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
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
            <span>参加者をメンション</span>
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
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-gray-900 mb-2 text-sm">投稿のヒント</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• 学んだことや気づきを共有しましょう</li>
            <li>• ハッシュタグを使って投稿を見つけやすくしましょう</li>
            <li>• 画像を添付すると、より伝わりやすくなります</li>
          </ul>
        </div>
      </div>
    </div>
  );
}