
const roomTypes = [
    { id: 1, name: "Standard Room", capacity: 2, price: 2500 },
    { id: 2, name: "Deluxe Room", capacity: 2, price: 4000 },
    { id: 3, name: "Family Room", capacity: 4, price: 6000 },
    { id: 4, name: "Suite", capacity: 2, price: 8500 }
];

export default function RoomTypes() {
    return (
        <section>
            <h2>Room Types</h2>
            <p>View the room categories offered by your hotel.</p>

            <ul>
                {roomTypes.map((room) => (
                    <li key={room.id}>
                        {room.name} — Sleeps {room.capacity} — ₹{room.price} per night
                    </li>
                ))}
            </ul>
        </section>
    );
}