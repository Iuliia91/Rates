import React, { useState, useContext } from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`
  margin: auto;
  table {
    width: 100%;
  }
  tr {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: auto;
    img {
      width: 2em;
    }
  }
  tr > th {
  }
`

const HEADER_LIST = ['Horse', 'Date', 'Time', 'Winner/time to race']

const Table = (props) => {
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {HEADER_LIST.map((headerName, index) => {
              return <th key={index}>{headerName}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {props.dataList.map((item, indexItem) => {
            console.log(typeof item.date)
            return (
              <tr key={indexItem}>
                <th>
                  {item.horese.name}
                  <img src={item.horese.images} />
                </th>
                <th>{item.date}</th>
                <th>{item.time}</th>
                <th></th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table
