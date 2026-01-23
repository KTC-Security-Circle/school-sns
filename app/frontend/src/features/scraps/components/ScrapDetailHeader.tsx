import { useNavigate } from '@tanstack/react-router'
import IconButton from '../../../components/ui/IconButton'

export default function ScrapDetailHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <IconButton
        icon="arrow_back"
        label="戻る"
        className="text-slate-700 size-10 hover:bg-slate-100 active:scale-95"
        onClick={() => navigate({ to: '/' })}
      />
      <h1 className="text-base font-bold tracking-tight text-slate-900">
        スクラップ
      </h1>
      <div className="w-10" />
    </div>
  )
}
