// BabyHog:

// Has an eye color received from its parent
// Has a hobby assigned by its parent
// Has a name given by its parent
// Has a variable weight, that can be changed via buttons

// Note: While the MasterHog component can change its own eye color via radio buttons, its children can only inherit the eye color of their parent!

import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby
}

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 10
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>Name</h1> {this.props.hog.name}
        <h3>Weight:</h3> {this.state.weight}
        <h3>Hobby:</h3> {this.props.hog.hobby}
        <h4>Eye Color:</h4> {this.props.eyeColor}

        <Button
          name="+"
          onClick={this.changeWeight}
        >
          Increase Weight
        </Button>
        <Button
          name="-"
          onClick={this.changeWeight}
        >
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={eyeColorMapper[this.props.eyeColor]} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
