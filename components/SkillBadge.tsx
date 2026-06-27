import { Badge } from "@/components/ui/badge"

export default function SkillBadge({ label }: { label: string }) {
  return (
    <Badge variant="outline" className="px-3 py-1 text-xs font-medium">
      {label}
    </Badge>
  )
}
