import React, { Component } from 'react'

const TableHeader = () => {
    return (
    <thead>
        <tr>
          <th>City</th>
          <th>Local Time</th>
        </tr>
    </thead>
    )
}

const TableBody = (props) => {
  const rows = props.timeZoneData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.timezone}</td>
        <td>{row.localhout}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


class Table extends Component {
    render() {
      const {timeZoneData} = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody timeZoneData={timeZoneData} />
        </table>
      )
    }
  }


  export default Table