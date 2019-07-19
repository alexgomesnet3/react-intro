import React from 'react'
import ReactDom from 'react-dom'
import FirstComponent from './components/FirstComponent'
import { ComponentA, ComponentB } from './components/ExampleWithTwoComponents'



const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <FirstComponent value="Hello, Good Morning!" 
                        anything="How old are you, please?"
                        ageNumber={2**5}/>
        <ComponentA sayA="And you Sir. How old are you?"/>
        <ComponentB sayB="I've 50 years old"/>
    </div>
, elemento)
