import React, { useState } from 'react';
import { ArrowRight, Lock, LogIn, Mail } from 'lucide-react';

type LoginPageProps = {
  onLogin: (email: string, password: string) => void;
  onNavigateToSignup: () => void;
};

export default function LoginPage({ onLogin, onNavigateToSignup }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('メールアドレスとパスワードを入力してください');
      return;
    }

    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* ロゴ・タイトル */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">ログイン</h1>
          <p className="text-gray-600 text-sm">学内SNSへようこそ</p>
        </div>

        {/* エラーメッセージ */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        {/* ログインフォーム */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              メールアドレス
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="example@university.ac.jp"
                autoComplete="email"
              />
            </div>
          </div>

          {/* パスワード */}
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
              パスワード
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* パスワードを忘れた場合 */}
          <div className="text-right">
            <button type="button" className="text-indigo-600 text-sm active:text-indigo-700">
              パスワードを忘れた場合
            </button>
          </div>

          {/* ログインボタン */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <span>ログイン</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* サインアップへの導線 */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-2">アカウントをお持ちでない方</p>
          <button
            onClick={onNavigateToSignup}
            className="text-indigo-600 font-medium active:text-indigo-700 flex items-center justify-center gap-2 mx-auto"
          >
            <span>新規登録</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* デモログイン */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={() => onLogin('tanaka@university.ac.jp', 'demo')}
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm active:bg-gray-200 transition-colors"
          >
            デモアカウントでログイン（田中太郎）
          </button>
        </div>
      </div>
    </div>
  );
}
1