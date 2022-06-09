import React from 'react';
import { Footer, Header, Skill, Work, Social } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <Social />
            <Skill />
            <Work />
            <Footer />
        </div>
    );
};

export default App