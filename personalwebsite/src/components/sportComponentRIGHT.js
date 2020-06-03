import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class SportComponent extends Component{
    
    render(){
      
        return(            
            <Grid>
                <Cell col={4} className="sport-content">
                    <img src={this.props.img} alt="img" />
                </Cell>
                <Cell className="sport-content" col={8}>
                    <div id={this.props.title}>
                        <h1 style={{textAlign:'center'}}>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </Cell>
                
            </Grid>        
            
        )
    }
}

export default SportComponent;