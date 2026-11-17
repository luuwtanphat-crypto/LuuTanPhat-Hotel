import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const getRooms = () => api.get('/rooms')                       // GET
export const getRoom = (id) => api.get(`/rooms/${id}`)                // GET 1 phòng
export const createRoom = (data) => api.post('/rooms', data)          // POST
export const updateRoom = (id, data) => api.put(`/rooms/${id}`, data) // PUT
export const deleteRoom = (id) => api.delete(`/rooms/${id}`)          // DELETE