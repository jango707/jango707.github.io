import React, { Component } from 'react';
import profileData from '../profileData.json';
import SportComponent from './sportComponent';
import SportComponentRIGHT from './sportComponentRIGHT';
import music from '../assets/music.jpg';
import skybox from '../assets/skybox.png';
import gamedev from '../assets/game.png';


class Hobbies extends Component{
    render(){
        return(
            <div className="hobbies">
                <SportComponentRIGHT
                 title='Music'
                 description={profileData.music}      
                 img={music}           

                  />

                <SportComponent               
                 title='Skybox'
                 description={profileData.skybox}
                 img={skybox}       

                  />

                <SportComponentRIGHT
                 title='Game-Development'
                 description={profileData.gamedev}  
                 img={gamedev}                     

                  />
            </div>
        )
    }
}

export default Hobbies;