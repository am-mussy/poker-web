 const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

 const getUser = () => {
  const user = localStorage.getItem('user')
  return JSON.parse(user)
 }

 export const localStorageAction = {
  setUser,
  getUser
}