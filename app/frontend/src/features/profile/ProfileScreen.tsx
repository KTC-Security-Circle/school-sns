import BottomNav from '../../components/BottomNav'
import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'

export default function ProfileScreen() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <PhoneFrame className="bg-white">
        <ProfileHeader />
        <ProfileHero />
        <ProfileTabs />
        <main className="flex flex-col w-full pb-24 bg-slate-50">
          <ScrapHighlightCard />
          <ScrapCard />
          <ArtifactCard />
        </main>
        <button
          className="absolute bottom-24 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500/90 hover:scale-105 active:scale-95 transition-all group"
          aria-label="Create post"
        >
          <MaterialIcon
            name="edit"
            className="text-2xl group-hover:rotate-90 transition-transform duration-300"
          />
        </button>
        <BottomNav active="profile" />
      </PhoneFrame>
    </div>
  )
}

function ProfileHeader() {
  return (
    <ScreenHeader>
      <div className="px-4 py-3 flex items-center justify-between">
        <button
          className="text-slate-600 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 active:scale-95 transition-all"
          aria-label="Back"
        >
          <MaterialIcon name="arrow_back" />
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          @taroyamada
        </h2>
        <div className="flex items-center justify-end">
          <button
            className="flex size-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Settings"
          >
            <MaterialIcon name="settings" />
          </button>
        </div>
      </div>
    </ScreenHeader>
  )
}

function ProfileHero() {
  return (
    <section className="relative w-full flex flex-col items-center pt-6 px-4 pb-0">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center w-full max-w-md gap-3">
        <div className="relative">
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-24 border-4 border-white"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDANowXIU4OrFC7Ehs0FXCNHkdtJyi_yN4OMnWOGckFebW1MPmfBdZ9TMZOSvWxJuQcj32wgXwx0Hvz_YeGo55tjHBqhBA33JHVoMZYAF3CdSErYkb7b2x39uxJkgBPG4TK-JQ83JuNjCRM02g6z5KwXhdvEOHzpY8-0yzEFfxUssWoBRF_m93ApskSBfvRr13xW-ewKuK1ueEBggE7B7BGss1dpLDDq7-p1ietfJvfFAttaJOEyz1n3qfXj-Zit70s8LIogEVMOhDT')",
              }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white border border-slate-200 p-1 rounded-full shadow-lg">
            <MaterialIcon
              name="palette"
              className="text-[18px] text-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5 mt-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Taro Yamada
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-700 border border-purple-500/30">
              Design World
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-700 border border-blue-500/30">
              Student
            </span>
          </div>
          <p className="text-slate-500 text-base font-normal leading-relaxed max-w-sm mt-2">
            Exploring UI/UX and 3D modeling. Working on virtual campus project.
            Open to collab! 🎨✨
          </p>
        </div>
        <div className="flex w-full gap-3 mt-4">
          <button className="flex-1 h-12 bg-blue-500 hover:bg-blue-500/90 active:scale-[0.98] text-white text-base font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md">
            <MaterialIcon name="person_add" className="text-xl" />
            Follow
          </button>
          <button className="h-12 w-16 shrink-0 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-100 active:scale-[0.98] transition-all shadow-sm">
            <MaterialIcon name="mail" className="text-xl" />
          </button>
          <button className="h-12 w-16 shrink-0 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-100 active:scale-[0.98] transition-all shadow-sm">
            <MaterialIcon name="share" className="text-xl" />
          </button>
        </div>
        <div className="flex w-full justify-between px-2 py-3 border-y border-slate-200 mt-4 bg-slate-50 rounded-lg shadow-inner">
          <StatItem label="Following" value="120" />
          <div className="w-px bg-slate-200 h-8 self-center" />
          <StatItem label="Followers" value="450" />
          <div className="w-px bg-slate-200 h-8 self-center" />
          <StatItem label="Artifacts" value="12" />
        </div>
      </div>
    </section>
  )
}

type StatItemProps = {
  label: string
  value: string
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <button className="flex flex-1 flex-col items-center cursor-pointer hover:bg-slate-50 rounded-md py-1">
      <span className="text-lg font-bold text-slate-900">{value}</span>
      <span className="text-xs text-slate-500">{label}</span>
    </button>
  )
}

