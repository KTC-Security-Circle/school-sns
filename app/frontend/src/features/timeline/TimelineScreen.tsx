import BottomNav from '../../components/BottomNav'
import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'
import type { ReactNode } from 'react'

type TimelineVariant = 'scrap' | 'artifact'

type TimelineScreenProps = {
  variant?: TimelineVariant
}

type TimelineItem =
  | {
      id: string
      kind: 'question'
      avatar: string
      name: string
      time: string
      text: string
      tag: string
      likes: string
      comments: string
    }
  | {
      id: string
      kind: 'quote'
      avatar: string
      name: string
      time: string
      text: string
      likes: string
      comments: string
    }
  | {
      id: string
      kind: 'official'
      name: string
      time: string
      text: string
      likes: string
    }
  | {
      id: string
      kind: 'request'
      avatar: string
      name: string
      time: string
      text: string
      likes: string
      comments: string
    }

const timelineFeedBase: Array<TimelineItem> = [
  {
    id: 'question',
    kind: 'question',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiBPgMsZksHx4TO3tGIOJ4iMxYBbGabB-RBvG2sXXAXKyl6ZaTrVRDM5UVwK7Fa9qtVwDg1Q15aJygpn5zmPOxbYYIo8vb3gU6OXNTvR_iASYqb6JlmHkYlFGCmAWkfAjOhMTKmGOWIy5bD75CZTAbenkY_R33NM92aOZ7uI_7HVr4NjQHgGb_GZK76za4v88l6k_GlpGnav7cjf0_K_DAG6OSmWSfxPlN1nF7_yo8hbfsuX6MZ3XIjWgntUtsujHx4XUboxHTbKb',
    name: 'Kenji Sato',
    time: '2m',
    text: 'Does anyone know the deadline for the Java assignment?',
    tag: '#CS101',
    likes: '12',
    comments: '4',
  },
  {
    id: 'quote',
    kind: 'quote',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhQcsJCtpogA351mToT4dQ_jBnCXLs4Q_tm_37zvERG-XV6vqZn6VR9ecxkSvUgQ9lqM202vpJp2aCu4P-BEi93j5fTxNaTE70K_JJ5MHyCg0-XCYh_CAc7Bx9UuOq30sJ9NUquaVpm7jBSclOM9PE4Z_1ToWKH_-6pSOe_99AncsR2E8_AUXkA4b8dfXe-hC5U_oTtW_Fsuk5TiMzclDmO8pv0JRTb72_5wQmiGjYgbp_dG2FOzftu6_LnwZsaItFT_pOfMeZbLE',
    name: 'Yuki Tanaka',
    time: '15m',
    text: 'Just saw this amazing project from Team Alpha! So inspiring.',
    likes: '45',
    comments: '12',
  },
  {
    id: 'official',
    kind: 'official',
    name: 'Admin Dept',
    time: '1h',
    text: '🔔 Reminder: Guest lecture by Dr. Alan Grant in Room 302 at 3 PM today. Topic: "Evolution of AI".',
    likes: '89',
  },
  {
    id: 'request',
    kind: 'request',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtaoDU0KEuCJ7mCpinOIK349dPCLhsbtrQXPDzZceq1pvmRLw-1lzHMxjt64Y8VqWl3VG0NIfL-oCiYNKBqtMVBTtcg66iA8veFv69HG9Hl-pVcQ66LzYrujeOlJg_VZ6-0eIJBDb5vdXTX8uJl2FX24K9ragumwoijrDv6enY0Vdr_c8emVCaYFqFcjuewmTwfoWQKW14qgbDZRaagkHHodezvKd6RIm3SLUxaB_s7Dk7WWMA9YzgquRpaGVv57dHwKKF3Ek5XXTM',
    name: 'Alex M.',
    time: '2h',
    text: 'Has anyone started on the group project for Marketing? Looking for teammates who are good with data analysis! 📊',
    likes: '2',
    comments: '5',
  },
]

const timelineFeedByVariant: Record<TimelineVariant, Array<TimelineItem>> = {
  scrap: timelineFeedBase,
  artifact: timelineFeedBase,
}

