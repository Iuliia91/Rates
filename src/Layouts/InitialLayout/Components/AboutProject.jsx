import React from 'react'
import styled from 'styled-components'
import shaped from 'assets/images/shaper.jpg'
import emblema from 'assets/images/44996.jpg'
const StyledAboutProject = styled.div`
  
  width: 100%;
 
  .shaped {
    background: black;

    float: right;
    shape-outside: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    shape-margin: 30px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
 
    .color:after{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0; left: 0;
      background-color: rgba(0,0,0,0.3);
    }
    img {
      position:relative:
    
      width: 15em;
      height: 15em;
    }
  }
 

 }
  .conteent {
   // width: 50%;
  }
`

const AboutProject = () => {
  return (
    <StyledAboutProject>
      <div className="content">
        <div className="shaped">
          <div className="color">
            <img src={shaped} />
          </div>
        </div>

        <div className="conteent">
          <h1>About company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis aliquam maiores corporis libero labore alias dicta quidem
            animi, assumenda provident iure dolor iste unde adipisci! Odio,
            debitis quas atque quidem eveniet voluptas facilis, quibusdam amet,
            alias sed adipisci similique consequatur nisi. At optio non officia.
            Ullam eveniet quis at laudantium facere officia adipisci ipsum
            magni, deserunt voluptatem dolorum autem?
          </p>
          <h1>Our mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veritatis aliquam maiores corporis libero labore alias dicta quidem
            animi, assumenda provident iure dolor iste unde adipisci! Odio,
            debitis quas atque quidem eveniet voluptas facilis, quibusdam amet,
            alias sed adipisci similique consequatur nisi. At optio non officia.
            Ullam eveniet quis at laudantium facere officia adipisci ipsum
            magni, deserunt voluptatem dolorum autem?
          </p>
        </div>
      </div>
    </StyledAboutProject>
  )
}

export default AboutProject
