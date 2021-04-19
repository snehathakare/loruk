import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import BackupIcon from '@material-ui/icons/Backup';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import './stats.css'

function Stats() {
    return (
        <section className="stats">
            <div className="container flex">
            <div className="stats--heading">
                <h3>Experimenting with CSS transition to give the section a wave effect</h3>
            </div>
            <div className="stats--icons flex">
                <div className="icon">
                   <i><StorageIcon /></i> 
                    <h3>1034556</h3>
                    <h1>Flex Box</h1>
                </div>
                <div className="icon">
                    <BackupIcon />
                    <h3>5600 TB</h3>
                    <h1>Grid layout</h1>
                </div>
                <div className="icon">
                    <AccountTreeIcon />
                    <h3>7000</h3>
                    <h1>Queries</h1>
                </div> 
            </div> 
            <div className="stats--cards flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGURGt2Z-dbWXEjrYyu8nw4DiXO8OZxMz7VQ&usqp=CAU" />
                <div className="stats--card--stack">
                    <div className="card">Easy to use, cross platform CLI</div>
                    <div className="card">Deploy in seconds</div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Stats
