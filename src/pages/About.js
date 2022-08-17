import React from 'react'
import Picture from '../Components/Images/Picture.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <img src={Picture}
                alt="picture"/>
            <h1 className='about-me'>About Me:</h1>
            <h1 className='name'>Folasade Oyerinde</h1>
            <p>I create solutions using Information Technology and Service Management.</p><br/>
            <h3>Contact:</h3>

            <li>
                <b>Email Adress</b>: landmarksocialz@gmail.com</li>
            <li>
                <b>Contact</b>:0632885544</li><br/>


            <h3>Skills:</h3>

            <li>Managed Services</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>React</li>


        </div>
    )
}

export default About
