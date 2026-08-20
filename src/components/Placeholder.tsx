interface PlaceholderProps {
  value: string
  fallback: string
}

export default function Placeholder({ value, fallback }: PlaceholderProps) {
  return value ? (
    <span>{value}</span>
  ) : (
    <span className="text-neutral-400 dark:text-neutral-600">{fallback}</span>
  )
}
