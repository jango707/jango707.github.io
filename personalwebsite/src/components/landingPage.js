import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from '../assets/jang.jpeg';


class Landing extends Component{
    render(){
        return(
            <div className='landing-grid' style={{width: '100%', margin: 'auto'}}>
                <Grid >
                    <Cell col={12}>
                        <img
                            
                            src={pic}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>JANGO's WebPage</h1>

                            <hr/>
                            <p>Welcome to my personal page. Check out what I have been up to and who I am. Enjoy!</p>
                            <div className="social-links">
                                {/*LinkedIN */}
                                <a href="https://www.linkedin.com/in/jang-belche/" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github */}
                                <a href="https://github.com/jango707" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Facebook */}
                                <a href="https://www.facebook.com/jangoQuarantino" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                 {/*Devpost */}
                                 <a href="https://devpost.com/jango707?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" rel="noopener noreferrer"  target="_blank">
                                    <i className="fab fa-dev" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>    
                </Grid>               
            </div>
        )
    }
}

export default Landing;