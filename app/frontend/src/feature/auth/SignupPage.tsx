import React, { useState } from 'react';
import { ArrowRight, Check, Lock, Mail, User, UserPlus } from 'lucide-react';

type SignupPageProps = {
  onSignup: (name: string, email: string, password: string) => void;
  onNavigateToLogin: () => void;
};

export default function SignupPage({ onSignup, onNavigateToLogin }: SignupPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('すべての項目を入力してください');
      return;
    }

    if (password !== confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }

    if (password.length < 8) {
      setError('パスワードは8文字以上で入力してください');
      return;
    }

    onSignup(name, email, password);
  };

  const passwordsMatch = password && confirmPassword && password === confirmPassword;
  const passwordLongEnough = password.length >= 8;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* ロゴ・タイトル */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">新規登録</h1>
          <p className="text-gray-600 text-sm">学内SNSアカウントを作成</p>
        </div>

        {/* エラーメッセージ */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        {/* サインアップフォーム */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 名前 */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
              名前
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="田中太郎"
                autoComplete="name"
              />
            </div>
          </div>

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
                placeholder="8文字以上"
                autoComplete="new-password"
              />
            </div>
            {password && (
              <div className="mt-2 flex items-center gap-2 text-sm">
                {passwordLongEnough ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                )}
                <span className={passwordLongEnough ? 'text-green-600' : 'text-gray-500'}>
                  8文字以上
                </span>
              </div>
            )}
          </div>

          {/* パスワード確認 */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2">
              パスワード確認
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="パスワードを再入力"
                autoComplete="new-password"
              />
            </div>
            {confirmPassword && (
              <div className="mt-2 flex items-center gap-2 text-sm">
                {passwordsMatch ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                )}
                <span className={passwordsMatch ? 'text-green-600' : 'text-gray-500'}>
                  パスワードが一致しています
                </span>
              </div>
            )}
          </div>

          {/* サインアップボタン */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg mt-6"
          >
            <span>アカウントを作成</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* ログインへの導線 */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-2">すでにアカウントをお持ちの方</p>
          <button
            onClick={onNavigateToLogin}
            className="text-indigo-600 font-medium active:text-indigo-700 flex items-center justify-center gap-2 mx-auto"
          >
            <span>ログイン</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
