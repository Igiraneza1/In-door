import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

export function RecentActivity() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest actions and updates.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Activity className="h-6 w-6 text-muted-foreground" />
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">New product Super Widget added.</p>
            <p className="text-sm text-muted-foreground">Yesterday, 10:30 AM</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Activity className="h-6 w-6 text-muted-foreground" />
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Order #1024 completed.</p>
            <p className="text-sm text-muted-foreground">Yesterday, 09:15 AM</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Activity className="h-6 w-6 text-muted-foreground" />
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Profile updated.</p>
            <p className="text-sm text-muted-foreground">2 days ago, 03:00 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
