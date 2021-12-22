import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmU0MTgzZjAxN2EzMzRhMTRmZWY5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY0OTIyNywiZXhwIjoxNjQwOTA4NDI3fQ.lYfiqsv-phUG_d5-TGEGpSix5fn3kYh__pDsfDA9fcA'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: 'Bearer ' + TOKEN },
})
