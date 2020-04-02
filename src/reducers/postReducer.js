export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload.slice(0, 50)
    default:
      return state
  }
}
