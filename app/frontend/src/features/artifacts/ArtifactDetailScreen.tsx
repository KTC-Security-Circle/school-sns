import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'

export default function ArtifactDetailScreen() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <PhoneFrame className="bg-white shadow-2xl overflow-hidden">
        <ScreenHeader>
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors group"
              aria-label="Back"
            >
              <MaterialIcon
                name="arrow_back"
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-200/50 rounded-full transition-colors text-xs font-bold text-slate-900 border border-slate-200">
                <MaterialIcon name="edit" className="text-[16px]" />
                <span>Edit</span>
              </button>
              <button
                className="p-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors"
                aria-label="More"
              >
                <MaterialIcon name="more_vert" />
              </button>
            </div>
          </div>
        </ScreenHeader>

        <main className="flex-1 overflow-y-auto scrollbar-hide pb-20 bg-white">
          <div className="relative w-full aspect-[4/3] bg-slate-100 group overflow-hidden">
            <img
              alt="Futuristic white robot arm working on a circuit board"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3WtEeHEDoT_8v9Yd7tdb5KweGExE24omLbn2VU7fyjm_BdhQ0lS8hRWGAnNImfX3vlZE2yNeCRCi06AHE_yZ4Xh6l0WcaKEB94-l6fVoAQYGJ3NFlsV-A7lqxTAek-mT1rhgJBijf9bbkL_QC1XjdMr7X1niNZNSwJDzVfRYQSGsS7DpZ3J0IGaq9Z_NqkBlG2aokXosEILNv5I26EOhUFIZ6YCs4xI80RRqE7ShSlhD4z7RY0Iae1vAnhMiHH16memcRkH6yeJ-c"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex gap-2 mb-2">
                <span className="px-2.5 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md">
                  Robotics
                </span>
                <span className="px-2.5 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/30">
                  AI
                </span>
              </div>
            </div>
          </div>

          <div className="px-5 pt-6">
            <h1 className="text-2xl font-bold leading-tight text-slate-900 mb-4 tracking-tight">
              Autonomous Arm Project: Final Presentation &amp; Performance
              Analysis
            </h1>
            <div className="flex items-center justify-between py-2 border-b border-slate-200 mb-6">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <MaterialIcon name="calendar_today" className="text-[16px]" />
                Oct 24, 2023
              </span>
              <div className="flex items-center gap-4 text-slate-500">
                <span className="text-xs font-medium flex items-center gap-1">
                  <MaterialIcon name="visibility" className="text-[16px]" />
                  1.4k
                </span>
                <span className="text-xs font-medium flex items-center gap-1">
                  <MaterialIcon
                    name="favorite"
                    className="text-[16px] text-pink-500"
                    filled
                  />
                  248
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-1 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    alt="Team Alpha lead"
                    className="size-12 rounded-full object-cover ring-2 ring-white shadow-md"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 size-3 border-2 border-white rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none mb-1">
                    Team Alpha
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Engineering Dept.
                  </p>
                </div>
              </div>
              <button className="group flex items-center gap-1 pl-4 pr-3 py-2 bg-slate-900 text-white rounded-full shadow-lg shadow-slate-200 hover:scale-105 active:scale-95 transition-all">
                <span className="text-xs font-bold">Profile</span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-[16px] group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>

            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-5 mb-8 shadow-sm">
              <div className="absolute -right-6 -top-6 text-indigo-200/40 rotate-12 pointer-events-none">
                <MaterialIcon name="smart_toy" className="text-[140px]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg">
                    <MaterialIcon name="smart_toy" className="text-[20px]" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-900">
                    AI Summary
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 font-medium">
                  This project demonstrates a{' '}
                  <span className="font-bold text-indigo-700">
                    6-axis autonomous robotic arm
                  </span>{' '}
                  capable of precision assembly. Key achievements include a{' '}
                  <span className="bg-white/60 px-1 rounded text-indigo-700 font-bold border border-indigo-100/50">
                    98% accuracy rate
                  </span>{' '}
                  in component placement and a 40% reduction in power
                  consumption using the new motion planning algorithm.
                </p>
              </div>
            </section>

            <section className="text-slate-500 text-sm leading-relaxed space-y-4 mb-10">
              <p>
                We started this project with the goal of creating an affordable
                yet highly accurate robotic arm for educational purposes. After
                3 months of rigorous testing and iteration, we are proud to
                present our final prototype.
              </p>
              <p>
                The main challenge was optimizing the inverse kinematics solver
                to run efficiently on embedded hardware. By switching to a
                numerical approach, we managed to achieve real-time performance
                without sacrificing precision.
              </p>
              <p className="text-slate-900 font-semibold italic border-l-2 border-blue-500 pl-4 my-4">
                &quot;The integration of computer vision for object detection
                was the turning point for our automation logic.&quot;
              </p>
              <p>
                We hope this project inspires other students to explore the
                field of robotics. All source code and 3D models are available
                in the linked repository.
              </p>
            </section>

            <section className="border-t border-slate-200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 text-lg">
                  Comments{' '}
                  <span className="text-slate-500 text-sm font-normal ml-1">
                    (3)
                  </span>
                </h3>
                <button className="flex items-center text-xs font-bold text-blue-500 cursor-pointer">
                  Top
                  <MaterialIcon name="expand_more" className="text-[16px]" />
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <CommentItem
                  avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAU_Uevt1sF3Gen13SezwrujCG29Rz41fvFKZIG8S7_VuHeuIYoQdwePML98trQmqpL9R88a0ApQ0syC0o2e1JzwgmI3a6XRK45Y7Nw2ELwqn18yJRxNwPE8I3sNtRWWN-AR8dD9sU2XAsc7kyqiP0tcKrr5EdwUetSlJwRFQiZP3e4lXuFEV0KG33iq70Q_xi7W4DEn6XDOilMCPPv5Ae4yfo7rnIY3QoPWktn3dyzUWd9yYdITyy0k5aTc2NCH5wN6lvbzbnfeBWA"
                  name="Sarah L."
                  time="2h ago"
                  text="The motion smoothing looks incredible! Did you use standard PID controllers for the joints or something more custom?"
                  likes="5"
                />
                <CommentItem
                  avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDtaoDU0KEuCJ7mCpinOIK349dPCLhsbtrQXPDzZceq1pvmRLw-1lzHMxjt64Y8VqWl3VG0NIfL-oCiYNKBqtMVBTtcg66iA8veFv69HG9Hl-pVcQ66LzYrujeOlJg_VZ6-0eIJBDb5vdXTX8uJl2FX24K9ragumwoijrDv6enY0Vdr_c8emVCaYFqFcjuewmTwfoWQKW14qgbDZRaagkHHodezvKd6RIm3SLUxaB_s7Dk7WWMA9YzgquRpaGVv57dHwKKF3Ek5XXTM"
                  name="Alex M."
                  time="5h ago"
                  text="Great presentation. Would love to see the code repo if it's public. 🚀"
                  likes="12"
                />
              </div>
              <button className="w-full py-4 text-xs font-bold text-slate-500 hover:text-blue-500 transition-colors mt-2">
                View all comments
              </button>
            </section>
          </div>
        </main>

        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 py-3 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3">
            <img
              className="size-9 rounded-full object-cover border border-slate-200 hidden sm:block"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyt_hTxNLqx__DZvpDuHuJMc0jggYmEOWAKNw-Owl9W1zeta6w_bNrQgYr29SV9kcSSnf91divylmaBS4w7OcLY9uJUN5VglYcPcHthFRS_MJjCVUin7nRBPmVwOceeeFN4-Y02M1enQ-19ytG9mCPSaBhZytmkDExC2vukI_nYgtDLjqULrTEScFxyM957lh95EOnG7z2AlVWB3gmWN4P4KgYZoVC038QnBQAviKEaxyPixRR3sgn2-VbXtYCaz_Vcaso9UGV9Gj6"
              alt="User avatar"
            />
            <div className="relative flex-1">
              <input
                className="w-full bg-slate-50 border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500/60 transition-shadow"
                placeholder="Add a comment..."
                type="text"
              />
              <button
                className="absolute right-2 top-2 p-1 text-blue-500 hover:bg-blue-50 rounded-full transition-colors disabled:opacity-50"
                aria-label="Send comment"
              >
                <MaterialIcon name="send" className="text-[20px]" filled />
              </button>
            </div>
            <button
              className="p-3 rounded-full text-slate-500 hover:bg-pink-50 hover:text-pink-500 transition-colors border border-transparent hover:border-pink-100 flex items-center justify-center"
              aria-label="Favorite"
            >
              <MaterialIcon name="favorite" className="text-[24px]" />
            </button>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}

type CommentItemProps = {
  avatar: string
  name: string
  time: string
  text: string
  likes: string
}

function CommentItem({ avatar, name, time, text, likes }: CommentItemProps) {
  return (
    <div className="flex gap-3">
      <img
        className="size-9 rounded-full object-cover shrink-0 mt-0.5 border border-slate-200"
        src={avatar}
        alt={name}
      />
      <div className="flex-1">
        <div className="bg-slate-50 p-3.5 rounded-2xl rounded-tl-none">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-900">{name}</span>
            <span className="text-[10px] text-slate-500">{time}</span>
          </div>
          <p className="text-xs text-slate-900 leading-relaxed">{text}</p>
        </div>
        <div className="flex items-center gap-4 mt-1.5 ml-2">
          <button className="text-[11px] font-bold text-slate-500 hover:text-slate-900">
            Reply
          </button>
          <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-pink-500 group">
            <MaterialIcon name="favorite" className="text-[14px]" />
            {likes}
          </button>
        </div>
      </div>
    </div>
  )
}
