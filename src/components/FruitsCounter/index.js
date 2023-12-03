import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mangoIncrease = () => {
    this.setState = prevState => {
      console.log(`Prev number is ${prevState.mangoes}`)
      return {mangoes: prevState.mangoes + 1}
    }
  }

  bananaIncrease = () => {
    this.setState = prevState => {
      console.log(`prev number is ${prevState.bananas}`)
      return {bananas: prevState.bananas + 1}
    }
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="mango-count"> {mangoes} </span>
            mangoes <span className="banana-count"> {bananas} </span>
            bananas
          </h1>
          <div className="image-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-image"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoIncrease}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana-image"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananaIncrease}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
