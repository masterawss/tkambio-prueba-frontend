import axios from 'axios';
const BASE_URL = "http://tkambio-prueba.test/api"

export const getReport = (id) => {
  window.open(`${BASE_URL}/get-report/${id}`)
}