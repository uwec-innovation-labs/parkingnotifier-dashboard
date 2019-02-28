import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Progress } from 'reactstrap'

class ProgressBar extends Component {
  render() {
    return (
      <div className="progressBar">
        <Container>
          <Progress multi>
            <Progress
              bar
              color="success"
              value={(this.props.data.confirmed / this.props.data.count) * 100}
            >
              {Math.round(
                (this.props.data.confirmed / this.props.data.count) * 100
              )}
              %
            </Progress>
            <Progress
              bar
              color="warning"
              value={
                (1 - this.props.data.confirmed / this.props.data.count) * 100
              }
            >
              {Math.round(
                (1 - this.props.data.confirmed / this.props.data.count) * 100
              )}
              %
            </Progress>
          </Progress>
        </Container>
      </div>
    )
  }
}

export default ProgressBar
