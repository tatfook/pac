import axios from 'axios'
export const keepworkEndpoint = axios.create({
  baseURL: process.env.KEEPWORK_API_PREFIX
})

export const getToken = () => {
  let token = JSON.parse(localStorage.getItem('token'))
  return {
    headers: { Authorization: `Bearer ${token}` }
  }
}

export const post = (...args) => {
  args.push(getToken())
  return keepworkEndpoint.post(...args).then(res => res.data)
}

export const user = {
  login: (...args) => post('/user/login', ...args),
  register: (...args) => post('/user/register', ...args),
  verifyCellphoneOne: (...args) => post('/user/verifyCellphoneOne', ...args),
  getProfile: (...args) => post('/user/getProfile', ...args),
  submitMemberApply: (...args) =>
    post('website_member/submitMemberApply', ...args),
  agreeMemberApply: (...args) =>
    post('website_member/agreeMemberApply', ...args),
  submitWorksApply: (...args) => post('website_works/submitWorksApply', ...args)
}
export const pages = {
  insert: (...args) => post('/pages/insert', ...args)
}
export const websiteMember = {
  getBySiteUsername: (...args) =>
    post('/website_member/getBySiteUsername', ...args)
}
export const websiteWorks = {
  getByUsername: (...args) => post('/website_works/getByUsername', ...args),
  search: (...args) => post('/website_works/search', ...args),
  getByWorksUrl: (...args) => post('website_works/getByWorksUrl', ...args),
  toVote: (...args) => post('website_works/vote', ...args),
  updateVisitCount: (...args) => post('website_works/updateVisitCount', ...args)
}
export const sensitiveWords = {
  query: (...args) => post('/sensitive_words/query', ...args)
}
export const keepwork = {
  user,
  pages,
  websiteMember,
  websiteWorks,
  sensitiveWords
}
export default keepwork
