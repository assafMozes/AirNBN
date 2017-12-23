import React, { Component } from 'react'
import Rating from '../Rating'
import Review from './Review'

export default class Reviews extends Component {
    constructor(props) {
        super(props)
        this.reviews = this.props.reviews;
    }



    render() {
        let rating = 0;
        for (let i of this.reviews) {
            rating += i.rating;
        }
        rating /= this.reviews.length;
        return (
            <div className="reviews-pl">
                <div className="reviews-pl-upper">
                    <div>
                        {this.reviews.length} Reviews
                    </div>
                    <div>
                        <Rating rating={rating} key={this.reviews.id} />
                    </div>
                    <div>
                        <input type="text" placeholder="search reviews" />
                    </div>
                </div>

                <hr />

                <div>
                    {this.reviews.map((item, i) =>
                        <Review review={item} key={item.id} />
                    )}

                </div>

                {/*<div>
                    <div>
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <div> {this.location.guestMax} Guests</div>
                    </div>
                    <div>
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                        <i className="fa fa-ship" aria-hidden="true"></i>

                        <div> transportation</div>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>About the place</h3>
                    {this.location.description}
                </div>*/}
            </div>
        )
    }
}
