import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://estrutura-dados-projeto-api.vercel.app/',
})