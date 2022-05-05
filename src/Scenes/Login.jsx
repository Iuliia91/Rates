import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledLogin = styled.div`
  background-color: white;
  display: block;
  height: 100px;
`
const initialData = {
  userName: '',
  password: '',
}

const Login = () => {
  return (
    <StyledLogin>
      <header>
        <p>Welcome back to HorsRate</p>
        <span>X</span>
      </header>
      <main>
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
            console.log(formValues)

            server
              .post('/login', {
                password: formValues.password,
                userName: formValues.userName,
              })
              .then((response) => {
                dispatch(
                  userLoggedIn({
                    userName: response.data.user.userName,
                    password: response.data.user.password,
                    isLoggedIn: response.data.accessToken,
                  })
                )
              })
              .then(() => onClose(false))
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
      </main>
    </StyledLogin>
  )
}

export default Login