export default function TimelineScreen({
  variant = 'scrap',
}: TimelineScreenProps) {
  const feed = timelineFeedByVariant[variant]

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <PhoneFrame className="bg-white border-x border-slate-200 shadow-2xl">
        <TimelineHeader />
        <TimelineFilters />
        <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
          <div className="flex flex-col p-2 gap-2">
            {feed.map((item) => {
              switch (item.kind) {
                case 'question':
                  return (
                    <TimelineCard
                      key={item.id}
                      avatar={item.avatar}
                      name={item.name}
                      time={item.time}
                    >
                      <p className="text-slate-900 text-[13px] leading-relaxed">
                        {item.text}{' '}
                        <span className="text-blue-500 font-medium">
                          {item.tag}
                        </span>
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <ActionButton icon="favorite" count={item.likes} />
                        <ActionButton
                          icon="chat_bubble"
                          count={item.comments}
                          className="hover:text-blue-500"
                        />
                      </div>
                    </TimelineCard>
                  )
                case 'quote':
                  return (
                    <TimelineCard
                      key={item.id}
                      avatar={item.avatar}
                      name={item.name}
                      time={item.time}
                    >
                      <p className="text-slate-900 text-[13px] leading-relaxed mb-2.5">
                        {item.text}
                      </p>
                      <QuoteCard />
                      <div className="flex items-center gap-4 mt-2">
                        <ActionButton
                          icon="favorite"
                          count={item.likes}
                          filled
                          className="text-blue-500 hover:text-blue-600"
                        />
                        <ActionButton
                          icon="chat_bubble"
                          count={item.comments}
                          className="hover:text-blue-500"
                        />
                      </div>
                    </TimelineCard>
                  )
                case 'official':
                  return (
                    <article
                      key={item.id}
                      className="flex flex-row items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                    >
                      <div className="size-8 shrink-0 flex items-center justify-center rounded-full bg-slate-900 text-white font-bold text-[10px] tracking-wide ring-1 ring-slate-200 shadow-sm">
                        AD
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex items-center justify-between h-4 mb-1">
                          <div className="flex items-center gap-2 truncate">
                            <p className="text-slate-900 text-sm font-bold">
                              {item.name}
                            </p>
                            <span className="bg-slate-100 text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded border border-slate-200">
                              OFFICIAL
                            </span>
                            <span className="text-slate-500 text-[11px]">
                              • {item.time}
                            </span>
                          </div>
                        </div>
                        <p className="text-slate-900 text-[13px] leading-relaxed">
                          {item.text}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <ActionButton icon="favorite" count={item.likes} />
                        </div>
                      </div>
                    </article>
                  )
                case 'request':
                  return (
                    <TimelineCard
                      key={item.id}
                      avatar={item.avatar}
                      name={item.name}
                      time={item.time}
                    >
                      <p className="text-slate-900 text-[13px] leading-relaxed">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <ActionButton icon="favorite" count={item.likes} />
                        <ActionButton
                          icon="chat_bubble"
                          count={item.comments}
                          className="hover:text-blue-500"
                        />
                      </div>
                    </TimelineCard>
                  )
                default:
                  return null
              }
            })}
          </div>
        </main>
        <button
          className="absolute bottom-28 right-4 z-40 flex items-center justify-center size-14 bg-slate-900 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all"
          aria-label="Create post"
        >
          <MaterialIcon name="add" className="text-3xl" />
        </button>
        <BottomNav active={variant === 'artifact' ? 'artifacts' : 'scraps'} />
      </PhoneFrame>
    </div>
  )
}

