import React from 'react'
import { useTable } from 'react-table'
 
function BohTipTable() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Dario',
        col2: '4',
        col3: '$7.25',


      },
      {
        col1: 'Manuel',
        col2: '30.5',
        col3: '$55.28',

      },
      {
        col1: 'Sergio',
        col2: '21.25',
        col3: '$38.52',

      },
      {
        col1: 'Nick',
        col2: '57.53',
        col3: '$104.28',

      },
      {
        col1: 'Luis',
        col2: '43.98',
        col3: '$79.72',

      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Hours',
        accessor: 'col2',
      },
      {
        Header: 'Tips',
        accessor: 'col3',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BohTipTable