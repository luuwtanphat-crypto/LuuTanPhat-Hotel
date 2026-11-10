function RoomCard({ room }) {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} />
      <div className="room-info">
        <h3>{room.name}</h3>
        <p>{room.desc}</p>
        <p>👥 Tối đa {room.guests} khách</p>
        <p className="price">{room.price.toLocaleString('vi-VN')}đ / đêm</p>
        <button className="btn" onClick={() => alert(`Đã chọn: ${room.name}`)}>
          Đặt ngay
        </button>
      </div>
    </div>
  )
}

export default RoomCard