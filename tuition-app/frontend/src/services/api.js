import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
})

export const getCourses = (category) =>
  api.get('/courses', { params: category ? { category } : {} }).then(r => r.data)

export const getCourseById = (id) =>
  api.get(`/courses/${id}`).then(r => r.data)

export const getTestimonials = () =>
  api.get('/testimonials').then(r => r.data)

export const getTimetable = () =>
  api.get('/timetable').then(r => r.data)

export const submitRegistration = (data) =>
  api.post('/registrations', data).then(r => r.data)

export default api