function ProfileTabs() {
  return (
    <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-md pt-2">
      <div className="flex border-b border-slate-200 px-4 justify-between gap-4">
        <button className="relative flex flex-col items-center justify-center pb-3 pt-2 flex-1 group">
          <p className="text-blue-500 text-sm font-bold tracking-[0.015em] mb-1">
            Scraps
          </p>
          <div className="absolute bottom-0 w-full h-[3px] bg-blue-500 rounded-t-sm" />
        </button>
        <button className="relative flex flex-col items-center justify-center pb-3 pt-2 flex-1 group">
          <p className="text-slate-500 group-hover:text-slate-900 transition-colors text-sm font-medium tracking-[0.015em] mb-1">
            Artifacts
          </p>
          <div className="absolute bottom-0 w-full h-[3px] bg-transparent group-hover:bg-slate-300 rounded-t-sm transition-all" />
        </button>
        <button className="relative flex flex-col items-center justify-center pb-3 pt-2 flex-1 group">
          <p className="text-slate-500 group-hover:text-slate-900 transition-colors text-sm font-medium tracking-[0.015em] mb-1">
            Assets
          </p>
          <div className="absolute bottom-0 w-full h-[3px] bg-transparent group-hover:bg-slate-300 rounded-t-sm transition-all" />
        </button>
      </div>
    </div>
  )
}

