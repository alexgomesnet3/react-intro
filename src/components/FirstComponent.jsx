import React from 'react'

// Abaixo declarando o Meu Primeiro Componente com uma função nominal

export default (props) =>
    <div>

      <h1>{ props.value }</h1>
      <h1>Hi, good morning Sir.</h1>
      <h1>{props.anything}</h1>
      <h1>{props.ageNumber}</h1>
    </div>
