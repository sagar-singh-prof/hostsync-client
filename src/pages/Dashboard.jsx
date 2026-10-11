import RecentSyncActivity from "../components/RecentSyncActivity";
import StatCard from "../components/StatCard";

export default function Dashboard() {

    return (
        <>
            <h2>Dashboard</h2>
            <div className="stats-grid">
                <StatCard title="Connected Channels" value={2} />
                <StatCard title="Room Types" value={4} />
                <StatCard title="Pending Syncs" value={3} />
                <StatCard title="Sync Success rate" value="98.7%" />

            </div>
            <RecentSyncActivity />
        </>
    );
}

