import MaterialIcon from '../../../components/MaterialIcon'

export default function ArtifactFooter() {
  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 px-5 py-4 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.05)] z-20">
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98] transition-all">
          <MaterialIcon name="save" className="text-[18px]" />
          下書き保存
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-900/25">
          公開する
          <MaterialIcon name="send" className="text-[18px]" />
        </button>
      </div>
    </div>
  )
}
