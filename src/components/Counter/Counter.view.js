import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div class={css.main} >
		<div className={css['btn-box']} >
			<button class={css.btn} onClick={onIncrement}> + </button>        
        	<button class={css.btn} onClick={onDecrement}> - </button> 
		</div>
        <span class={css.label}>Clicked: {value} times</span>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
