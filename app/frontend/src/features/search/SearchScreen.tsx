import BottomNav from '../../components/BottomNav'
import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'

const recentSearches = ['UI Design', '#React', 'Team Alpha']

const trendingItems = [
  {
    rank: '1',
    title: '#Hackathon2024',
    meta: '1,234 件の投稿 • イベント',
    accent: true,
  },
  {
    rank: '2',
    title: '卒業制作展',
    meta: '890 件の投稿 • 学内ニュース',
  },
  {
    rank: '3',
    title: '#AIResearch',
    meta: '56 件の投稿 • テクノロジー',
  },
]

export default function SearchScreen() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <PhoneFrame className="bg-white shadow-2xl overflow-hidden">
        <SearchHeader />
        <main className="flex-1 overflow-y-auto scrollbar-hide pb-24 bg-white">
          <section className="py-5 px-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                最近の検索
              </h3>
              <button className="text-xs text-blue-600 font-bold hover:opacity-70 px-2 py-1 -mr-2">
                履歴を削除
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((item) => (
                <button
                  key={item}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm text-slate-900 font-medium group"
                >
                  <MaterialIcon
                    name="history"
                    className="text-[18px] text-slate-500 group-hover:text-slate-900"
                  />
                  {item}
                </button>
              ))}
            </div>
          </section>

          <div className="h-2 bg-slate-50 border-y border-slate-200/50" />

          <section className="py-5 px-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
              急上昇トレンド
            </h3>
            <div className="space-y-5">
              {trendingItems.map((trend) => (
                <button
                  key={trend.rank}
                  className="flex items-center justify-between w-full group cursor-pointer active:opacity-60 transition-opacity"
                >
                  <div className="flex items-start gap-4 text-left">
                    <span
                      className={`font-bold text-sm w-4 pt-0.5 text-center ${
                        trend.accent ? 'text-blue-600' : 'text-slate-900'
                      }`}
                    >
                      {trend.rank}
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-slate-900 mb-0.5">
                        {trend.title}
                      </p>
                      <p className="text-xs text-slate-500">{trend.meta}</p>
                    </div>
                  </div>
                  <MaterialIcon
                    name="trending_up"
                    className="text-slate-400/50 text-[20px]"
                  />
                </button>
              ))}
            </div>
          </section>

          <div className="h-2 bg-slate-50 border-y border-slate-200/50" />

          <section className="pt-5">
            <h3 className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              おすすめ
            </h3>
            <div className="px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    alt="User avatar"
                    className="size-12 rounded-full object-cover ring-1 ring-slate-200"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvhQcsJCtpogA351mToT4dQ_jBnCXLs4Q_tm_37zvERG-XV6vqZn6VR9ecxkSvUgQ9lqM202vpJp2aCu4P-BEi93j5fTxNaTE70K_JJ5MHyCg0-XCYh_CAc7Bx9UuOq30sJ9NUquaVpm7jBSclOM9PE4Z_1ToWKH_-6pSOe_99AncsR2E8_AUXkA4b8dfXe-hC5U_oTtW_Fsuk5TiMzclDmO8pv0JRTb72_5wQmiGjYgbp_dG2FOzftu6_LnwZsaItFT_pOfMeZbLE"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[15px] font-bold text-slate-900">
                        Yuki Tanaka
                      </p>
                      <MaterialIcon
                        name="verified"
                        filled
                        className="text-[14px] text-blue-600"
                      />
                    </div>
                    <p className="text-xs text-slate-500">
                      Architecture • Design Dept.
                    </p>
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold hover:bg-slate-800 transition-colors">
                  フォロー
                </button>
              </div>
            </div>

            <div className="px-4 py-4 border-b border-slate-200/50 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase flex items-center gap-1">
                  <MaterialIcon name="grid_view" className="text-[12px]" />
                  Artifact
                </span>
                <span className="text-xs text-slate-500">2時間前</span>
              </div>
              <div className="flex gap-4">
                <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/50">
                  <img
                    alt="Project thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPVSh0Zy07mgmqjSnjb5dY_neUKhROMSQMRiC7OGaWhJLXxekcLOIAbV--B-mJYKBuY8A3IiWmaAsZ9225iBnKTaDcwdDiEJG4gd33tH_wDhpZ4D0L8ieYtMfoSubS5_kXRm6YT6joeLJRmYJpSyicI6Gc_zuBR7XM0wpR64gvkg8jTGbhxMvYUi_fZE52zDbpyL-jNQnDU_9PFhyE07B9Y33uwGmN5Anqbbi06D3TmQuqPgQdEq7MvtIOgg5urO2L9wIAPKkvDpu2"
                  />
                </div>
                <div className="flex-1 flex flex-col h-24 justify-between py-0.5">
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-snug mb-1 line-clamp-2">
                      Eco-Food Delivery: サステナブルな配送アプリのデザイン提案
                    </h4>
                    <div className="flex flex-wrap gap-1 mb-1">
                      <span className="text-xs text-blue-600 font-medium">
                        #UIUX
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        #Eco
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Creator avatar"
                      className="size-5 rounded-full ring-1 ring-white"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU_Uevt1sF3Gen13SezwrujCG29Rz41fvFKZIG8S7_VuHeuIYoQdwePML98trQmqpL9R88a0ApQ0syC0o2e1JzwgmI3a6XRK45Y7Nw2ELwqn18yJRxNwPE8I3sNtRWWN-AR8dD9sU2XAsc7kyqiP0tcKrr5EdwUetSlJwRFQiZP3e4lXuFEV0KG33iq70Q_xi7W4DEn6XDOilMCPPv5Ae4yfo7rnIY3QoPWktn3dyzUWd9yYdITyy0k5aTc2NCH5wN6lvbzbnfeBWA"
                    />
                    <span className="text-xs text-slate-500 font-medium">
                      Sarah L.
                    </span>
                    <div className="ml-auto flex items-center gap-3 text-slate-500">
                      <span className="flex items-center gap-0.5 text-xs font-medium">
                        <MaterialIcon name="favorite" className="text-[14px]" />
                        24
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 border-b border-slate-200/50 hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="shrink-0 pt-1">
                  <div
                    className="size-10 rounded-full bg-cover bg-center ring-1 ring-slate-200"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIiBPgMsZksHx4TO3tGIOJ4iMxYBbGabB-RBvG2sXXAXKyl6ZaTrVRDM5UVwK7Fa9qtVwDg1Q15aJygpn5zmPOxbYYIo8vb3gU6OXNTvR_iASYqb6JlmHkYlFGCmAWkfAjOhMTKmGOWIy5bD75CZTAbenkY_R33NM92aOZ7uI_7HVr4NjQHgGb_GZK76za4v88l6k_GlpGnav7cjf0_K_DAG6OSmWSfxPlN1nF7_yo8hbfsuX6MZ3XIjWgntUtsujHx4XUboxHTbKb')",
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[15px] font-bold text-slate-900 truncate">
                        Kenji Sato
                      </span>
                      <span className="text-xs text-slate-500 truncate">
                        @kenji_s
                      </span>
                      <span className="text-xs text-slate-500">• 5分前</span>
                    </div>
                    <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase shrink-0">
                      Scrap
                    </span>
                  </div>
                  <p className="text-[15px] text-slate-900 leading-relaxed mb-3">
                    Javaの課題について質問です。クラス継承の部分でエラーが出て詰まっています...
                    誰か教えていただけませんか？💦{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      #CS101
                    </span>{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      #Java
                    </span>
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1.5 group p-1 -ml-1 hover:bg-blue-50 rounded-lg transition-colors">
                      <MaterialIcon
                        name="chat_bubble"
                        className="text-[18px] text-slate-500 group-hover:text-blue-600"
                      />
                      <span className="text-xs text-slate-500 group-hover:text-blue-600 font-medium">
                        3
                      </span>
                    </button>
                    <button className="flex items-center gap-1.5 group p-1 hover:bg-pink-50 rounded-lg transition-colors">
                      <MaterialIcon
                        name="favorite"
                        className="text-[18px] text-slate-500 group-hover:text-pink-500"
                      />
                      <span className="text-xs text-slate-500 group-hover:text-pink-500 font-medium">
                        12
                      </span>
                    </button>
                    <button className="flex items-center gap-1.5 group p-1 hover:bg-emerald-50 rounded-lg transition-colors">
                      <MaterialIcon
                        name="share"
                        className="text-[18px] text-slate-500 group-hover:text-emerald-500"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 border-b border-slate-200/50 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase flex items-center gap-1">
                  <MaterialIcon name="grid_view" className="text-[12px]" />
                  Artifact
                </span>
                <span className="text-xs text-slate-500">昨日</span>
              </div>
              <div className="flex gap-4">
                <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/50">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                    <MaterialIcon name="movie" className="text-3xl" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col h-24 justify-between py-0.5">
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 leading-snug mb-1 line-clamp-2">
                      短編映画「青い街」 - 最終予告編
                    </h4>
                    <div className="flex flex-wrap gap-1 mb-1">
                      <span className="text-xs text-blue-600 font-medium">
                        #Film
                      </span>
                      <span className="text-xs text-blue-600 font-medium">
                        #Production
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-5 rounded-full bg-slate-300" />
                    <span className="text-xs text-slate-500 font-medium">
                      Film Club
                    </span>
                    <div className="ml-auto flex items-center gap-3 text-slate-500">
                      <span className="flex items-center gap-0.5 text-xs font-medium">
                        <MaterialIcon name="favorite" className="text-[14px]" />
                        156
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <BottomNav active="search" />
      </PhoneFrame>
    </div>
  )
}

function SearchHeader() {
  return (
    <ScreenHeader className="pt-[env(safe-area-inset-top)]">
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
        <button className="text-slate-900 font-bold text-sm hover:opacity-70 transition-opacity whitespace-nowrap">
          キャンセル
        </button>
      </div>
      <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-slate-900 text-white text-[13px] font-bold shadow-md transition-transform active:scale-95 border border-transparent">
          すべて
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors">
          ユーザー
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors">
          タグ
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-1">
          <MaterialIcon name="grid_view" className="text-[16px]" /> Artifacts
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-1">
          <MaterialIcon name="chat_bubble_outline" className="text-[16px]" />
          Scraps
        </button>
      </div>
    </ScreenHeader>
  )
}
