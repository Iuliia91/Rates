import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Horses } from '../Layouts/InitialLayout/Components/ListOfHorses'

import DatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import { userCreateRates } from '../store/actions/userCreateRates'

const StyledCreateRate = styled.div`
  position: relative;
  .create_rate {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;

    padding-bottom: 30px;
    margin: 0 auto;
  }
  p {
    margin: 0;
  }
  .list {
    display: flex;
    margin: 0 auto;
    z-index: 4000;
  }
  .list_options {
    display: block;
    text-align: center;
    offset-top: 80px;
  }
  .list > div {
    display: flex;
    flex-direction: row;
    margin: 20px auto;
  }

  .main {
    text-align: center;
  }

  img {
    width: 150px;
  }
  .block {
    position: relative;
  }
  .date_picker {
    text-align: center;
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
  date .time_pick {
    margin-bottom: 8vmin;
  }
  .create_rate_titel {
    font-family: 'playRegular';
    font-size: 40px;
    font-weight: 500;
    color: rgba(33, 60, 187);
    padding: 10px 0;
  }

  .selected_options {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto 7vmax;
  }
  .selected_options_titel {
    font-size: 2em;
    font-family: playRegular;
  }

  .horse {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .date {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vmax;
    font-size: 1.8em;
    white-space: nowrap;
  }
  .time {
    position: absolute;
    top: 0;
    right: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vmax;
    font-size: 1.8em;
    white-space: nowrap;
  }

  .horse > p {
    font-size: 2em;
    white-space: nowrap;
  }

  .selected_img {
    width: 6vmax;
    height: 6vmax;
  }
  .button {
    text-align: center;
  }
  .button > button {
    padding: 16px 50px;
    font-size: 20px;
    background-color: #5ece8b;
    color: white;
    border: none;
  }
  .react-datepicker__time-container {
    width: 15em;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 100%;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    overflow-y: none;
    overflow-x: none;
  }
  ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    font-size: 20px;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    margin: auto;
  }

  @media screen and (max-width: 1190px) {
    .create_rate {
      width: 100%;
    }
    .selected_options {
      width: 100%;
    }

    .horse {
      width: 33%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media screen and (max-width: 870px) {
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

    .selected_options {
      display: flex;
      flex-direction: column;
    }
    .date,
    .time,
    .horse {
      position: relative;
    }
    .horse {
      margin: 0;
      text-align: center;
    }
    .time {
      right: 0;
    }
  }
`

const CreateRate = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [openSortOfDate, setOpenSortOfDate] = useState(false)
  const [openSortOfTime, setOpenSortOfTime] = useState(false)
  const [chooseHorse, setChooseHorse] = useState('')
  const [startDate, setStartDate] = useState()
  const [time, setTime] = useState()
  const handleID = (item) => {
    setChooseHorse(item)
    console.log(item)
    setOpen(false)
  }

  const filterPassedTime = (time) => {
    const currentDate = new Date()

    const selectedDate = new Date(time)
    if (startDate) {
      if (startDate.getDate() !== currentDate.getDate()) {
        return selectedDate.getTime()
      } else {
        return selectedDate.getTime() > startDate.getTime()
      }
    } else {
      return selectedDate.getTime() > currentDate.getTime()
    }
  }

  const handleAddRate = () => {
    dispatch(
      userCreateRates({ horese: chooseHorse, date: startDate, time: time })
    )
    setStartDate('')
    setChooseHorse('')
    setTime('')
  }
  return (
    <StyledCreateRate>
      <div className="create_rate">
        <div className="block">
          <p onClick={() => setOpen(!open)} className="create_rate_titel">
            Choose horse
          </p>
        </div>

        <div className=" date_picker">
          <p
            onClick={() => {
              setOpenSortOfDate(!openSortOfDate)
            }}
            className="create_rate_titel"
          >
            Selecte date
          </p>
        </div>
        <div className=" date_picker">
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

      <div className="selected_options">
        {chooseHorse && (
          <div
            className="selected_options horse"
            onClick={() => setOpen(!open)}
          >
            {' '}
            <p>{chooseHorse.name}</p>
            <img
              src={chooseHorse.images}
              alt="horse"
              className="selected_options_titel selected_img"
            />
          </div>
        )}
        {startDate && (
          <>
            {' '}
            <div
              className="selected_options_titel date"
              onClick={() => setOpenSortOfDate(!openSortOfDate)}
            >
              {' '}
              <p>{startDate.toDateString()}</p>
            </div>
          </>
        )}
        {time && (
          <div
            className="selected_options_titel time"
            onClick={() => setOpenSortOfTime(!openSortOfTime)}
          >
            {' '}
            <p>
              {time.getHours()}:{time.getMinutes()}
            </p>
          </div>
        )}
      </div>
      {time && startDate && chooseHorse && (
        <div className="button add_rate">
          <button onClick={() => handleAddRate()}>CREATE RATE</button>
        </div>
      )}
      <div className="options">
        {open && (
          <div className="list">
            <div>
              <Horses handleID={handleID} />
            </div>
          </div>
        )}
        {openSortOfDate && (
          <div className="list_options">
            <DatePicker
              selected={new Date()}
              onChange={(date) => {
                setStartDate(date), setOpenSortOfDate(false)
              }}
              minDate={new Date()}
            />
          </div>
        )}
        {openSortOfTime && (
          <div className="list_options time_pick">
            <DatePicker
              selected={time}
              onChange={(time) => {
                setTime(time), setOpenSortOfTime(false)
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              minDate={new Date()}
              filterTime={filterPassedTime}
              dateFormat="h:mm aa"
            />
          </div>
        )}
      </div>
    </StyledCreateRate>
  )
}

export default CreateRate
