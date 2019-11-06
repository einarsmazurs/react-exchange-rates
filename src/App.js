import React from 'react'
import './App.scss'
import axios from 'axios'

class App extends React.Component {

  state = {
    rates: []
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,ETH,EUR,JPY,ILS,BNB,CAD,AUD')
      .then(res => {
        const rates = res.data
        this.setState({rates: rates})
      })
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Exchange Rates</h1>
      </header>
      <div className="Exchange-rates-box">
      <ul>
        {Object.keys(this.state.rates).map((key) => (
          <li key={Math.random()}>
            <span>{key}</span>
            <span className="Rate">{this.state.rates[key].toLocaleString(undefined, {maximumFractionDigits:4, minimumFractionDigits:4})}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
    )
  }
}

export default App
