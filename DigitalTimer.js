import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {start: false, value: 60, hour: 25}

  componentDidMount() {
    const {start} = this.state
    this.timer = start ? setInterval(this.tick, 1000) : ''
  }

  tick = () => {
    console.log('timerCalled')
    this.setState(prevState => ({value: prevState.value - 1}))
  }

  isStart = () => {
    const {start} = this.state

    this.setState(prevState => ({start: !prevState.start}))
    console.log(start)
  }

  increase = () => {
    const {start} = this.state
    if (start === false) {
      this.setState(prevState => ({hour: prevState.hour + 1}))
    }
  }

  reset = () => {
    const {start} = this.state
    if (start) {
      this.setState({hour: 25, value: 60, start: false})
    } else {
      this.setState({hour: 25, value: 60})
    }
  }

  decrease = () => {
    const {start} = this.state
    if (start === false) {
      this.setState(prevState => ({hour: prevState.hour - 1}))
    }
  }

  render() {
    const {start, value, hour} = this.state
    const val = value === 60 ? '00' : value

    return (
      <div className="main-cont">
        <h1>Digital Timer</h1>
        <div className="img-cont">
          <div className="main-img">
            <div className="timer-cont">
              <h1>
                {hour}:{val}
              </h1>

              <p>{start ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="buttons-cont">
            <div className="bt-cont">
              <div className="play">
                <button onClick={this.isStart} type="button">
                  <img
                    className="play-icon"
                    src={
                      start
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    }
                    alt={start ? 'pause icon' : 'play icon'}
                  />

                  <p>{start ? 'Pause' : 'Start'}</p>
                </button>
              </div>
              <div className="play">
                <button onClick={this.reset} type="button">
                  <img
                    className="play-icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                  />

                  <p>Reset</p>
                </button>
              </div>
            </div>
            <p>Set Timer limit</p>
            <div className="count">
              <button onClick={this.decrease} type="button">
                -
              </button>
              <div className="c">
                <p>{hour}</p>
              </div>
              <button onClick={this.increase} type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
