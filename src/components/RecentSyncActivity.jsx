
import syncData from "../mock/syncData";
export default function RecentSyncActivity() {
    return (
        <section>
            <h3>Recent Sync Activity</h3>

            {/* We'll render the sync records here */}
            <div>
                {syncData.map((job) => (
                    <div key={job.id}>
                        <span>{job.type}</span>
                        <span>{job.source} → {job.destination}</span>
                        <span>{job.status}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}