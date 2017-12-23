import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
	HashRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Counter from '../../components/Counter/Counter.view'
import { fetchData } from '../../actions/dataCruncher'
import { increment, decrement } from '../../actions/counter'
import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home/Home'
import LocationPage from '../../components/LocationPage/LocationPage/LocationPage'

import css from './App.css'

class App extends Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.doFetchData()
		console.log(this.props.dataCruncher)

	}
	render() {
		const { counter,
			dataCruncher,
			doIncrement, doDecrement,
			doFetchData
		  } = this.props

		return (
			<div class={css.main}>
				{/*<TopBar>Redux Counter + Async Ajax</TopBar>
				<h1 class={css.label}>React Redux Counter Example + Async</h1>
				<Counter
					value={counter}
					onIncrement={doIncrement}
					onDecrement={doDecrement}
				/>
				<DataCruncher fetchData={doFetchData} user={dataCruncher.user} />*/}
				<Header />
				<div className="content">
					<Route exact path="/" component={Home} />
						<Route path="/locationPage/:id" component={LocationPage} />
					{/*<Route path="/topics" component={Topics}/>*/}
				</div>

				{/*<Home />*/}

			</div>
		)
	}
}

function mapStateToProps(state) {
	const { counter, dataCruncher } = state
	return {
		counter,
		dataCruncher
	}
}

function mapDispatchToProps(dispatch) {
	return {
		doIncrement: () => dispatch(increment()),
		doDecrement: () => dispatch(decrement()),
		doFetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

