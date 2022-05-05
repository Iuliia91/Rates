import React, { useState, useContext } from 'react'
import Server from 'api/server.instance'
import styled from 'styled-components'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
import { ModalContext } from 'HOC/GlobalModalProvider'
import { NavLink } from 'react-router-dom'
import { DIRECTION_TYPE } from 'Route/directionTypes'
import { validateEmail } from '../helpers/emailvalidation'
import server from 'api/server.instance'
const StyledRegistrationHolder = styled.div``

const initialData = {
  userName: '',
  email: '',
  password: '',
}

const Registration = (props) => {
  return (
    <StyledRegistrationHolder>
      <main>
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
            }
            return errorObj
          }}
          onSubmit={(formValues, { resetForm }) => {
            console.log(formValues)
            server
              .post('/user', {
                email: formValues.email,
                password: formValues.password,
                userName: formValues.userName,
              })
              .then((response) => {
                console.log(response.data.accessToken)
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
            <button type="submit">Registrated</button>
          </Form>
        </Formik>
      </main>
    </StyledRegistrationHolder>
  )
}

export default Registration
