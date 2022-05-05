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
    //border-radius: 20px;
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
    // padding-left: 8px;
    //position: absolute;
    right: 0;
    width: 100%;
    //bottom: -1em;
    /* position: absolute;
    padding-top: -10px;
    color: red;*/
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
