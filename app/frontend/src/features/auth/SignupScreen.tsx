import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'

export default function SignupScreen() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <PhoneFrame className="bg-slate-100 overflow-hidden shadow-2xl">
        <ScreenHeader className="bg-slate-100 border-slate-200">
          <div className="flex items-center justify-between px-4 pt-12 pb-2">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors text-slate-800"
              aria-label="Back"
            >
              <MaterialIcon name="arrow_back" className="text-2xl" />
            </button>
            <h2 className="text-lg font-bold text-slate-800">新規登録</h2>
            <div className="w-10" />
          </div>
        </ScreenHeader>

        <main className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-8">
          <div className="pt-6 pb-8 text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <MaterialIcon name="school" className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">
              Create Account
            </h1>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
              あなたのScrapとArtifactsを共有しましょう。
              <br />
              学内の新しいつながりがここから始まります。
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <InputField
              label="名前"
              placeholder="例: 山田 太郎"
              icon="person"
            />
            <InputField
              label="メールアドレス"
              placeholder="student@university.edu"
              icon="mail"
              type="email"
            />
            <PasswordField label="パスワード" placeholder="8文字以上の英数字" />
            <PasswordField
              label="パスワード（確認）"
              placeholder="パスワードを再入力"
            />

            <div className="pt-4">
              <button
                className="w-full h-12 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                type="submit"
              >
                登録する
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </form>
          <p className="mt-6 text-xs text-center text-slate-400 leading-relaxed px-4">
            登録ボタンを押すことで、
            <a className="text-blue-600 hover:underline" href="#">
              利用規約
            </a>
            および
            <a className="text-blue-600 hover:underline" href="#">
              プライバシーポリシー
            </a>
            に同意したものとみなされます。
          </p>
        </main>
        <div className="p-6 bg-slate-100 border-t border-slate-200">
          <p className="text-center text-sm text-slate-500">
            すでにアカウントをお持ちですか？
            <a
              className="font-bold text-blue-600 hover:text-blue-400 ml-1 transition-colors"
              href="#"
            >
              ログインはこちら
            </a>
          </p>
        </div>
      </PhoneFrame>
    </div>
  )
}

type InputFieldProps = {
  label: string
  placeholder: string
  icon: string
  type?: string
}

function InputField({
  label,
  placeholder,
  icon,
  type = 'text',
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-base"
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute right-4 text-slate-400 pointer-events-none flex items-center">
          <MaterialIcon name={icon} className="text-[20px]" />
        </div>
      </div>
    </div>
  )
}

type PasswordFieldProps = {
  label: string
  placeholder: string
}

function PasswordField({ label, placeholder }: PasswordFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-base"
          placeholder={placeholder}
          type="password"
        />
        <button
          className="absolute right-4 text-slate-400 hover:text-blue-600 transition-colors flex items-center"
          type="button"
          aria-label="Toggle password"
        >
          <MaterialIcon name="visibility_off" className="text-[20px]" />
        </button>
      </div>
    </div>
  )
}
