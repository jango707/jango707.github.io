import React, { Component } from 'react';
import { Grid, Cell,Drawer, Layout, Navigation } from 'react-mdl';
import Education from './education';
import Studies from './studies';
import Interests from './interests';
import uwc from '../assets/uwc.gif';
import man from '../assets/man.jpg';
import pc from '../assets/pc.jpg';
import brain from '../assets/brain.png';
import book from '../assets/book.jfif'
import mario from '../assets/mario.jpg';
import travel from '../assets/travel.jpg';
import food from '../assets/food.jpg';



class About extends Component{
    render(){
        return(
            <div className="about">            
                <Grid>
                    <Cell className="about-cell" col={1}>
                    <nav className="about-nav-bar">
                        <div >
                            <ul className="navbar-nav" >
                                <li className="nav-item">
                                <a  href="#education">Education</a>
                                </li>
                                <li className="nav-item">
                                <a  href="#studies">Studies</a>
                                </li>
                                <li className="nav-item">
                                <a  href="#interests">Interests</a>
                                </li>
                            </ul>               
                        </div>
                    </nav>                   
                
                    </Cell>
            
                    <Cell className="about-content" col={11}> 
                    <div id="education">
                        <h1 style={{textAlign:'center'}}>Education</h1>
                            <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="Armand Hammer United World College of the American West (UWC USA)"
                            schoolDescription="UWC (United World Colleges) is a global education movement that makes education a force to unite people, nations and cultures
                            for peace and a sustainable future."
                            website="https://www.uwc-usa.org/"
                            img={uwc}
                            />

                            <Education
                            startYear={2018}
                            endYear={2022}
                            schoolName="University of Manchester"
                            schoolDescription="Cognitio, sapientia, humanitas"
                            website="https://www.manchester.ac.uk/"
                            img={man}
                             />
                    </div>
                    <div id="studies">
                        <h1 style={{textAlign:'center'}}>Studies</h1>
                            <Studies
                            title="Computer Science"
                            description="“A computer once beat me at chess, but it was no match for me at kick boxing.”"
                            img={pc}
                            />

                            <Studies
                            title="Human Computer Interaction"
                            description="“We must design for the way people behave,
                            not for how we would wish them to behave.”
                            ― Donald A. Norman"
                            img={brain}
                            />
                    </div>
                    <div id="interests">
                        <h1 style={{textAlign:'center'}}>Interests</h1>
                            <Interests
                                title="Reading"
                                description="“Books give a soul to the universe, wings to the mind, flight to the imagination, and life to everything“ -Plato "
                                img={book}
                            />
                            <Interests
                                title="Video Games"
                                description="“A hero need not speak. When he is gone, the world will speak for him.“  -Halo"
                                img={mario}
                            />
                            <Interests
                                title="Travelling"
                                description="“Life is either a daring adventure or nothing at all” -Helen Keller"
                                img={travel}
                            />
                            <Interests
                                title="Food"
                                description="“Food is everything we are. It’s an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It’s inseparable from those from the get-go.” – Anthony Bourdain"
                                img={food}
                            />
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;