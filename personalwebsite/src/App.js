import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import  Main  from "./components/main";
import { Link } from "react-router-dom";


function App() {
  return (
      <Provider store={store}>
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<a href="/"><b>JANGO</b></a>} scroll to="/">
                    <Navigation>
                        <Link style={{color:'white', textShadow:'1px 2px black'}} to="/sport">Sport</Link>                
                        <Link style={{color:'white', textShadow:'1px 2px black'}}to="/hobbies">Hobbies</Link>
                        <Link style={{color:'white', textShadow:'1px 2px black'}}to="/projects">Projects</Link>
                        <Link style={{color:'white', textShadow:'1px 2px black'}}to="/aboutme">About Me</Link>
                        <Link style={{color:'white', textShadow:'1px 2px black'}}to="/contact">Contact</Link>
                        
                    </Navigation>
                </Header>
            
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    </Provider>
  );
}

export default App;
