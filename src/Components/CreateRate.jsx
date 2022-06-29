import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Horses } from '../Layouts/InitialLayout/Components/ListOfHorses'

import DatePicker from 'react-datepicker'

const StyledCreateRate = styled.div`
  position: relative;
  .create_rate {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-evenly;
    margin-bottom: 20vmin;
  }
  p {
    margin: 0;
  }
  .list {
    display: flex;

    margin: 0 auto;
    z-index: 4000;
    margin-top: 80px;
  }
  .list > div {
    display: flex;
    flex-direction: row;
    /*
    display: grid;
    gap: 10px 10px;
    grid-template-columns: 150px 6fr;
    grid-template-row: 150px 2fr;*/
    margin: 20px auto;
  }

  .main {
    text-align: center;
  }
  .options {
    margin: auto;
  }

  img {
    width: 150px;
  }
  .block {
    position: relative;
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

  .create_rate_titel {
    font-family: 'playRegular';
    font-size: 40px;
    font-weight: 500;
    color: rgba(33, 60, 187);
  }

  @media screen and (max-width: 800px) {
    .create_rate {
      flex-direction: column;
      margin: auto;
      text-align: center;
    }
    .list > div {
      display: grid;
      gap: 10px 10px;
      grid-template-columns: 150px 6fr;
      grid-template-row: 150px 2fr;
      margin: 20px auto;
    }
  }
`

const CreateRate = () => {
  const [open, setOpen] = useState(false)
  const [openSortOfDate, setOpenSortOfDate] = useState(false)
  const [openSortOfTime, setOpenSortOfTime] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [time, setTime] = useState(new Date().getTime())
  const handleID = (id) => {
    console.log(id)
    setOpen(false)
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
      <div className="create_rate">
        <div className="block">
          <p onClick={() => setOpen(!open)} className="create_rate_titel">
            Choose horse
          </p>
        </div>

        <div className="date date_picker">
          <p
            onClick={() => {
              setOpenSortOfDate(!openSortOfDate)
            }}
            className="create_rate_titel"
          >
            Selecte date
          </p>
        </div>
        <div className="date date_picker">
          {' '}
          <p
            onClick={() => {
              setOpenSortOfTime(!openSortOfTime)
            }}
            className="create_rate_titel"
          >
            Selecte time
          </p>
        </div>
      </div>
      <div className="options">
        {open && (
          <div className="list">
            <div>
              <Horses handleID={handleID} />
            </div>
          </div>
        )}
        {openSortOfDate && (
          <div className="list">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
            />
          </div>
        )}
        {openSortOfTime && (
          <div className="list">
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
        )}
      </div>
    </StyledCreateRate>
  )
}

export default CreateRate
