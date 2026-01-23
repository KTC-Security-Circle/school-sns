import MaterialIcon from '../../../components/MaterialIcon'

export default function SearchHeader() {
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="relative flex-1 group">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 transition-colors group-focus-within:text-blue-600">
            <MaterialIcon name="search" className="text-[22px]" />
          </span>
          <input
            className="w-full py-2.5 pl-11 pr-8 bg-slate-100 border-none rounded-xl text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-500/70 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all shadow-sm"
            placeholder="投稿、タグ、ユーザーを検索"
            type="search"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <MaterialIcon
              name="cancel"
              className="text-[20px] text-slate-500/50 opacity-0 group-focus-within:opacity-100 transition-opacity cursor-pointer"
            />
          </span>
        </div>
      </div>
      <div className="px-4 pt-1 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
        <button className="whitespace-nowrap h-[30px] px-4 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wide shadow-sm transition-transform active:scale-95 border border-transparent flex items-center justify-center">
          すべて
        </button>
        <button className="whitespace-nowrap h-[30px] px-4 rounded-full bg-white text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wide shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center">
          ユーザー
        </button>
        <button className="whitespace-nowrap h-[30px] px-4 rounded-full bg-white text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wide shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center">
          タグ
        </button>
        <button className="whitespace-nowrap h-[30px] px-4 rounded-full bg-white text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wide shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
          <MaterialIcon name="grid_view" className="text-[16px]" /> Artifacts
        </button>
        <button className="whitespace-nowrap h-[30px] px-4 rounded-full bg-white text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wide shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
          <MaterialIcon name="chat_bubble_outline" className="text-[16px]" />
          Scraps
        </button>
      </div>
    </>
  )
}
