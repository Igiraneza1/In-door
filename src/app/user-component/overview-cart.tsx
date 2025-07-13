import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OverviewCardProps {
  title: string
  value: string
  description: string
}

export function OverviewCard({ title, value, description }: OverviewCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {/* Icon can be passed as a prop if needed */}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
