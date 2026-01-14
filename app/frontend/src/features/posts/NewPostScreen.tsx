import MaterialIcon from '../../components/MaterialIcon'
import PhoneFrame from '../../components/PhoneFrame'
import ScreenHeader from '../../components/ScreenHeader'

export default function NewPostScreen() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <PhoneFrame className="bg-white shadow-2xl overflow-hidden border-x border-slate-200">
        <PostHeader />
        <main className="flex-1 overflow-y-auto pb-44 scrollbar-hide">
          <PostTypeSelector />
          <div className="px-5 space-y-6">
            <CoverPicker />
            <TitleField />
            <Toolbar />
            <textarea
              className="w-full min-h-[200px] text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent resize-none"
              placeholder="Describe your artifact... (Markdown supported)"
            />
            <MetadataSection />
          </div>
        </main>
        <PostFooter />
      </PhoneFrame>
    </div>
  )
}

function PostHeader() {
  return (
    <ScreenHeader className="z-30 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="text-slate-500 hover:text-slate-900 font-medium text-[15px] transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100">
          Cancel
        </button>
        <h1 className="text-[16px] font-bold text-slate-900 tracking-tight">
          New Post
        </h1>
        <div className="w-[50px]" />
      </div>
    </ScreenHeader>
  )
}

function PostTypeSelector() {
  return (
    <div className="px-5 py-4 bg-white">
      <div className="bg-slate-50 p-1 rounded-xl flex relative border border-slate-200/50 shadow-inner">
        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-bold text-slate-900 bg-white rounded-lg shadow-sm border border-slate-200/50 z-10 transition-all ring-1 ring-black/5">
          <MaterialIcon
            name="history_edu"
            className="text-[18px] text-blue-500"
            filled
          />
          Artifacts
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-all z-10 opacity-70 hover:opacity-100">
          <MaterialIcon name="edit_note" className="text-[18px]" />
          Scrap
        </button>
      </div>
      <p className="text-[11px] text-slate-500 mt-2 px-1 text-center font-medium">
        Share a report, project update, or deliverable.
      </p>
    </div>
  )
}

function CoverPicker() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-full aspect-[21/9] rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 hover:border-blue-400/50 transition-all group-hover:scale-[1.01]">
        <div className="size-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:text-blue-500 transition-colors">
          <MaterialIcon name="add_photo_alternate" className="text-[20px]" />
        </div>
        <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900">
          Add Cover Image
        </span>
      </div>
    </div>
  )
}

function TitleField() {
  return (
    <div className="space-y-1">
      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
        Title <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full text-xl font-bold text-slate-900 placeholder:text-slate-300 border-none p-0 focus:ring-0 bg-transparent"
        placeholder="Project Title"
        type="text"
      />
    </div>
  )
}

function Toolbar() {
  return (
    <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide border-y border-slate-200 py-2">
      <ToolbarButton icon="format_bold" />
      <ToolbarButton icon="format_italic" />
      <div className="w-px h-4 bg-slate-200 mx-1" />
      <ToolbarButton icon="title" />
      <ToolbarButton icon="format_list_bulleted" />
      <ToolbarButton icon="format_quote" />
      <div className="w-px h-4 bg-slate-200 mx-1" />
      <ToolbarButton icon="link" />
      <ToolbarButton icon="code" />
      <ToolbarButton icon="help" className="ml-auto" />
    </div>
  )
}

type ToolbarButtonProps = {
  icon: string
  className?: string
}

function ToolbarButton({ icon, className }: ToolbarButtonProps) {
  return (
    <button
      className={`p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors ${
        className ?? ''
      }`}
    >
      <MaterialIcon name={icon} className="text-[20px]" />
    </button>
  )
}

function MetadataSection() {
  return (
    <div className="space-y-5 pt-2 border-t border-slate-200/50">
      <div className="flex items-start gap-3">
        <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <MaterialIcon name="tag" className="text-slate-500 text-[18px]" />
        </div>
        <div className="flex-1 flex flex-wrap gap-2 pt-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-500 text-xs font-bold border border-blue-200/50">
            UI/UX
            <button className="hover:text-blue-400 flex items-center">
              <MaterialIcon name="close" className="text-[14px]" />
            </button>
          </span>
          <input
            className="flex-1 min-w-[100px] text-sm text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent h-7"
            placeholder="Add tags..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <MaterialIcon
            name="group_add"
            className="text-slate-500 text-[18px]"
          />
        </div>
        <div className="flex-1 flex flex-wrap gap-2 pt-1.5">
          <span className="inline-flex items-center gap-1 pl-1 pr-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-bold shadow-sm">
            <img
              className="size-5 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ"
              alt="Team Alpha"
            />
            Team Alpha
            <button className="ml-1 text-slate-500 hover:text-slate-900 flex items-center">
              <MaterialIcon name="close" className="text-[14px]" />
            </button>
          </span>
          <input
            className="flex-1 min-w-[120px] text-sm text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent h-7"
            placeholder="Add collaborators..."
            type="text"
          />
        </div>
      </div>
    </div>
  )
}

function PostFooter() {
  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 px-5 py-4 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.05)] z-20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" value="" />
              <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900" />
            </div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
              Preview
            </span>
          </label>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Draft Saved
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98] transition-all">
            <MaterialIcon name="save" className="text-[18px]" />
            Save Draft
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-900/25">
            Publish
            <MaterialIcon name="send" className="text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
