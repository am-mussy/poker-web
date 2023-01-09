export const setRoom = (room) => {
  localStorage.setItem('user', JSON.stringify(room))
}

export const getRoom = () => {
  const room = localStorage.getItem('user')
  return JSON.parse(room)
}