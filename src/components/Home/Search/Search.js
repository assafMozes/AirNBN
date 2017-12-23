import React, { Component } from 'react'
import css from './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.searchOptions = [{title:"Where",default:'Anywhere'},
                              {title:'When',default:'Anytime'},
                              {title:'Guests',default:'Just one'}]
        this.cities = this.props.cities;
        this.state = {guests:0}
    }

//     componentWillMount(){
//         // console.log(this.cities)
//     }

//    update(event) {
//         this.setState({guests: event.target.value})
//         // console.log(this.state.guests)
//     }
//     // allCities(){
//     //     this.cities.forEach((el)=> {
            
//     //     }, this);
//     // }


    render() {
        this.cities = this.props.cities;
        console.log(this.props.guestNum)
        var cities = this.cities.filter((item) => item.guestMax>=this.props.guestNum)      
        return (
            <div className={css["search"]}>
                <div className={css["searchOption"]}>
                    <div className='searchOptionName' key={this.searchOptions[0].title}>{this.searchOptions[0].title} </div>
                    <input list="cities" name="cities" placeholder={this.searchOptions[0].default} onChange={(e)=> this.props.updateCity(e)}/>
                     {/*onChange={(e)=> this.props.updatelist(e)}/>*/}
                    <datalist id="cities">
                        {cities.map((item, i) =>
                        <option value={item.city} key={i}/>
                    )}
                     
                    </datalist>
                </div>
                <div className={css["searchOption"]}>
                    <div className={css["searchOptionName"]} key={this.searchOptions[1].title}>{this.searchOptions[1].title} </div>
                    <input type="date" />
                </div>
                <div className={css["searchOption"]}>
                    <div className={css["searchOptionName"]} key={this.searchOptions[2].title}>{this.searchOptions[2].title} </div>
                    <input type="number" min={1} max={8} placeholder={1} onChange={(e)=> this.props.updateNum(e)}/>
                </div>
                 
            </div>
        )
    }
    
}
