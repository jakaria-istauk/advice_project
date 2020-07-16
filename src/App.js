import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{

    state = { advice: '' };

    componentDidMount(){
        console.log('COMPONENT DID MOUNT')
    }

    fetchAdvice = () => {
        axios.get();
    }

    render(){
        return(
            <h1>Advice application</h1>
        )
    }
}
export default App;