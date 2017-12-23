import React, { Component } from 'react'
import css from './Jumbotron.css'


export default class Jumbotron extends Component {
    constructor() {
        super()
        this.text = ['Assaf will provide to you the best of the best']
    }



    render() {
        return (
            <div className={css["jumbotron"]}>
                <h1> <b>Assaf</b> will provide to you the best of the best </h1>
              
            </div>
        )
    }
}
