import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <section className="footer">
            <div className="footer container flex">
                <div>
                    <h2>Loruk.</h2>
                    <span>@CopyRight 2000</span>
                </div>
                <ul className="footer--nav">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Documentation</li>
                </ul>
                <div className="footer--icons">
                    <a><FacebookIcon /></a>
                    <a><TwitterIcon /></a>
                    <a><InstagramIcon /></a>
                    <a><LinkedInIcon /></a>
                </div>

            </div>
        </section>
    )
}

export default Footer
