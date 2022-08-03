import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getEvents(perPage, page) {
    return apiClient.get('/passenger?page=' + page + '&size=' + perPage)
  },

  getEvent(id) {
    return apiClient.get('/passenger/' + id)
  },
  getEventAir(id) {
    return apiClient.get('/airline/' + id)
  },
  getEventsAir() {
    return apiClient.get('/airline')
  },
  //Added new call
  getEventsPassenger() {
    return apiClient.get('/passenger')
  }
}
