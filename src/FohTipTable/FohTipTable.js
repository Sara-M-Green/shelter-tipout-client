import React from 'react'
import { useTable } from 'react-table'
import './FohTipTable.css'
 
function FohTipTable(props) {
  const data = React.useMemo(
    () => [
      {
        col1: 'Tucker',
        col2: '$405.15',
        col3: '$256.32',
        col4: '$173.87',
        col5: '$293.87',
        col6: '$0.00',
        col7: '$0.00',
        col8: '$293.94',
        col9: '24',
        col10: '$96',
        col11: '$1,519.15',

      },
      {
        col1: 'Sara',
        col2: '$49.11',
        col3: '$0.00',
        col4: '$0.00',
        col5: '$327.77',
        col6: '$209.44',
        col7: '$134.10',
        col8: '$118.47',
        col9: '20',
        col10: '$80',
        col11: '$965.42',
      },
      {
        col1: 'Steph',
        col2: '$0.00',
        col3: '$234.96',
        col4: '$369.46',
        col5: '$282.56',
        col6: '$372.34',
        col7: '$344.84',
        col8: '$0.00',
        col9: '23',
        col10: '$92',
        col11: '$1,696.16',
      },
      {
        col1: 'Prep',
        col2: '$19.02',
        col3: '$19.30',
        col4: '$29.44',
        col5: '$47.99',
        col6: '$27.16',
        col7: '$35.05',
        col8: '$12.96',
        col9: '-',
        col10: '-',
        col11: '$190.92',
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
        Header: '12/28/20',
        accessor: 'col2',
      },
      {
        Header: '12/29/20',
        accessor: 'col3',
      },
      {
        Header: '12/30/20',
        accessor: 'col4',
      },
      {
        Header: '12/31/20',
        accessor: 'col5',
      },
      {
        Header: '01/01/21',
        accessor: 'col6',
      },
      {
        Header: '01/02/21',
        accessor: 'col7',
      },
      {
        Header: '01/03/21',
        accessor: 'col8',
      },
      {
        Header: 'Bottles Sold',
        accessor: 'col9',
      },
      {
        Header: 'Commission',
        accessor: 'col10',
      },
      {
        Header: 'Total Owed',
        accessor: 'col11',
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

  const tipItem = props.allTips.map((tip) => {
    return (
        <li key={`${tip.tip_date}-${tip.emp_name}`}>
            <p>{tip.tip_date}</p>
            <p>{tip.bottles}</p>
            <p>{tip.tips}</p>
            <p>{tip.emp_name}</p> 
        </li>
    )
})

  return (
    <div>
      <ul>{tipItem}</ul>
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
    </div>
  )
}

export default FohTipTable