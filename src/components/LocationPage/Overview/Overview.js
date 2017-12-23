import React, { Component } from 'react'
import Rating from '../Rating'

export default class Overview extends Component {
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
        var icons = [];
        let classic = '';
        for (let x in this.location.transportation[0]) {
            console.log(x)
            if (this.location.transportation[0][x]) {
                classic = "fa fa-" + x;
                icons.push(<i className={classic} aria-hidden="true"></i>)
            }
        }
        console.log(icons)

        return (
            <div className="overview-pl">
                <div className="overview-pl-caption">
                    {this.location.name}
                </div>
                <div className="overview-pl-place">{this.location.city}, {this.location.country}
                    <span>&nbsp; &nbsp;</span><Rating rating={rating} key={this.location.review.id} />
                    <span>&nbsp; &nbsp;</span>{this.location.review.length} Reviews
                </div>
                <hr />
                <div className="overview-icons">
                    <div>
                        <div className="overview-icon"><i className="fa fa-users" aria-hidden="true"></i></div>
                        <div> {this.location.guestMax} Guests</div>
                    </div>
                    <div>
                        <div className="overview-icon">
                            {icons}
                        </div>
                        <div> transportation</div>
                    </div>
                </div>
                <hr />
                <div className="overview-about">
                    <h2>About the place</h2>
                    <br />
            

                    {this.location.description}
                </div>
                <hr />
            </div>
        )
    }
}
