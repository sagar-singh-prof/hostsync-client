
import syncData from "../../mock/syncData";
import styles from "./RecentSyncActivity.module.css";
export default function RecentSyncActivity() {
    return (
        <section className={styles['recent-activity']}>
            <h3>Recent Booking Sync Activity</h3>

            <table>
                <thead>
                    <tr>
                        <th>Update Type</th>
                        <th>Channel</th>
                        <th>Room Type</th>
                        <th>Check-in</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {syncData.map((job) => (
                        <tr key={job.id}>
                            <td>{job.type}</td>
                            <td>{job.channel}</td>
                            <td>{job.roomType}</td>
                            <td>{job.checkIn}</td>
                            <td>
                                <span
                                    className={`${styles.status} ${styles[job.status.toLowerCase().replaceAll(" ", "-")] || ""}`}
                                >                                    {job.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}