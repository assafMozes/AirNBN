import React, { Component } from 'react'


export default class Review extends Component {
    constructor(props) {
        super(props)
        this.review = this.props.review;
    }




    render() {
        return (
            <div className="review-pl">
                <img src={this.review.image} alt="uuuyyy" className="reviewImg" />
                <div className="review-head">

                    <div className="review-pl-auther"> <b>{this.review.auther}</b></div>
                    <div className="review-pl-caption"> {this.review.caption}</div>
                </div>
                <div className="review-pl-description"> {this.review.description}</div>
                <hr />
            </div>
        )
    }

}
