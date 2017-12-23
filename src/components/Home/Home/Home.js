import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import css from './Home.css'


import { fetchData } from '../../../actions/dataCruncher'
import { updateGuestNum } from '../../../actions/guestNum'
import { updateCityLetters } from '../../../actions/cityLetters'

import Jumbotron from '../Jumbotron/Jumbotron'
import Search from '../Search/Search'
import Locations from '../Locations/Locations'


class Home extends Component {
    constructor(props) {
        super(props)
    }

    getCities() {
        var locations = [];
        this.props.dataCruncher.map((e) => locations.push({ city: e.city, guestMax: e.guestMax }))
        return locations;
    }

    UpdateGuestNum(e) {
        console.log(e.target.value)
        this.props.doUpdateGuestNum(e.target.value)
    }

    UpdateCityLetters(e) {
        console.log(e.target.value)
        this.props.doUpdateCityLetters(e.target.value)
    }

    getLocations() {
        return this.props.dataCruncher.filter((item) => {
            let cityLowwer = item.city.toLowerCase()
            let lettersLowwer = this.props.cityLetters.toLowerCase()
            return item.guestMax >= this.props.guestNum && cityLowwer.includes(lettersLowwer)
        })
    }


    render() {
        console.log(this.props.guestNum)
        return (

            <div className={css["home"]}>
                <Jumbotron />
                <Search cities={this.getCities()} updateNum={e => this.UpdateGuestNum(e)} updateCity={e => this.UpdateCityLetters(e)} guestNum={this.props.guestNum} />
                <Locations locations={this.getLocations()} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { counter, dataCruncher, guestNum, cityLetters } = state
    return {
        counter,
        dataCruncher,
        guestNum,
        cityLetters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doIncrement: () => dispatch(increment()),
        doDecrement: () => dispatch(decrement()),
        doFetchData: () => dispatch(fetchData()),
        doUpdateGuestNum: (num) => dispatch(updateGuestNum(num)),
        doUpdateCityLetters: (letters) => dispatch(updateCityLetters(letters)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)