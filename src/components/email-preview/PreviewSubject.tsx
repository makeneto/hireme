interface PreviewSubjectProps {
  label: string
  subjectText: string | null
  placeholder: string
}

export default function PreviewSubject({
  label,
  subjectText,
  placeholder,
}: PreviewSubjectProps) {
  return (
    <>
      <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">
        {label}
      </div>
      <div className="text-sm text-neutral-900 dark:text-neutral-100 font-medium mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        {subjectText ? (
          <span className="font-semibold">{subjectText}</span>
        ) : (
          <span className="text-neutral-400 dark:text-neutral-600">
            {placeholder}
          </span>
        )}
      </div>
    </>
  )
}
