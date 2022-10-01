import React from 'react'
import styled from 'styled-components'
import img from "../asset/IMAGE.svg"
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';



const First =styled.div`
width: 100%;
height: 602px;
display: flex;
justify-content: center;
flex-direction: column;
background-image: url(${img});
align-items: center;

p{
    width: 289px;
height: 22px;
left: calc(50% - 289px/2 + 0.5px);
top: calc(50% - 22px/2 - 140px);

font-family: 'Old Standard TT';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;

color: #FFAE2B;
}
h1{

    width: 869px;
height: 160px;
left: calc(50% - 869px/2 + 0.5px);
top: calc(50% - 160px/2 - 34px);

font-family: 'Old Standard TT';
font-style: normal;
font-weight: 400;
font-size: 70px;
line-height: 80px;
/* or 114% */

text-align: center;
letter-spacing: 1px;

color: #FFFFFF;
}
button{
    margin-top:35px;
    width: 143px;
    height: 50px;
border: none;
cursor: pointer;

background: #FFAE2B;
border-radius: 0px
}
@media (max-width: 768px) {
width: 100%;
flex-direction: column;
h1{
    width: 400px;
height: 60px;

font-family: 'Old Standard TT';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 70px;
/* or 114% */

text-align: center;
letter-spacing: 1px;

color: #FFFFFF;
}
p{
    margin-top: -40px;
    width: 289px;
height: 22px;
left: calc(50% - 289px/2 + 0.5px);
top: calc(50% - 22px/2 - 140px);

font-family: 'Old Standard TT';
font-weight: 400;
font-size: 12px;
line-height: 22px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;
color: #FFAE2B;

}
button{
margin-top: 10rem;
    width: 143px;
    height: 50px;
border: none;
cursor: pointer;

background: #FFAE2B;
border-radius: 0px
}
}

`

const Content = () => {
  return (
   <>
   <First>

<p>WE ARE Atelier Creative Agency</p>
<Fade bottom>
          <h1>Unique UI Kit Template for Creative Agencies</h1>
        </Fade>
        <Flash>
<button>VIEW LAYOUTS</button>
        </Flash>

   </First>
   
   
   
   </>
  )
}

export default Content