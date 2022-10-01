import React from 'react'
import styled from 'styled-components'
import Burgerdata from '../mock/burgerdata.json'

console.log("Burgerdata:",Burgerdata)

const Fmap = styled.div`
width: 100%;
display: grid;
grid-template-rows:auto;
background: #181511;
border-radius: 0px;
`
const Main= styled.div`
box-sizing: border-box;
width: 387px;
height: 315px;
border: 1px solid #4B4136;
img{

    display: grid;
    grid-template-rows: auto;
    width: 305px;
height: 190px;
background: url(.jpg);
filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.6));
border-radius: 0px;
padding: 0;
}
p{
    width: 305px;
height: 190px;
}

`

const Content2 = ({value}) => {
  return (
<Fmap>
    <Main>
<img src={value.lotteria.banner} alt='banner'></img>
<p>{value.lotteria.name}</p>
</Main>
</Fmap>
  )
}

export default Content2