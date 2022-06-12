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
`
const login = async (email, password, userName) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
      userName,
    })
    return response
  } catch (e) {
    console.log(e)
    alert(e.response.data.message)
  }
}

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
          login(formValues.email, formValues.password, formValues.userName)
            .then((response) => {
              console.log(response.data)
              dispatch(
                userLoggedIn({
                  token: response.data.token,
                  userName: response.data.user.userName,
                  email: response.data.user.email,
                  isLoggedIn: true,
                })
              )
              if (response.data.token) {
                return navigate('/myprofil')
              }
            })
            .then(() => onClose(false))
            .catch((error) => console.log(error))
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
