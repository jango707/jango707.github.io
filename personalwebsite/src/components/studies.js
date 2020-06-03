import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Studies extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <img src={this.props.img} alt="img"></img>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                    
                </Cell>
            </Grid>
        )
    }
}

export default Studies;