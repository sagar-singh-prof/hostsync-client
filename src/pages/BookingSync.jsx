
const syncJobs = [
    {
        id: 1,
        type: "Reservation Update",
        channel: "Booking.com",
        details: "Standard Room — 12 Oct",
        status: "Completed"
    },
    {
        id: 2,
        type: "Availability Update",
        channel: "Agoda",
        details: "Deluxe Room — 13 Oct",
        status: "In Progress"
    },
    {
        id: 3,
        type: "Rate Update",
        channel: "Hotel Website",
        details: "Suite — ₹8,500/night",
        status: "Failed"
    }
];

export default function BookingSync() {
    return (
        <section>
            <h2>Booking Sync</h2>
            <p>Monitor reservation, availability, and rate updates.</p>

            <ul>
                {syncJobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.type}</strong>
                        {" — "}
                        {job.channel}
                        {" — "}
                        {job.details}
                        {" — "}
                        {job.status}
                    </li>
                ))}
            </ul>
        </section>
    );
}