import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import css from './Header.css'


export default class Board extends Component {
    constructor() {
        super()
        this.headerOptions = ['buying', 'selling', 'specials', 'exesories']
    }



    render() {
        return (
            <div  className={css["header"]}>
                <div className="headerLogo">
                    {/*<Link to="/">*/}
                    <img className={css["logo"]} src="../static/icons/logo.png" alt=""/>
                    {/*</Link>*/}
                </div>

                <div  className={css["headerOptions"]}>
                    {this.headerOptions.map((item, i) =>
                        <span className={css["headerOption"]} key={i}>{item} </span>
                    )
                    }
                </div>
            </div>
        )
    }
}
