import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class SportComponent extends Component{
    
    render(){
      
        return(            
            <Grid>
                <Cell className="sport-content" col={8}>
                    <div id={this.props.title}>
                        <h1 style={{textAlign:'center'}}>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </Cell>
                <Cell col={4} className="sport-content">
                    <img src={this.props.img} />
                </Cell>
            </Grid>        
            
        )
    }
}

export default SportComponent;