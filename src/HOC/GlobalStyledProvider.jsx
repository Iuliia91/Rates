import React from 'react'
import { createGlobalStyle } from 'styled-components'
import playRegular from '../assets/fonts/Play-Regular.ttf'
const GlobalStyled = createGlobalStyle`
body {
  margin: 0 auto;
  padding:0;
  max-width:1300px;
  

}
*{
  box-sizing: border-box;
 
}
@font-face{
  font-family:"playRegular";
  src:url(${playRegular})
}

`
const GlobalStyledProvide = () => {
  return (
    <React.Fragment>
      <GlobalStyled />
    </React.Fragment>
  )
}

export default GlobalStyledProvide
