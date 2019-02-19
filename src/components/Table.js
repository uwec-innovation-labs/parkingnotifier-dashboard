import React, { Component } from 'react'
import ReactTable from 'react-table'
import { withRouter } from 'react-router-dom'
import 'react-table/react-table.css'
import { Container } from 'reactstrap'
import axios from 'axios'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    axios
      .get('http://localhost:9000/users', {
        headers: {
          token: 'test'
        }
      })
      .then(res => {
        console.log(res.data[0])
        this.setState({ data: res.data })
      })
  }

  edit(email) {
    this.props.history.push(`/edit/${email}`)
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First',
            accessor: 'firstName',
            filterable: true
          },
          {
            Header: 'Last',
            accessor: 'lastName',
            filterable: true
          }
        ]
      },
      {
        Header: 'Details',
        columns: [
          {
            Header: 'Email',
            accessor: 'username',
            filterable: true
          },
          {
            Header: 'Phone Number',
            accessor: 'phoneNumber',
            filterable: true
          },
          {
            Header: 'Subcribed',
            accessor: 'subscribed',
            filterable: true,
            Cell: row => (
              <span>
                <span
                  style={{
                    color: row.value ? 'green' : row.value ? 'red' : 'orange',
                    transition: 'all .5s ease'
                  }}
                >
                  {row.value ? 'Confirmed' : 'Unconfirmed'}
                </span>
              </span>
            )
          }
        ]
      }
    ]

    return (
      <div>
        <Container>
          <ReactTable
            className="-highlight -striped"
            data={this.state.data}
            columns={columns}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: () => {
                  console.log(rowInfo.row.username)
                  console.log(this.props)
                }
              }
            }}
          />
        </Container>
      </div>
    )
  }
}

export default Table
