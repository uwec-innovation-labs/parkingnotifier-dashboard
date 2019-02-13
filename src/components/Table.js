import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
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
        filterable: true
      }
    ]

    return (
      <div>
        <ReactTable
          className="-highlight -striped"
          data={this.state.data}
          columns={columns}
        />
      </div>
    )
  }
}

export default Table