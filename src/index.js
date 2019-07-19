import React from 'react'
import ReactDom from 'react-dom'
import FirstComponent from './components/FirstComponent'


const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <FirstComponent value="Hello, Good Morning!" 
                        anything="How old are you, please?"
                        ageNumber={2**5}/>
    </div>
, elemento)
