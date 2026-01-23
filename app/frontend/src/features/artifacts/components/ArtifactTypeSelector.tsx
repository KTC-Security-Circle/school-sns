import MaterialIcon from '../../../components/MaterialIcon'
import { cn } from '../../../utils/cn'

export type ArtifactEditorType = 'scrap' | 'artifact'

type ArtifactTypeSelectorProps = {
  value: ArtifactEditorType
  onChange: (value: ArtifactEditorType) => void
}

export default function ArtifactTypeSelector({
  value,
  onChange,
}: ArtifactTypeSelectorProps) {
  const isArtifact = value === 'artifact'
  return (
    <div className="px-5 py-4 bg-white">
      <div className="bg-slate-50 p-1 rounded-xl flex relative border border-slate-200/50 shadow-inner">
        <button
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-bold transition-all z-10',
            isArtifact
              ? 'text-slate-500 hover:text-slate-900 opacity-70 hover:opacity-100'
              : 'text-slate-900 bg-white rounded-lg shadow-sm border border-slate-200/50 ring-1 ring-black/5',
          )}
          onClick={() => onChange('scrap')}
          type="button"
        >
          <MaterialIcon name="edit_note" className="text-[18px]" />
          スクラップ
        </button>
        <button
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-bold transition-all z-10',
            isArtifact
              ? 'text-slate-900 bg-white rounded-lg shadow-sm border border-slate-200/50 ring-1 ring-black/5'
              : 'text-slate-500 hover:text-slate-900 opacity-70 hover:opacity-100',
          )}
          onClick={() => onChange('artifact')}
          type="button"
        >
          <MaterialIcon
            name="history_edu"
            className="text-[18px] text-blue-500"
            filled
          />
          アーティファクト
        </button>
      </div>
      <p className="text-[11px] text-slate-500 mt-2 px-1 text-center font-medium">
        {isArtifact
          ? '成果物やプロジェクトの報告を共有しましょう。'
          : '気づきやメモ、途中経過を気軽に共有しましょう。'}
      </p>
    </div>
  )
}
