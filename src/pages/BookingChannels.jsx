
const channels = [
    { id: 1, name: "Booking.com", status: "Connected" },
    { id: 2, name: "Agoda", status: "Connected" },
    { id: 3, name: "Hotel Website", status: "Connected" }
];

export default function BookingChannels() {
    return (
        <section>
            <h2>Booking Channels</h2>
            <p>Manage the platforms connected to your hotel.</p>

            <ul>
                {channels.map((channel) => (
                    <li key={channel.id}>
                        {channel.name} — {channel.status}
                    </li>
                ))}
            </ul>
        </section>
    );
}