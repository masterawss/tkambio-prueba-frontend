import {BASE_URL} from './axios'

export const getReport = (id) => {
  window.open(`https://tkambio-prueba.herokuapp.com/public/api/get-report/${id}`)
}