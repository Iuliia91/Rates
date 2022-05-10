import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import logo from 'assets/images/6420.png'
const StyledAboutUser = styled.div``

const StyledAvatar = styled.div``

const Avatar = () => {
  const [img, setImg] = useState(null)
  const [avatar, setAvatar] = useState(null)
  console.log(avatar)
  return (
    <StyledAvatar>
      <div>
        {avatar ? (
          <img src={`${avatar}`} alt="foto" />
        ) : (
          <img src={`${logo}`} />
        )}
      </div>
      <input type="file" onChange={(e) => setImg(e.target.files[0].name)} />
      <button onClick={() => setAvatar(img)}>Change</button>
    </StyledAvatar>
  )
}

const AboutUser = () => {
  const [foto, setFoto] = useState('')
  const user = useSelector((state) => state.userReducer)
  console.log(foto)
  return (
    <StyledAboutUser>
      <Avatar />
      <div>{user.userName}</div>
      <div>{user.userEmail}</div>
      <input type="file" onChange={() => setFoto(value)} value={foto} />
    </StyledAboutUser>
  )
}

export default AboutUser
