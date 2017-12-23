import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import { fetchData } from '../../../actions/dataCruncher'
import { updateGuestNum } from '../../../actions/guestNum'
import { updateCityLetters } from '../../../actions/cityLetters'


// import Jumbotron from './Jumbotron.js'
// import Topbar from './Topbar.js'
// import Overview from './Overview'
// import Reviews from './Reviews'
// import Booking from './Booking'
// import Wish from './Wish'

class LocationPage extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.id;
       
    }

    render() {
        for(let x of this.props.dataCruncher){
            // console.log(x.id)
            if(x.id == this.id ){
                          this.location = x;
                          break;
                        }
        }
        console.log(this.location)
        return(
        <div>

        </div>)
        // if (this.location) {
        //     return (
        //         <div className="locationPage">
        //             <Jumbotron image={this.location.image} />
        //             <Topbar />
        //             <Overview location={this.location} />
        //             <Reviews reviews={this.location.review} />
        //             <div className="LocationPage-sidebar">
        //                 <Booking price={this.location.price} />
        //                 <Wish />
        //             </div>
        //         </div>
        //     )
        // }
        // else{

        // return (<div></div>)
        // }

    }

}

function mapStateToProps(state) {
    const { dataCruncher, guestNum, cityLetters } = state
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage)