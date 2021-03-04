import React from 'react'
import { useTable } from 'react-table'
import './FohTipTable.css'

 
function FohTipTable(props) {

  const createDate = (int) => {
    const year = int.toString().slice(0, 4)
    const month = int.toString().slice(4, 6)
    const day = int.toString().slice(6)
    return month + "-" + day + "-" + year
  }

  const filterArray = (arr) => {
    const startDateArray = arr.filter(tips => tips.tip_date >= props.startDate)
    const endDateArray = startDateArray.filter(tips => tips.tip_date <= props.endDate)
    if (props.selectedEmployee === "") {
      return []  
    }
    const filterEmployeeArray = endDateArray.filter(tips => tips.emp_name === props.selectedEmployee)
    return filterEmployeeArray
  }
   
  const data = filterArray(props.allTips).map(obj => ({
    col1: obj.emp_name,
    col2: createDate(obj.tip_date),
    col3: obj.tips,
    col4: obj.bottles,
    col5: (obj.bottles * 4),
  }))

  React.useMemo(() => data, [])
  
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
        Footer: 'Totals:'
      },
      {
        Header: 'Date',
        accessor: 'col2',
        
      },
      {
        Header: 'Tips',
        accessor: 'col3',
        Footer: info => {
          const total = React.useMemo(
            () =>
              info.rows.reduce((sum, row) => row.values.col3 + sum, 0), 
              [info.rows]
          )
              return <>${total.toFixed(2)}</>
        },
      },
      {
        Header: 'Bottles',
        accessor: 'col4',
        Footer: info => {
          const total = React.useMemo(
            () =>
              info.rows.reduce((sum, row) => row.values.col4 + sum, 0), 
              [info.rows]
          )
              return <>{total}</>
        },
      },
      {
        Header: 'Commssions',
        accessor: 'col5',
        Footer: info => {
          const total = React.useMemo(
            () =>
              info.rows.reduce((sum, row) => row.values.col5 + sum, 0), 
              [info.rows]
          )
              return <>${total.toFixed(2)}</>
        },
      },
      {
        Header: 'Total Owed',
        accessor: row => [row.col3, row.col5].reduce((sum, current) => sum + current, 0).toFixed(2),
        Footer: info => {
          const total = React.useMemo(
            () =>
              info.rows.reduce((sum, row) => row.values.col6 + sum, 0), 
              [info.rows],
          )
              return <>${total.toFixed(2)}</>
        },
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })



  return (
    <div>
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
        <tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td className="foot" {...column.getFooterProps()}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
      </table>
    </div>
  )
}

export default FohTipTable