
import React from 'react'
import Burgerdata from '../mock/burgerdata.json'
import Content2 from './Content2'


const Mapping = () => {
  return (
    <div>
        {Burgerdata.data.burgers.map((value,key)=>(
            <Content2 value= {value} key={key}/>

        ))}

    </div>
  )
}

export default Mapping