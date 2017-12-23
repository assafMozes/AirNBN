import { UPDATEGUESTNUM } from '../actions/guestNum'


export default function guestNum(state = 0, action) {
  switch (action.type) {
    case UPDATEGUESTNUM:
      return action.num
    default:
      return state
  }
}
