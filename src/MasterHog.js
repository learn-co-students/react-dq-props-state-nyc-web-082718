// MasterHog:

// Has an eye color that can change via a radio button on the DOM
// Renders three BabyHogs, which inherit its eye color
// Owns the non-variable data associated with each BabyHog. This includes their: name, eye color, and hobby. (Obviously, MasterHog gets to name her babies, and they genetically inherit her eye color. Not obviously, MasterHog also gets to determine their hobbies)


import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
    }
  }

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }

  generateBabyHogs = () => {
    return offspring.map((hog) => {
      return (
        <BabyHog
          eyeColor={this.state.eyeColor}
          hog={hog}
        />
      )
    })
  }


  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>

        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>

        <ul className="hoglist">
          {this.generateBabyHogs()}
        </ul>

      </div>
    )
  }

}
