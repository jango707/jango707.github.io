import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid className="about-content-right">
                <Cell style={{paddingLeft:'30px'}} col={6}>
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p><a href={this.props.website}>{this.props.website}</a>

                </Cell>
                <Cell col={4}>
                    <img src={this.props.img} alt="img"></img>
                </Cell>
                <Cell col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                
            </Grid>
        )
    }
}

export default Education;