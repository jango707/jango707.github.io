import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemAction';
import PropTypes from 'prop-types';


class Projects extends Component{

    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    componentDidMount() {
        this.props.getItems();
    }    
    buttonsgit(git){
        if(git){
            return(
            <a href={git} target="_blank"><Button colored style={{ color:'#fff'}} ripple >GitHub</Button></a>   
            )
        }
    }
    buttonsdemo(demo){
        if(demo){
            return(
            <a href={demo} target="_blank"><Button colored style={{color:'#fff'}} ripple>Demo</Button></a>
            )
        }
    }
    buttonsdev(dev){
        if(dev){
            return(
            <a href={dev} target="_blank"><Button colored style={{color:'#fff'}} ripple>DevPost</Button></a>
            )
        }
    }
    ProjectComponent(title, description, category, projectName, img, git, demo, dev){
       
        if(title === category){
            return(
                <div key={title} >
                <Card shadow={5} style={{width:'360px', margin:'60px', borderRadius:'30px', background:'#eee'}}>
                    <CardTitle  style={{paddingLeft:'60px',paddingTop:'180px', height:'200px',borderStyle:'solid', borderWidth:'1px', borderColor:'white', background: `url(${img}) center / cover`,fontFamily: 'Oxygen', fontSize: '25px', fontWeight:'bold', borderRadius: '30px', color:'black'}}> </CardTitle>
                    <CardText style={{color:'black'}}><h4>{projectName}</h4>{description}</CardText>
                    <CardActions style={{backgroundColor:'grey'}} border>
                    {this.buttonsgit(git)}
                    {this.buttonsdemo(demo)}
                    {this.buttonsdev(dev)}
                        
                    </CardActions>
                    <CardMenu style={{color: 'orange'}}>
                        <IconButton name="star" />
                    </CardMenu>
                </Card>                                
            </div>
            )
        }
        
       
    }
    
    toggleCategories(items){
        if (this.state.activeTab === 0) {
                return(
                    <div className= "project-content"><h1>REACT</h1>
                    <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo}) => (
                        
                        <div key={_id}>{this.ProjectComponent(title, description, "react", projectName, img, git, demo)}</div>
                    ))}</div>
                    </div>
                )
            
           
        }else if(this.state.activeTab === 1){
            return(
                <div className= "project-content"><h1>UNITY</h1>
                <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo }) => (
                    
                    <div key={_id}>{this.ProjectComponent(title, description, "unity", projectName, img, git, demo)}</div>
                ))}</div>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className= "project-content"><h1>JAVA</h1>
                <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo }) => (
                    
                    <div key={_id}>{this.ProjectComponent(title, description, "java", projectName, img, git, demo)}</div>
                ))}</div>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div className= "project-content"><h1>PYTHON</h1>
                <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo }) => (
                    
                    <div key={_id}>{this.ProjectComponent(title, description, "python", projectName, img, git, demo)}</div>
                ))}</div>
                </div>
            )
        }else if(this.state.activeTab === 4){
            return(
                <div className= "project-content"><h1>WEB DEVELOPMENT</h1>
                <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo }) => (
                    
                    <div key={_id}>{this.ProjectComponent(title, description, "web", projectName, img, git, demo)}</div>
                ))}</div>
                </div>
            )
        }else if(this.state.activeTab === 5){
            return(
                <div className= "project-content"><h1>HACKATHONS</h1>
                <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo, dev }) => (
                    
                    <div key={_id}>{this.ProjectComponent(title, description, "hackathon", projectName, img, git, demo, dev)}</div>
                ))}</div>
                </div>
            )
        }else if(this.state.activeTab === 6){
            return(
                <div className= "project-content"><h1>GAME DEVELOPMENT</h1>
                <div className="projects-grid">{items.map(({ title, description, projectName, img, _id, git, demo }) => (
                    
                    <div key={_id}>{this.ProjectComponent(title, description, "gamedev", projectName, img, git, demo)}</div>
                ))}</div>
                </div>
            )
        }                         
    }    

    render(){
        const { items } = this.props.item;
        return(
            <div className="category-tabs" >
                <Tabs style={{backgroundColor:"whitesmoke"}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab >React</Tab>
                    <Tab >Unity</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                    <Tab>Web Development</Tab>
                    <Tab>Hackathons</Tab>
                    <Tab>Game Development</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div>{this.toggleCategories(items)}</div>
                    </Cell>
                    
                        
                    
                </Grid>
                    
                
            </div>
        )
    }
}

Projects.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});



export default connect(mapStateToProps, { getItems })(Projects);