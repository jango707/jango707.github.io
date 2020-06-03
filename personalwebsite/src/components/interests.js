import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Interests extends Component {
    render() {
        return(
            <Grid className="about-content-right">
                <Cell style={{paddingLeft:'6    0px'}} col={6}>
                <h4 style={{marginTop:'0px'}}>{this.props.title}</h4>
                <p>{this.props.description}</p>
                    
                </Cell>
                <Cell col={1}></Cell>
                <Cell col={4}>
                    <img src={this.props.img} alt="img" />
                    
                </Cell>
            </Grid>
        )
    }
}

export default Interests;