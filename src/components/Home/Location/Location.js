import React, { Component } from 'react'
// import Rating from './Rating'
import css from './Location.css'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Location extends Component {
    constructor(props) {
        super(props)
        this.location = this.props.location;
    }




    render() {
        let rating = 0;
        for (let i of this.location.review) {
            rating += i.rating;
        }
        rating /= this.location.review.length;
        // console.log(this.location.name + ' '  +  rating)
        let link = '/locationPage/' +this.location.id 
        return (
            <div className={css["location"]} >
                {/*<Link to={link}>*/}
                <img src={this.location.image} alt="uuuyyy" className={css["locationImg"]} />
                <span className={css["locationPrice"]}><b>{this.location.price}</b></span>
                <span className={css["locationName"]}>{this.location.name}</span>
                <div>
                    {/*<Rating rating={rating} key={this.location.review.id} />*/}
                </div>
                {/*</Link>*/}
            </div>
        )
    }

}


    //   let link = /locationPage/locationPage/ +this.location.id 
    //     return (
    //         <div className="location">
    //             <Link to="/locationPage/locationPage">LocationPage</Link>