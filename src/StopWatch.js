import React from 'react';

class StopWatch extends React.Component {
  state = {lapse: 0, running: false}

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - state.lapse
        this.timer = setInterval(() => {
          this.setState(
            {
              lapse: Date.now() - startTime,
            },
            () => {
              console.log(this.state.lapse)
            }
          )
        })
      }
      return {running: !state.running}
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({running: false, lapse: 0})
  }

  render() {
    const {lapse, running} = this.state
    const buttonStyles = {
      border: '1px solid #ccc',
      background: 'orangered',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200,
    }
    return (
      <div style={{textAlign: 'center'}}>
        <label
          style={{fontSize: '5em', display: 'block'}}
        >
          {lapse}ms
        </label>
        <button
          style={buttonStyles}
          onClick={this.handleRunClick}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button
          style={buttonStyles}
          onClick={this.handleClearClick}
        >
          Clear
        </button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {showStopWatch: true}
  render() {
    const {showStopWatch} = this.state
    return (
      <div>
        <label>
          Show Stop Watch{' '}
          <input
            type="checkbox"
            value={showStopWatch}
            onChange={() =>
              this.setState(s => ({
                showStopWatch: !s.showStopWatch,
              }))}
          />
        </label>
        <hr />
        {showStopWatch ? <StopWatch /> : null}
        
      </div>
    )
  }
}
export default StopWatch;