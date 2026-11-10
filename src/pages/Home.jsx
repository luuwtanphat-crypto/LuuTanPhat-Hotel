import { useNavigate } from 'react-router-dom'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

function Home() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/rooms')
  }

  return (
    <div>
      <header className="hero">
        <h1>Tìm phòng khách sạn ưng ý</h1>
        <p>Đặt phòng nhanh chóng, giá tốt, xác nhận tức thì.</p>

        <form className="search-form" onSubmit={handleSearch}>
          <div>
            <label>Ngày nhận phòng</label>
            <input type="date" required />
          </div>
          <div>
            <label>Ngày trả phòng</label>
            <input type="date" required />
          </div>
          <div>
            <label>Số khách</label>
            <input type="number" min="1" defaultValue="2" />
          </div>
          <button type="submit" className="btn">Tìm phòng</button>
        </form>
      </header>

      <section className="section">
        <h2>Phòng nổi bật</h2>
        <div className="room-list">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="section gray">
        <h2>Vì sao chọn chúng tôi?</h2>
        <div className="features">
          <div className="feature">💰 <h3>Giá tốt nhất</h3><p>Cam kết hoàn tiền chênh lệch.</p></div>
          <div className="feature">⚡ <h3>Đặt nhanh</h3><p>Chỉ 3 bước là xong.</p></div>
          <div className="feature">🛎️ <h3>Hỗ trợ 24/7</h3><p>Luôn sẵn sàng phục vụ bạn.</p></div>
        </div>
      </section>
    </div>
  )
}

export default Home