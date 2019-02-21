import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Container } from 'reactstrap'

class Table extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    console.log(this.state)
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
            loading={this.props.loading}
            data={this.props.data}
            columns={columns}
            getTrProps={(state, rowInfo, column) => {
              return {
                onClick: () => {
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
