import syncData from "../mock/syncData";


export default function BookingSync() {


    return (
        <section>
            <h2>Booking Sync</h2>
            <p>Monitor reservation, availability, and rate updates.</p>

            <ul>
                {syncData.map((job) => (
                    <li key={job.id}>
                        <strong>{job.type}</strong>
                        {" — "}
                        {job.channel}
                        {" — "}
                        {job.roomType}
                        {" — "}
                        {job.checkIn}
                        {" — "}
                        {job.status}
                    </li>
                ))}
            </ul>
        </section>
    );
}