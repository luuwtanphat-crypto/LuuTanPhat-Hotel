import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

function Rooms() {
  return (
    <section className="section">
      <h2>Danh sách phòng</h2>
      <div className="room-list">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  )
}

export default Rooms