function TimelineHeader() {
  return (
    <ScreenHeader>
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          CampusLink
        </h1>
        <div className="flex items-center gap-3">
          <button
            className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Notifications"
          >
            <MaterialIcon name="notifications" className="text-[24px]" />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button
            className="size-8 rounded-full overflow-hidden ring-1 ring-slate-200"
            aria-label="Profile"
          >
            <img
              alt="User profile avatar showing a smiling woman"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyt_hTxNLqx__DZvpDuHuJMc0jggYmEOWAKNw-Owl9W1zeta6w_bNrQgYr29SV9kcSSnf91divylmaBS4w7OcLY9uJUN5VglYcPcHthFRS_MJjCVUin7nRBPmVwOceeeFN4-Y02M1enQ-19ytG9mCPSaBhZytmkDExC2vukI_nYgtDLjqULrTEScFxyM957lh95EOnG7z2AlVWB3gmWN4P4KgYZoVC038QnBQAviKEaxyPixRR3sgn2-VbXtYCaz_Vcaso9UGV9Gj6"
            />
          </button>
        </div>
      </div>
    </ScreenHeader>
  )
}

function TimelineFilters() {
  return (
    <div className="sticky top-[57px] z-20 bg-white/95 backdrop-blur-md px-4 py-2 border-b border-slate-200 flex gap-2">
      <button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wide shadow-sm hover:opacity-90 transition-opacity">
        All
      </button>
      <button className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wide hover:border-slate-400/30 transition-colors">
        Following
      </button>
    </div>
  )
}

type TimelineCardProps = {
  avatar: string
  name: string
  time: string
  children: ReactNode
}

function TimelineCard({ avatar, name, time, children }: TimelineCardProps) {
  return (
    <article className="flex flex-row items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-400/30 transition-all">
      <div
        className="size-8 shrink-0 rounded-full bg-cover bg-center ring-1 ring-slate-200"
        style={{ backgroundImage: `url('${avatar}')` }}
      />
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between h-4 mb-1">
          <div className="flex items-center gap-2 truncate">
            <p className="text-slate-900 text-sm font-bold">{name}</p>
            <span className="text-slate-500 text-[11px]">• {time}</span>
          </div>
          <button
            className="text-slate-500 hover:bg-slate-200/60 rounded p-0.5"
            aria-label="More"
          >
            <MaterialIcon name="more_horiz" className="text-[16px]" />
          </button>
        </div>
        {children}
      </div>
    </article>
  )
}

type ActionButtonProps = {
  icon: string
  count: string
  className?: string
  filled?: boolean
}

function ActionButton({ icon, count, className, filled }: ActionButtonProps) {
  return (
    <button
      className={`flex items-center gap-1 text-slate-500 transition-colors ${
        className ?? 'hover:text-pink-500'
      }`}
    >
      <MaterialIcon name={icon} filled={filled} className="text-[16px]" />
      <span className="text-[11px] font-medium">{count}</span>
    </button>
  )
}

function QuoteCard() {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white group/card hover:border-blue-400/40 transition-colors shadow-sm">
      <div className="flex p-3 gap-3">
        <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-slate-100 overflow-hidden relative">
          <img
            alt="Futuristic white robot arm working on a circuit board"
            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3WtEeHEDoT_8v9Yd7tdb5KweGExE24omLbn2VU7fyjm_BdhQ0lS8hRWGAnNImfX3vlZE2yNeCRCi06AHE_yZ4Xh6l0WcaKEB94-l6fVoAQYGJ3NFlsV-A7lqxTAek-mT1rhgJBijf9bbkL_QC1XjdMr7X1niNZNSwJDzVfRYQSGsS7DpZ3J0IGaq9Z_NqkBlG2aokXosEILNv5I26EOhUFIZ6YCs4xI80RRqE7ShSlhD4z7RY0Iae1vAnhMiHH16memcRkH6yeJ-c"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg" />
        </div>
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-1.5">
            <img
              alt="Avatar of Team Alpha lead"
              className="size-4 rounded-full ring-1 ring-slate-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ"
            />
            <span className="text-slate-500 text-xs font-medium truncate">
              Team Alpha
            </span>
          </div>
          <h4 className="font-bold text-slate-900 text-[15px] leading-snug line-clamp-2 mb-0.5 group-hover/card:text-blue-500 transition-colors">
            Autonomous Arm Project Final
          </h4>
          <p className="text-[11px] text-slate-500 truncate">
            Engineering • Prototype Phase
          </p>
        </div>
      </div>
    </div>
  )
}
