import React from 'react'
import './showcase.css'

function Showcase() {
    return (
        <section className="showcase bg">
            <div className="flex container showcase--content">
                <div className="showcase--text">
                    <h2>Responsive Web Design</h2>
                    <p>
                    This site consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries. 
                    As you switch from laptop to iPad to mobile screen, the website should automatically switch to accommodate for resolution,
                    image size and scripting abilities
                    </p>
                    <button className="btn--primary-outline">Read more</button>
                </div>
                <div className="card">
                    <form className="showcase--form">
                        <h3>Request Form</h3>
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button className="btn--primary" type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="showcase--effect"></div>
        </section>
    )
}

export default Showcase
