import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    let authText

    if (isSubscribed) {
      authText = 'Subscribed'
    } else {
      authText = 'Subscribe'
    }
    return (
      <div className="welcome-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcome-paragraph">Thank you! Happy Learning</p>
        <button type="button" onClick={this.onSubscribed} className="button">
          {authText}
        </button>
      </div>
    )
  }
}

export default Welcome
