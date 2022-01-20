import {BASE_URL} from './axios'

export const getReport = (id) => {
  window.open(`${BASE_URL}/api/get-report/${id}`)
}