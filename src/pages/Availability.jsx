
const availabilityData = [
    { id: 1, roomType: "Standard Room", totalRooms: 20, bookedRooms: 12 },
    { id: 2, roomType: "Deluxe Room", totalRooms: 10, bookedRooms: 6 },
    { id: 3, roomType: "Family Room", totalRooms: 8, bookedRooms: 5 },
    { id: 4, roomType: "Suite", totalRooms: 5, bookedRooms: 2 }
];

export default function Availability() {
    return (
        <section>
            <h2>Room Availability</h2>
            <p>Check room availability across your hotel.</p>

            <ul>
                {availabilityData.map((room) => {
                    const availableRooms =
                        room.totalRooms - room.bookedRooms;

                    return (
                        <li key={room.id}>
                            {room.roomType} — Available: {availableRooms}
                            {" / "}
                            {room.totalRooms}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}