import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width: 100%;
height: 400px;
background: #181511;
border-radius: 0px;
display: flex;
flex-direction: column;
align-items: center;
p{
    margin-top: 120px;
    width: 154px;
height: 22px;
left: calc(50% - 154px/2);
top: 0px;

font-family: 'Old Standard TT';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* identical to box height, or 183% */

text-align: center;
letter-spacing: 2px;
text-transform: uppercase;

color: #ACA592;
}
h1{
    width: 412px;
height: 70px;
left: calc(50% - 412px/2);
top: 32px;

font-family: 'Old Standard TT';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 70px;
/* identical to box height, or 117% */

text-align: center;

color: #FFAE2B;
}
`

const ContextT = () => {
  return (
    <Div>
        <p>Our Core Layouts</p>
<h1>Template Pages</h1>
    </Div>
  )
}

export default ContextT