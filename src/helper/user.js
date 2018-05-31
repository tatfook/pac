import keepwork from '@/api/keepwork'
export const getIsLogined = async () => {
  let localUserinfo = localStorage.getItem('userinfo')
  let localToken = localStorage.getItem('token')
  if (!localUserinfo || !localToken) {
    return false
  }
  let isTokenValid
  await keepwork.user
    .getProfile({})
    .then(result => {
      isTokenValid = true
    })
    .catch(error => {
      console.log(error)
      isTokenValid = false
    })
  return isTokenValid
}

export const userHelper = {
  getIsLogined
}

export default userHelper
