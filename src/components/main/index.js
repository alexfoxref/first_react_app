import React from 'react'
import './style.css'
import {Sidebar, Content} from '../../components'

const Main = () => (
    <div className="main">
        <Sidebar/>
        <Content/>
    </div>
)

export {Main}