import React from 'react';
import { Switch, Route } from "react-router-dom";

import  Landing from "./landingPage";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import Sport from "./sport";
import Hobbies from "./hobbies";


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/sport" component={Sport} />
        <Route path="/hobbies" component={Hobbies} />

    </Switch>
)

export default Main;