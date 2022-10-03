import React from 'react'
import styled from 'styled-components'
import Burgerdata from '../mock/burgerdata.json'

console.log("Burgerdata:",Burgerdata)

const Fmap = styled.div`
width: 100%;
height: 300px;
background: #181511;
border-radius: 0px;
`
const Main= styled.div`
box-sizing: border-box;
border: 1px solid #4B4136;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
img{
  width: 305px;
height: 190px;
border-radius: 0px
}
p{
  margin-top: 4rem;
  margin-left: 6rem;
    width: 305px;
height: 190px;
color :white
}
@media (max-width: 768px) {
  box-sizing: border-box;
border: 1px solid #4B4136;
display: flex;
align-items: center;
flex-direction: column;
img{
  width: 120px;
height: 120px;
border-radius: 0px

}
p{
  margin-top: 4rem;
    width: 40px;
height: 50px;
color :white
}
  
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