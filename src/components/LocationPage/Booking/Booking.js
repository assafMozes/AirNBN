import React, { Component } from 'react'


export default class Booking extends Component {
    constructor(props) {
        super(props)
        this.price = this.props.price;
    }




    render() {
        return (
            <div className="booking">
                <div className="booking-price"><b className="price">{this.price} per night</b></div>
                <div className="booking-dates">
                    <div className="bo">
                        <div>Check in</div>
                        <input type="date" />
                    </div>
                    <div className="bo">
                        <div>Check out</div>
                        <input type="date" />
                    </div>
                </div>
                <div className="booking-guests">
                    <div>guests</div>
                        <input type="number" placeholder="1 guest" />
                </div>
                <div className="booking-button">Request to book</div>

            </div>
        )
    }

}
