import React, { useState } from 'react';
import { Search, Hash, User, FileText, X } from 'lucide-react';

type SearchPageProps = {
  onViewPost: (page: string) => void;
};

export default function SearchPage({ onViewPost }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'all' | 'posts' | 'tags' | 'users'>('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索処理（デモ用）
    console.log('Searching for:', searchQuery, 'Type:', searchType);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="px-4 py-3">
          <h1 className="text-gray-900 mb-4">検索</h1>

          {/* 検索フォーム */}
          <form onSubmit={handleSearch} className="space-y-3">
            {/* 検索入力 */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="投稿、タグ、ユーザーを検索..."
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 active:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* 検索タイプ選択 */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setSearchType('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${searchType === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                  }`}
              >
                すべて
              </button>
              <button
                type="button"
                onClick={() => setSearchType('posts')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${searchType === 'posts'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                  }`}
              >
                <FileText className="w-4 h-4" />
                投稿
              </button>
              <button
                type="button"
                onClick={() => setSearchType('tags')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${searchType === 'tags'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                  }`}
              >
                <Hash className="w-4 h-4" />
                タグ
              </button>
              <button
                type="button"
                onClick={() => setSearchType('users')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${searchType === 'users'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                  }`}
              >
                <User className="w-4 h-4" />
                ユーザー
              </button>
            </div>

            {/* 検索ボタン */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Search className="w-5 h-5" />
              <span>検索</span>
            </button>
          </form>
        </div>
      </div>

      {/* 検索結果エリア */}
      <div className="p-4">
        {!searchQuery ? (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">キーワードを入力して検索</p>
            <p className="text-gray-400 text-sm mt-1">
              投稿、タグ、ユーザーを検索できます
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <p className="text-gray-600">「{searchQuery}」の検索結果</p>
            <p className="text-gray-400 text-sm mt-2">
              検索機能は開発中です
            </p>
          </div>
        )}
      </div>
    </div>
  );
}