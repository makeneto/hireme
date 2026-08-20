import { useEmailComposer } from "@/hooks/useEmailComposer"

export interface ComposerProps {
  composer: ReturnType<typeof useEmailComposer>
}
