import React, { Component } from 'react'
import { Progress } from 'reactstrap'

class ProgressBar extends Component {
  render() {
    return (
      <div className="progressBar">
        <Progress multi>
          <Progress
            bar
            color="success"
            value={(this.props.data.confirmed / this.props.data.count) * 100}
          />
          <Progress
            bar
            color="warning"
            value={
              (1 - this.props.data.confirmed / this.props.data.count) * 100
            }
          />
        </Progress>
      </div>
    )
  }
}

export default ProgressBar
