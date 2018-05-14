import axios from 'axios'
export const keepworkEndpoint = axios.create({
  baseURL: process.env.KEEPWORK_API_PREFIX,
  headers: {
    Authorization: '"bearer " + JSON.parse(localStorage.getItem("token"))'
  }
})

export const post = (...args) =>
  keepworkEndpoint
    .post(...args)
    .then(res => res.data)

export const user = {
  login: (...args) => post('/user/login', ...args),
  register: (...args) => post('/user/register', ...args),
  verifyCellphoneOne: (...args) => post('/user/verifyCellphoneOne', ...args),
  getProfile: (...args) => post('/user/getProfile', ...args),
  submitMemberApply: (...args) => post('website_member/submitMemberApply', ...args),
  agreeMemberApply: (...args) => post('website_member/agreeMemberApply', ...args)
}
export const pages = {
  insert: (...args) => post('/pages/insert', ...args)
}
export const websiteMember = {
  getBySiteUsername: (...args) => post('/website_member/getBySiteUsername', ...args)
}
export const keepwork = {
  user,
  pages
}

export default keepwork
