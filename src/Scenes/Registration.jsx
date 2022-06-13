import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
import { validateEmail } from '../helpers/emailvalidation'
import { Link, useNavigate } from 'react-router-dom'
import { userRegistration } from 'store/actions/userAction'
import axios from 'axios'
const StyledRegistrationHolder = styled.div`
  background: rgb(239, 239, 239);

  width: 70%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  div {
    span {
      position: absolute;
      right: 0;
      padding: 20px;
      color: red;
      font-size: 22px;
    }

    p {
      text-align: center;
      padding-top: 1em;
      font-family: playRegular;
      font-size: 30px;
      font-weight: bold;
      color: blue;
    }
  }
  form {
    padding: 0 4em;
    div {
      text-align: center;
    }
    button {
      margin: 1em 0;
      padding-bottom: 20px;
      background: red;
      padding: 20px;
      border: none;
      color: white;
      font-size: 24px;
      border-radius: 10px;
      font-family: playRegular;
    }

    button:hover {
      background: green;
    }
  }
`

const initialData = {
  userName: 'anna',
  email: 'annaprusakova@gmail.com',
  password: 'Zaq123Xsw456',
}

const Registration = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <StyledRegistrationHolder>
      <div>
        <span onClick={() => onClose(false)}>X</span>
      </div>
      <div>
        <p>Create your account</p>
      </div>
      <Formik
        initialValues={initialData}
        validate={(formValues) => {
          const errorObj = {}
          let isValid = true

          if (!formValues.userName) {
            isValid = false
            errorObj.userName = 'Fill the fields'
          } else if (!validateEmail(formValues.email)) {
            errorObj.email = 'Write the correct email'
          } else if (!formValues.password) {
            isValid = false
            errorObj.password = 'Fill the fields'
          }
          return errorObj
        }}
        onSubmit={(formValues, { resetForm }) => {
          const obj = { ...formValues }
          dispatch(userRegistration(obj)).then((response) => {
            if (response.payload !== undefined) {
              onClose(false)
              return navigate('/myprofil')
            }
          })
        }}
      >
        <Form>
          <div>
            <FormikInput
              name="userName"
              type="text"
              placeholder="Write your name"
            />
          </div>
          <div className="input">
            <FormikInput name="password" type="text" placeholder="password" />
          </div>
          <div className="input">
            <FormikInput name="email" type="text" placeholder="Your email" />
          </div>
          <div>
            <button type="submit">Registrated</button>
          </div>
        </Form>
      </Formik>
    </StyledRegistrationHolder>
  )
}

export default Registration
