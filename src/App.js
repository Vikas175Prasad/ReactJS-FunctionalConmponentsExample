import { React } from 'react';
import './App.css';
import Header from './components/header'
import { Button } from 'reactstrap';

function App() {
    return (
        <div>
            <Header name="Shyam" colorcode="red" />
            <Header name="Raju" colorcode="green" />
            <Header name="Baburao" colorcode="blue" >Third Para</Header>
            <h1>Hi!!!</h1>
            <h2>Developer</h2>
            <Button
                tag="a"
                color="success"
                size="large"
                href="http://reactstrap.github.io"
                target="_blank"
            >
                View Reactstrap Docs
                                    </Button>
        </div>

    );
}

export default App;