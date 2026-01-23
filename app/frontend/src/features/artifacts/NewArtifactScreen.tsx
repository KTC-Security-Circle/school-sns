import { useState } from 'react'
import ArtifactCoverPicker from './components/ArtifactCoverPicker'
import ArtifactMetadataSection from './components/ArtifactMetadataSection'
import ArtifactFooter from './components/ArtifactFooter'
import ArtifactToolbar from './components/ArtifactToolbar'
import ArtifactTypeSelector from './components/ArtifactTypeSelector'
import ArtifactTitleField from './components/ArtifactTitleField'
import type {ArtifactEditorType} from './components/ArtifactTypeSelector';

export default function NewArtifactScreen() {
  const [type, setType] = useState<ArtifactEditorType>('artifact')
  const isArtifact = type === 'artifact'

  return (
    <>
      <main className="flex-1 overflow-y-auto pb-44 scrollbar-hide">
        <ArtifactTypeSelector value={type} onChange={setType} />
        <div className="px-5 space-y-6">
          {isArtifact ? <ArtifactCoverPicker /> : null}
          <ArtifactTitleField />
          <ArtifactToolbar />
          <textarea
            className="w-full min-h-[200px] text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent resize-none"
            placeholder={
              isArtifact
                ? '詳細を記述してください... (Markdown対応)'
                : 'スクラップを記述してください... (Markdown対応)'
            }
          />
          <ArtifactMetadataSection showMedia={isArtifact} />
        </div>
      </main>
      <ArtifactFooter />
    </>
  )
}
