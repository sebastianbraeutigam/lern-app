import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

class App extends Component {
    state = {  } 
    render() { 
        return ( 
            <>
                <Header />
                <Main />
                <Footer />
            </>
         );
    }
}
 
export default App;