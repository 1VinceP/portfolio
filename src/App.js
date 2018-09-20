import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './views/main/Main';
import Skills from './views/skills/Skills';
import Projects from './views/projects/Projects';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-body'>
        <Header />

        <Main />
        <Skills />
        <Projects />
        <div className='app-sidebyside'>
          <About />
          <Contact />
        </div>

        <footer className='app-footer'>
            <div>Website &copy; 2018 Vincent Palmer</div>
            <div>Hero image &copy; 2016 Vincent Palmer</div>
        </footer>
      </div>
    );
  }
}

export default App;
