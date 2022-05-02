import React, { useState } from 'react'
import Server from 'api/server.instance'
import styled from 'styled-components'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'

const StyledRegistrationHolder = styled.div``

const initialData = {
  userName: '',
  email: '',
  password: '',
}

const Registration = () => {
  function validateEmail(email) {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(String(email).toLowerCase())
  }

  return (
    <StyledRegistrationHolder>
      <header>
        <p>Registration</p>
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
            } else if (!validateEmail(formValues.email)) {
              errorObj.email = 'Write the correct email'
            }
            return errorObj
          }}
          onSubmit={(formValues, { resetForm }) => {
            console.log(formValues)
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
            <buttom type="submit">Registrated</buttom>
          </Form>
        </Formik>
      </main>
    </StyledRegistrationHolder>
  )
}

export default Registration
