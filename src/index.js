import React from 'react'
import ReactDom from 'react-dom'
import FirstComponent from './components/FirstComponent'


const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <FirstComponent/>
    </div>
, elemento)
