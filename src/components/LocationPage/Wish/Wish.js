import React, { Component } from 'react'


export default class Wish extends Component {
    constructor(props) {
        super(props)
    }




    render() {
        return (
            <div className="wish">
                <div className="wish-button"><i className="fa fa-heart-o" aria-hidden="true"></i>save to wish list</div>
                2 travelers saved this
                <div className="wish-dates">
                    <div className="wish-icons">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-google" aria-hidden="true"></i>
                        <i className="fa fa-gitlab" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>

                    </div>
                </div>
            </div>
        )
    }

}
