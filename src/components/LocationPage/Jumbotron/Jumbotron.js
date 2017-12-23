import React, { Component } from 'react'


export default class Jumbotron extends Component {
    constructor(props) {
        super(props)
        this.image = this.props.image;
    }



    render() {
        return (
            <div className="jumbotron-lp">
                <img className="image-lp" src={this.image} alt="rrrrr"/>
              
            </div>
        )
    }
}
