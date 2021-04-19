import React from 'react'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import './InfoBox.css'

function InfoBox() {
    return (
        <section className="bg">
            <div className="infobox container flex">
                <div className="info">
                    <h1>Extreme Cloud Hosting</h1>
                    <p>Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                    <button className="btn--black">Read More</button>
                </div>
                <div className="infobox--icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPCQ3w2LBrFehdX5Leohh2L0rezv7g_n8Q&usqp=CAU"/>
                </div>
                
            </div>
        </section>
    )
}

export default InfoBox
