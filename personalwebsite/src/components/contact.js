import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import pic from '../assets/bhai.jpg'

class Contacts extends Component{
    render(){
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Jang Belche</h2>
                       <img src={pic} alt="avatar" style={{height: '400px'}} />
                       <p style={{ width: ' 75%', margin:'auto', paddingTop: '1em'}}>
                       "Be yourself. Everyone else is already taken."
                       </p>
                   </Cell>
                   <Cell col={6}>                       
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">                      
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        jang.belche@student.manchester.ac.uk
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', top: '50%'}}>
                                        <i className="fa fa-facebook-square" aria-hidden="true"/>
                                        <a style={{paddingLeft: '2rem'}} href="https://www.facebook.com/jangoQuarantino">facebook.com/jangoQuarantino</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', top: '50%'}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                        <a style={{paddingLeft: '2rem'}} href="https://github.com/jango707">github.com/jango707</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', top: '50%'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a style={{paddingLeft: '2rem'}} href="https://www.linkedin.com/in/jang-belche/">linkedin.com/in/jang-belche/</a>
                                    </ListItemContent>
                                </ListItem>
                                

                            </List>
                        </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Contacts;