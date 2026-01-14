import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'

export default function SettingsScreen() {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">
      <PhoneFrame className="bg-slate-50">
        <ScreenHeader>
          <div className="px-4 h-14 flex items-center justify-between">
            <div className="w-10" />
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              設定
            </h1>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
              aria-label="Close"
            >
              <MaterialIcon name="close" />
            </button>
          </div>
        </ScreenHeader>
        <main className="flex-1 overflow-y-auto pb-10">
          <section className="flex flex-col items-center pt-8 pb-6 px-4 bg-white rounded-b-2xl shadow-sm">
            <div className="relative mb-4 group cursor-pointer">
              <div className="w-36 h-36 rounded-full bg-amber-50 overflow-hidden border-4 border-white shadow-xl">
                <img
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf0hYWRdlQrBVFS6_SiTh4tUFPwiEUcXFniwTTSj_BU_0rplPbivDdnB-jNv6HFPnT0pGlUyaO86N6YrlyecMGU8BhYenXNpveWlor6Cx7Gc72MnxXUoMr7zrOh41Jn8x6EFQ4geR9mo5NEbL11AMoMt_aK-bhfGifCNCF4swqX1ljS_KGNImIohpsdNIFHQhxZIHuQncbcC4NA6CakCwHVZB5N26dAqn7Nso7mjjoi_aHBe2nr8L3oMgI3xa-eWscVYLIQOAxMW70"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-indigo-400 text-white p-2 rounded-full border-2 border-white shadow-md flex items-center justify-center hover:bg-indigo-400/90 transition-colors active:scale-95">
                <MaterialIcon name="edit" className="text-[18px]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-1 text-slate-900">
              山田 太郎
            </h2>
            <p className="text-base text-slate-500 font-medium mb-3">
              工学部 情報学科
            </p>
            <p className="text-base text-slate-900 text-center max-w-[300px] leading-relaxed">
              UXデザインとモバイル開発に興味があります。最近はSwiftUIを勉強中📱
            </p>
          </section>

          <section className="px-4 mb-2 mt-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-3 mb-2">
              プロフィール
            </h3>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <SettingsRow
                icon="photo_camera"
                label="アイコンを変更"
                iconClassName="bg-sky-100 text-indigo-500"
                withDivider
              />
              <SettingsRow
                icon="edit_note"
                label="自己紹介を編集"
                iconClassName="bg-pink-100 text-indigo-500"
              />
            </div>
          </section>

          <section className="px-4 mt-6 mb-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-3 mb-2">
              アカウント
            </h3>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <SettingsRow
                icon="notifications"
                label="通知設定"
                iconClassName="bg-amber-50 text-orange-500"
                withDivider
              />
              <SettingsRow
                icon="lock"
                label="プライバシー"
                iconClassName="bg-emerald-100 text-emerald-500"
              />
            </div>
          </section>

          <section className="px-4 mt-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors active:bg-red-100 group">
                <span className="text-base font-medium text-red-500 text-left w-full text-center">
                  ログアウト
                </span>
              </button>
            </div>
          </section>

          <div className="mt-8 text-center pb-8">
            <p className="text-xs text-slate-500">v1.2.0 (Build 452)</p>
          </div>
        </main>
      </PhoneFrame>
    </div>
  )
}

type SettingsRowProps = {
  icon: string
  label: string
  iconClassName: string
  withDivider?: boolean
}

function SettingsRow({
  icon,
  label,
  iconClassName,
  withDivider = false,
}: SettingsRowProps) {
  return (
    <button
      className={`w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors active:bg-slate-100 group ${
        withDivider ? 'border-b border-slate-100' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${iconClassName}`}
        >
          <MaterialIcon name={icon} className="text-[22px]" />
        </div>
        <span className="text-base font-medium text-left text-slate-900">
          {label}
        </span>
      </div>
      <MaterialIcon name="chevron_right" className="text-slate-400" />
    </button>
  )
}
