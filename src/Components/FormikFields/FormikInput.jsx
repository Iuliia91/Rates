import React, { useContext } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

const StyledFormikInput = styled.div`
  input {
    outline: none;
    border: none;
    border: 1px solid;
    width: 80%;
    border-color: ${(props) => (props.error ? 'red' : 'white')};
    padding: 15px 60px;
    margin: 10px;

    ::placeholder {
      color: #ddd;
      opacity: 1;
    }
  }
  input:hover {
    background: rgba(33, 10, 50, 0.2);
  }

  &:focus-within {
    border-color: green;
  }
  .errorMessagerHolder {
    color: #d93025;
    font-size: 20px;
    right: 0;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 100%;
      padding: 1em 2em;
    }
  }
`

const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledFormikInput error={meta.error && meta.touched}>
      <input
        className={props.className}
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={props.name}
        type={props.type}
        value={field.value}
        inputcolor="blue"
        placeholder={props.placeholder}
      />
      {meta.error && meta.touched && (
        <div className="errorMessagerHolder">{meta.error}</div>
      )}
    </StyledFormikInput>
  )
}

export default FormikInput
