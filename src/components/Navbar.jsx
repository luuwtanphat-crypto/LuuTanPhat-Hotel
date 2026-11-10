import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🏨 Sunrise Hotel</div>
      <ul>
        <li><NavLink to="/">Trang chủ</NavLink></li>
        <li><NavLink to="/rooms">Phòng</NavLink></li>
        <li><NavLink to="/about-us">Giới thiệu</NavLink></li>
        <li><NavLink to="/contact">Liên hệ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar