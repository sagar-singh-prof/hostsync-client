import RecentSyncActivity from "../../components/recentSyncActivity/RecentSyncActivity";
import StatCard from "../../components/statCard/StatCard";
import styles from "./DashBoard.module.css";
export default function Dashboard() {

    return (
        <>
            <h2>Dashboard</h2>
            <div className={styles['stats-grid']}>
                <StatCard title="Connected Channels" value={2} />
                <StatCard title="Room Types" value={4} />
                <StatCard title="Pending Syncs" value={3} />
                <StatCard title="Sync Success rate" value="98.7%" />

            </div>
            <RecentSyncActivity />
        </>
    );
}

