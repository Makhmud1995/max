
import React from 'react'
import Burgerdata from '../mock/burgerdata.json'
import Content2 from './Content2'
import styled from 'styled-components'

const Wrap = styled.div`
width: 100%;
height: 300px;
  display: grid;
grid-template-columns: repeat(3, minmax(200px, 1fr));
@media (max-width: 768px) {
  width: 100%;
  display: grid;
grid-template-columns: repeat(2, minmax(100px, 1fr));
  
}
`



const Mapping = () => {
  return (
    <Wrap>
        {Burgerdata.data.burgers.map((value,key)=>(
            <Content2 value= {value} key={key}/>

        ))}

    </Wrap>
  )
}

export default Mapping