import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

import './CSS/Styles.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggleNavMenuStatus:false,
      imgData : [],
      skillData : []
  }

  this.handletoggleNavMenu = this.handletoggleNavMenu.bind(this);
}

  componentDidMount(){
    fetch('http://api.jsonbin.io/b/5bcf763fadf9f5652a63d8b8/28', {
    headers: {
        mode: 'cors',
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
    })
    .then(response => response.json())
    .then(data => this.setState({
        imgData: data,
    }));

    fetch('http://api.jsonbin.io/b/5bd0ab8e51e8b664f2c12a53/10', {
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
      }
      })
      .then(response => response.json())
      .then(data => this.setState({
        skillData: data,
      }));
  }

  handletoggleNavMenu () {
    if(this.state.toggleNavMenuStatus === true){
      this.setState({toggleNavMenuStatus : false });
    }else if (this.state.toggleNavMenuStatus === false){
      this.setState({toggleNavMenuStatus : true })
    }
}
  render() {
    return (
      <div id="start-tag">
        <NavBar
        handletoggleNavMenu = {this.handletoggleNavMenu}
        handleNavScroll = {this.handleNavScroll}
        toggleNavMenuStatus = {this.state.toggleNavMenuStatus}
        />
        <Hero/>
        <Projects
        imgData = {this.state.imgData}
        />
        <AboutMe/>
        <Skills
        skillData = {this.state.skillData}
        />
        <Contact/>
      </div>
    );
  }
}

export default App;
