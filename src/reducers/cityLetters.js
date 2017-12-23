import { UPDATECITYLETTERS } from '../actions/cityLetters'


export default function cityLetters(state = '', action) {
  switch (action.type) {
    case UPDATECITYLETTERS:
      return action.letters
    default:
      return state
  }
}
