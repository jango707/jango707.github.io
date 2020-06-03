import React, { Component } from 'react';
import profileData from '../profileData.json';
import SportComponent from './sportComponent';
import SportComponentRIGHT from './sportComponentRIGHT';
import basketball from '../assets/basketball.jpg'
import running from '../assets/running.jpg';
import cycling from '../assets/bike.jpeg';
import swim from '../assets/swim.jpg';
import ski from '../assets/skiing.jpg';
import hike from '../assets/hiking.jpg';
import rugby from '../assets/rugby.jpg';
import climb from '../assets/climbing.jpg';

class About extends Component{
    render(){
        return(
            <div className="sport">
                <SportComponent
                 title='Basketball'
                 description={profileData.basketball}
                 img={basketball}

                  />
                <SportComponentRIGHT                 
                 title='Running'
                 description={profileData.running}
                 img={running}
                  
                  />
                  <SportComponent
                 title='Cycling'
                 description={profileData.cycling}
                 img={cycling}
                  
                  />
                  <SportComponentRIGHT
                 title='Swimming'
                 description={profileData.swimming}
                 img={swim}
                  
                  />
                  <SportComponent
                 title='Skiing'
                 description={profileData.skiing}
                 img={ski}
                  
                  />
                  <SportComponentRIGHT
                 title='Hiking'
                 description={profileData.hiking}
                 img={hike}
                  
                  />
                <SportComponent
                 title='Rugby'
                 description={profileData.rugby}
                 img={rugby}
                  
                  />
                  <SportComponentRIGHT
                 title='Climbing'
                 description={profileData.climbing}
                 img={climb}
                  
                  />
            </div>
        )
    }
}

export default About;