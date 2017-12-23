import React, { Component } from 'react'


export default class Topbar extends Component {
    constructor() {
        super()
        this.topbarOptions = ['Overview', 'Reviews', 'The Host', 'Location']
    }



    render() {
        return (
            <div className="topbar-pl">
                <div className="topbarOptions">
                    {this.topbarOptions.map((item, i) =>
                        <div className='topbarOption' key={i}>{item} </div>
                    )
                    }
                </div>
            </div>
        )
    }
}
