export const FETCHING_DATA = 'FETCHING_DATA'
export const DATA_FETCHED  = 'DATA_FETCHED'
export const FETCH_ERROR  	  = 'FETCH_ERROR'

export const fetchData = ()=> (
	dispatch => {

		dispatch({ type: FETCHING_DATA })

		return  fetch('/static/data/index.js')
				.then((res) => res.json())
				.then(res => dispatch({
					type	: DATA_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_ERROR,
					payload	: err
				}))
	  })


	  