import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'

export default function MetadataSection() {
  return (
    <div className="space-y-5 pt-2 border-t border-slate-200/50">
      <div className="flex items-start gap-3">
        <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <MaterialIcon name="tag" className="text-slate-500 text-[18px]" />
        </div>
        <div className="flex-1 flex flex-wrap gap-2 pt-1.5">
          <Badge className="bg-blue-50 text-blue-500 border border-blue-200/50 normal-case">
            UI/UX
            <button className="hover:text-blue-400 flex items-center">
              <MaterialIcon name="close" className="text-[14px]" />
            </button>
          </Badge>
          <input
            className="flex-1 min-w-[100px] text-sm text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent h-7"
            placeholder="タグを追加..."
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
          <Badge className="bg-white border border-slate-200 text-slate-900 text-xs font-bold shadow-sm pl-1 pr-2.5 py-0.5 normal-case">
            <Avatar
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ"
              alt="Team Alpha"
              size="xs"
            />
            Team Alpha
            <button className="ml-1 text-slate-500 hover:text-slate-900 flex items-center">
              <MaterialIcon name="close" className="text-[14px]" />
            </button>
          </Badge>
          <input
            className="flex-1 min-w-[120px] text-sm text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent h-7"
            placeholder="メンションを追加..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <MaterialIcon
            name="perm_media"
            className="text-slate-500 text-[18px]"
          />
        </div>
        <div className="flex-1 pt-1">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button className="h-[72px] w-[72px] rounded-xl border border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-1 hover:bg-slate-50 hover:border-blue-400 transition-all shrink-0 group">
              <MaterialIcon
                name="add_photo_alternate"
                className="text-[20px] text-slate-500 group-hover:text-blue-500 transition-colors"
              />
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-500 transition-colors">
                追加
              </span>
            </button>
            <div className="relative h-[72px] w-[72px] rounded-xl bg-slate-100 border border-slate-200 shrink-0 overflow-hidden group">
              <img
                alt="media"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahtivlWIVRRsgU8W0joBOZnwj1opK6Fhj8jsGn31O9K_Ivz9rySDOnbqYQdmQl4TXwhHgJB_JQuUQJVz3VKPe8cxyJG2MRPRNP2FWk3x2-WpJh0wkxYazlfUk6grWQB41s23VpiRqfkXdADL1_UbEhFBxS8DsoEawIymcFCjbN9NVFacAi9m5iYj0eFFXqq_eJdllS8vPk86wN7_eRYeSi0WGDxDe_8iU6YtexEf2Ew0_XHww2lIIUZRRPWOY9WeVi2ekEMNjglX"
              />
              <button className="absolute top-0.5 right-0.5 size-5 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors backdrop-blur-sm">
                <MaterialIcon name="close" className="text-[14px]" />
              </button>
            </div>
            <div className="relative h-[72px] w-[72px] rounded-xl bg-slate-100 border border-slate-200 shrink-0 overflow-hidden group">
              <img
                alt="media"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE1DNsrtaeGcPLyk4D08ufTq5XM-zgtKGIEFQaFyB5CyfAJGczvJ9sepwdPzayxOSrcEY7XGWfqRaS2zUxTvJj1asG7Bx2_jW2Dy67Em10gGojfTbPhfSq_rKA3Ki3WVwP7Fye9-iI9yhdJowE4KADAY3v_Me-DWzWBSibRGWpINTAIwx7kO5fThNEGAaZhnaSSkEzOXKXKl7kVlW6OOX2QvbZI8pcTZS7Amn2B0gExDOB5_Y_3FmEcXaRKtqQWtCy_oivJ_in5tO6"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <MaterialIcon
                  name="play_circle"
                  className="text-[24px] text-white/90 drop-shadow-md"
                />
              </div>
              <button className="absolute top-0.5 right-0.5 size-5 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors backdrop-blur-sm">
                <MaterialIcon name="close" className="text-[14px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
