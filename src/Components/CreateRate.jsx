import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Horses } from '../Layouts/InitialLayout/Components/ListOfHorses'

import DatePicker from 'react-datepicker'

const StyledCreateRate = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-evenly;
  p {
    margin: 0;
  }
  .list {
    display: grid;
    gap: 10px 10px;
    grid-template-columns: 300px 6fr;
    grid-template-row: 200px 2fr;
  }

  img {
    width: 150px;
  }

  date:hover {
    background: red;
  }
  .date_picker > input {
    outline: 0;
    outline-offset: 0;
  }
  .react-datepicker__time-container {
    width: 10em;
  }
  .react-datepicker__time-box {
    width: 10em;
  }
  .react-datepicker__input-container > input {
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    text-align: center;
    padding: 10px 0 5px;
    margin-top: 30px;
  }
  .react-datepicker__input-container > input:hover {
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .react-datepicker__time-box
    ul.react-datepicker__time-list
    ::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    background-color: #143861;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #843465;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #253861;
  }
`

const CreateRate = () => {
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [time, setTime] = useState(new Date().getTime())
  const handleID = (id) => {
    console.log(id)
  }

  const filterPassedTime = (time) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    console.log(startDate.getTime())

    if (startDate.getDate() !== currentDate.getDate()) {
      return selectedDate.getTime()
    } else {
      return selectedDate.getTime() > startDate.getTime()
    }
  }

  return (
    <StyledCreateRate>
      <p onClick={() => setOpen(!open)}>Choose horse</p>
      {open && (
        <div className="list">
          <Horses handleID={handleID} />
        </div>
      )}

      <div className="date date_picker">
        <p onClick={() => {}}>Selecte date</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
        />
      </div>
      <div className="date date_picker">
        {' '}
        <p onClick={() => {}}>Selecte time</p>
        <DatePicker
          selected={time}
          onChange={(date) => setTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          filterTime={filterPassedTime}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </div>
    </StyledCreateRate>
  )
}

export default CreateRate
