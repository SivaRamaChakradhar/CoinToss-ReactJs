import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailCount: 0,
    tossResultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  updateToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const isHeads = tossResult === 0
    this.setState(prevCount => ({
      headCount: isHeads ? prevCount.headCount + 1 : prevCount.headCount,
      tailCount: !isHeads ? prevCount.tailCount + 1 : prevCount.tailCount,
      tossResultImage: isHeads
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    }))
  }

  render() {
    const {headCount, tailCount, tossResultImage} = this.state

    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img alt="toss result" src={tossResultImage} />
          <button onClick={this.updateToss} className="btn" type="button">
            Toss Coin
          </button>
          <div className="coin-face">
            <p className="des">Total: {headCount + tailCount}</p>
            <p className="des">Heads: {headCount}</p>
            <p className="des">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