function ScrapHighlightCard() {
  return (
    <div className="p-4 border-b border-slate-200 bg-slate-50">
      <div className="flex items-start gap-3">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-slate-200"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzv3o69NR-ZBTOdCsrxmLVsWQ05TwVW5bH41Jk6Nx9cyQSfLkYuq6ysU43dMsDcUyCWaK0WYdTILlSHWtPTLDtEIcsV93r15pNFLfW3wWZ2kXnFtNTahJiyiZH-TQ308PLsQhMYFSCLWBrL4cKveoHjy1-Mn6Ga-HtEq1lpftV55IsTFWcjfqNkSNuxUkuaD8JtwjNTrvayWrlrH0F6y-VoYJBIrcs7ZO6MqG3L3-v3mGRvnE1e2E_hUwnrWKUqZHcOSXNclStu2Pf')",
          }}
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-baseline">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900">
                Taro Yamada
              </span>
              <span className="text-xs text-slate-500">2h ago</span>
            </div>
            <MaterialIcon
              name="push_pin"
              className="text-blue-500 text-[16px]"
            />
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Just finished the wireframes for the final project. Feedback
            welcome! 📱✍️
          </p>
          <div
            className="mt-2 w-full rounded-lg overflow-hidden border border-slate-200 aspect-video bg-center bg-cover relative group cursor-pointer"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCODvhHnE3ZablvwHZVU_0rfqgWLbB9PGoMgWMe1ypTIRw4gHMUv-ZSlYSH5ai_E6QeODKbhQESXDWiq37X0ZEWphQW8zm7_F0g7Lc4XwejByt_IOaxfFdCZfLRbMEP6o1dvcuscsmXyuaxyZkyZpjBvs4T-HltIQQCgUdZnJ_6eJTqC0AKaEAlafd8qJXaPJcqRVUz-mgoLOhYdXZ_5zcCYLuYz5T74QDwqCIjslNQwjmvh394GA085hQnuyO5v3glJRjBwUiWk4Xj')",
            }}
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/2 transition-colors" />
          </div>
          <div className="flex items-center gap-6 mt-1 text-slate-500">
            <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors text-xs">
              <MaterialIcon name="chat_bubble" className="text-[18px]" />3
            </button>
            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors text-xs">
              <MaterialIcon name="favorite" className="text-[18px]" />
              24
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScrapCard() {
  return (
    <div className="p-4 border-b border-slate-200 hover:bg-slate-50 transition-colors">
      <div className="flex items-start gap-3">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-slate-200"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMRrYuleAId3EaZa3gcpv9PwolGUQf_Fh4RJkd3Pkusn9ePimJQzAyNUh_DrHlqBgzIzXNXIruMrBHD7mW5OLTU4l2oDVtVcqmsgvV2qyu4C-hnfkV0u3MI23HEix68qXzqhIwrqzJMPOyOaaSy92Md3D140fYcA-QkuOzWJaI-lZb5cyrQryiNtYGmamD5IanRZpWfEFVxW3xEU03yav0r9EEk8M1PgcBqSjQMnvubqLLnFcUc72_Vzxw-ZAJzg_rhCGMMf8Ego0y')",
          }}
        />
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-baseline">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900">
                Taro Yamada
              </span>
              <span className="text-xs text-slate-500">5h ago</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Does anyone know how to fix this Unity lighting bug? It keeps
            flickering when I bake the lightmaps. 😅
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] text-slate-500">
              #Unity
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] text-slate-500">
              #HelpWanted
            </span>
          </div>
          <div className="flex items-center gap-6 mt-2 text-slate-500">
            <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors text-xs">
              <MaterialIcon name="chat_bubble" className="text-[18px]" />8
            </button>
            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors text-xs">
              <MaterialIcon name="favorite" className="text-[18px]" />5
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArtifactCard() {
  return (
    <div className="p-4 border-b border-slate-200 hover:bg-slate-50 transition-colors">
      <div className="flex items-start gap-3">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 border border-slate-200"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSs9Zh8HMzJmgK2so9JI0u6tWD8mLg6iwy3h6CWHK2e_FvlzeTM-WA_gAN_5ghcJHDTCFnFKWimzOPWsevf2AGUxnEimo_rxXWW7Uu9cKGb1JifSxFa2uag1v2V__AqQ2GAaf8aLVLeI6z-l-U_6tMCzRQRQWuMR_SpxL4FSF5l6E0lsihFdtBpK_2r3tObI9Ea9-NLd8z5sPTPDFpAgTLhxTBlg2PBrWyMMq15IjZ8-Af5KHLByUelt2DmBWKWZW89D8djOwgJ2we')",
          }}
        />
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-sm text-slate-900">
              Taro Yamada
            </span>
            <span className="text-xs text-slate-500">
              posted an Artifact • 1d ago
            </span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div
              className="aspect-[2/1] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBRJfsveRCVHM1z5rpVt6ZO89oz1danf9u-jDGyFHBWI4wPmpG8pfzVQFKUOI-W_tdEC-AkD9Oykledj9aJLRTzaD7YLMmTsqmAixfVxg_s3ESXHqIPMLTByoONl-8esPT80M0rksY734VbfOkP6saJQn4XK_1I3r9iROPJdRCW3aSQwa2kaBw0fQgxdYp2Kv9859CNiJLeP_Y4eKaooKitMaKI8KOaMKGr1PYe8a6n28Hg4uGjbYeuOJO7c6F1r0ycBaiS6t7In5s')",
              }}
            />
            <div className="p-3">
              <h3 className="font-bold text-slate-900 text-base">
                Cyberpunk City Environment
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Final submission for 3D Modeling II.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div
                    className="size-6 rounded-full border border-white bg-slate-300 bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_njYEOWKCtmWG0IC0rWu8H6oIAP8K-S8xsI5QhyMcT1YPsb2ZfyLStguTBrxfr0CSNzvRRoDoLMKxdNpu4Npj9FTS1hwfyvxbttRsNZx76Zv469RN0VtEsIFcXctO4uK5fJrNCE6DvEYadZ4SSxamaXbV46S8moe9AZCBM4TYqqX7egDxDpISLTx2P3HLGK-0G3DaBQsHbSeCioLAP0lGrBb5KBuyhcxaNHWvedS9mGHTUdIid8ec1F5UqtTRQI3MbPIb1JyhPefb')",
                    }}
                  />
                  <div
                    className="size-6 rounded-full border border-white bg-slate-300 bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLGZbqDaDCDgIn8g7x-gj-6tPD0R6C9dVfRrPXJZ172GGFzPHVuxlsD5Nmsl_qg5tDmEIOVVnsExA7QLYHuFQrjXzxx-MMDcNI98NZo6ZDv7mpzvTekYxvSpGPbrDl0YeDCoLVxZOwtNb-vQO_fBYomyiHndWhZcDyAjb1dwW-StJh2q9XWQVL3GBu7khBakvgoQGRmPywoZS9nUWSSNm6cYmGjhng03K13l1XybwmqOFKmMXWRSzoZb2Anya2YiPE2Tjbg2-MVBHx')",
                    }}
                  />
                  <div className="size-6 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[8px] text-slate-700">
                    +12
                  </div>
                </div>
                <button className="text-blue-500 text-xs font-bold hover:underline">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
