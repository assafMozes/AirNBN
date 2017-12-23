import { FETCHING_DATA,DATA_FETCHED,FETCH_ERROR } from '../actions/dataCruncher'

export default function dataCruncher(state = {user:''}, action) {
   switch (action.type) {
    case FETCHING_DATA:
      return []
    case DATA_FETCHED:
      return action.payload
	  
	case FETCH_ERROR:
      return {
		  user	:	action.payload.message
	  }
    default:
      return state
  }
}