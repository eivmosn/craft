import axios from 'axios'
import {
  LRUCache,
} from 'lru-cache'

const httpRequest = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const cacheRequest = new LRUCache({
  max: 500,
  maxSize: 5000,
  ttl: 1000 * 60 * 5,
  sizeCalculation: () => 1,
})

httpRequest.interceptors.request.use((config) => {
  return config
}, (errors) => {
  return Promise.reject(errors)
})

httpRequest.interceptors.response.use((response) => {
  return response
}, (errors) => {
  return Promise.reject(errors)
})
