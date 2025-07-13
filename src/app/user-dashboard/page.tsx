import { DashboardHeader } from "../../app/user-component/header-dashboard"
import { DashboardSidebar } from "../user-component/sidebar-dashboard"
import { OverviewCard } from "../../app/user-component/overview-cart"
import { RecentActivity } from "../../app/user-component/recent-activity"

export default function DashboardPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <OverviewCard title="Total Revenue" value="$45,231.89" description="+20.1% from last month" />
            <OverviewCard title="Subscriptions" value="+2350" description="+180.1% from last month" />
            <OverviewCard title="Sales" value="+12,234" description="+19% from last month" />
            <OverviewCard title="Active Now" value="+573" description="+201 since last hour" />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
            <RecentActivity />
            {/* Placeholder for other dashboard components */}
            <div className="col-span-full lg:col-span-1 flex flex-col gap-4">
              <OverviewCard title="New Users" value="1,234" description="Joined this week" />
              <OverviewCard title="Support Tickets" value="42" description="Open tickets" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
