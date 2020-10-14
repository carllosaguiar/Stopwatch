import React from 'react'

const TableHeader = () => {
    return (
    <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
    </thead>
    )
}

const TableBody = (props) => {
  const rows = props.timeZoneData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.timezone}</td>
        <td>{row.localhour}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


const Table = (props) => {
    const {timeZoneData} = props

    return (
      <table>
        <TableHeader />
        <TableBody timeZoneData={timeZoneData} />
      </table>
    )
}

export default Table