import React, { Component } from 'react'
import MasterHog from './MasterHog'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <MasterHog />
      </div>
    )
  }

}
// Directions:

// Understanding the data associated with both the MasterHog as well as the BabyHog components, plan out what data should be kept as state vs. props in each component and then implement it

// Make use of the src/db.js file (import it!). Hint: arrays can be mapped and return JSX! Just because the starter code has three BabyHog components written in doesn't mean its an ideal solution

// Depending on the BabyHog eye color, a different image should be rendered (several are being imported in the BabyHog component)

// While the changeWeight method has been implemented in BabyHog, it is not 'hooked up' to the component. Make sure the function is invoked so our hogs can grow and shrink when either of the button's are clicked. (Consider how MasterHog's changeEyeColor method is 'hooked up' if you are stuck here)
