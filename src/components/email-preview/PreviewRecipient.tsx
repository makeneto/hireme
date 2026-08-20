import Placeholder from "../form/Placeholder"

interface PreviewRecipientProps {
  label: string
  email: string
  placeholder: string
}

export default function PreviewRecipient({
  label,
  email,
  placeholder,
}: PreviewRecipientProps) {
  return (
    <>
      <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">
        {label}
      </div>
      <div className="text-sm text-neutral-800 dark:text-neutral-200 mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <span className={email.trim() ? "font-medium" : undefined}>
          <Placeholder value={email} fallback={placeholder} />
        </span>
      </div>
    </>
  )
}
