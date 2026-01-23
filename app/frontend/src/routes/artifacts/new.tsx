import { createFileRoute } from '@tanstack/react-router'
import NewArtifactScreen from '../../features/artifacts/NewArtifactScreen'
import ArtifactEditorHeader from '../../features/artifacts/components/ArtifactEditorHeader'

export const Route = createFileRoute('/artifacts/new')({
  component: RouteComponent,
  staticData: {
    shell: {
      header: ArtifactEditorHeader,
      backgroundClassName: 'bg-slate-100',
      frameClassName:
        'bg-white shadow-2xl overflow-hidden border-x border-slate-200',
      headerClassName: 'z-30 backdrop-blur-sm',
      showBottomNav: false,
    },
  },
})

function RouteComponent() {
  return <NewArtifactScreen />
}
