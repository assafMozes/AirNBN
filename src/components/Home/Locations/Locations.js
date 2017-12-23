import React, { Component } from 'react'
import Location from '../Location/Location' 
import css from './Locations.css'


export default class Locations extends Component {
    constructor(props) {
        super(props)
        this.locations =this.props.locations;
        }

    
    render() {
        this.locations = this.props.locations;
        console.log(this.locations)
        return (
            <div className={css["locations"]}>
                        {this.locations.map((item, i) =>
                        <Location location={item} key={item.id}/>
                    )}
                             
            </div>
        )
    }
    
}
