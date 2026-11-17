import { useEffect, useState } from 'react'
import { getRooms, createRoom, updateRoom, deleteRoom } from '../api/roomApi'

const emptyForm = { name: '', price: '', guests: 2, image: '', description: '' }

function ManageRooms() {
  const [rooms, setRooms] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')

  const loadRooms = async () => {
    try {
      const res = await getRooms()
      setRooms(res.data)
      setError('')
    } catch {
      setError('Không kết nối được tới API. Hãy kiểm tra backend đã chạy chưa.')
    }
  }

  useEffect(() => {
    loadRooms()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      price: Number(form.price),
      guests: Number(form.guests),
    }
    try {
      if (editingId) {
        await updateRoom(editingId, { id: editingId, ...payload }) // PUT
      } else {
        await createRoom(payload) // POST
      }
      setForm(emptyForm)
      setEditingId(null)
      loadRooms()
    } catch {
      setError('Lưu thất bại. Kiểm tra lại dữ liệu nhập.')
    }
  }

  const handleEdit = (room) => {
    setEditingId(room.id)
    setForm({
      name: room.name,
      price: room.price,
      guests: room.guests,
      image: room.image ?? '',
      description: room.description ?? '',
    })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn chắc chắn muốn xóa phòng này?')) return
    try {
      await deleteRoom(id) // DELETE
      loadRooms()
    } catch {
      setError('Xóa thất bại.')
    }
  }

  return (
    <section className="section">
      <h2>Quản lý phòng</h2>
      {error && <p className="error">{error}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Tên phòng" value={form.name} onChange={handleChange} required />
        <input name="price" type="number" min="1" placeholder="Giá / đêm (VNĐ)" value={form.price} onChange={handleChange} required />
        <input name="guests" type="number" min="1" max="20" placeholder="Số khách tối đa" value={form.guests} onChange={handleChange} required />
        <input name="image" placeholder="Link hình ảnh" value={form.image} onChange={handleChange} />
        <textarea name="description" rows="3" placeholder="Mô tả" value={form.description} onChange={handleChange} />
        <button type="submit" className="btn">{editingId ? 'Cập nhật' : 'Thêm phòng'}</button>
        {editingId && (
          <button type="button" className="btn" onClick={() => { setEditingId(null); setForm(emptyForm) }}>
            Hủy sửa
          </button>
        )}
      </form>

      <table className="room-table">
        <thead>
          <tr><th>ID</th><th>Tên phòng</th><th>Giá</th><th>Khách</th><th>Thao tác</th></tr>
        </thead>
        <tbody>
          {rooms.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.price.toLocaleString('vi-VN')}đ</td>
              <td>{r.guests}</td>
              <td>
                <button className="btn" onClick={() => handleEdit(r)}>Sửa</button>{' '}
                <button className="btn danger" onClick={() => handleDelete(r.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ManageRooms