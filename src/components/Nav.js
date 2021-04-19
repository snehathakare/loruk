import React from 'react'
import './nav.css'

function Nav() {
    return (
        <div className="bg">
            <div className="container nav flex">
                <h1>Loruk.</h1>
                <ul className="flex">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Docs</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
