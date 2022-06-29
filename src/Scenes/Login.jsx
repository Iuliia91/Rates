import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
import axios from 'axios'
import { userLoggedIn } from 'store/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'

const StyledLogin = styled.div`

background: rgb(239, 239, 239);

width: 70%;
border-radius: 10px;
overflow: hidden;
position: relative;
div{
 
   span {
    position: absolute;
    right: 0;
    padding: 20px;
    color: red;
    font-size: 22px;
   
  }
}
  p {
      text-align: center;
      padding-top: 2em;
      font-family: playRegular;
      font-size: 30px;
      font-weight: bold;
      color: blue;
    }

  form {
    padding: 1em 5em 2em;
    div {
      text-align: center;
    }
    button {
      margin-top: 1em;

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

    @media screen and (max-width:800px){
      width: 100%;

    }
`

const initialData = {
  userName: 'anna',
  email: 'annaprusakova@gmail.com',
  password: 'Zaq123Xsw456',
}

const Login = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <StyledLogin>
      <div>
        <span onClick={() => onClose(false)}>X</span>
      </div>
      <div>
        <p>Welcome back to HorsRate</p>
      </div>

      <Formik
        initialValues={initialData}
        validate={(formValues) => {
          const errorObj = {}
          let isValid = true

          if (!formValues.userName) {
            isValid = false
            errorObj.userName = 'Fill the fields'
          } else if (!formValues.password) {
            isValid = false
            errorObj.password = 'Fill the fields'
          }
          return errorObj
        }}
        onSubmit={(formValues, { resetForm }) => {
          const obj = { ...formValues }
          dispatch(userLoggedIn(obj))
            .then((response) => {
              if (response.payload) {
                onClose(false)
                return navigate('/myprofil')
              }
            })
            .catch((e) => {
              alert(e.response.data.message)
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
            <FormikInput name="email" type="text" placeholder="email" />
          </div>
          <div>
            <button type="submit">Sing In</button>
          </div>
        </Form>
      </Formik>
    </StyledLogin>
  )
}

export default Login
