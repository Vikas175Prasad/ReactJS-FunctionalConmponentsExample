import React, { useState } from 'react';
import axios from 'axios';
import Content from './Content';


const Header = (props) => {



    const [personList] = useState([
        { id: 1, name: 'Vikas' },
        { id: 2, name: 'Raju' },
    ]
    )

    const [counter, setCounter] = useState(0)

    const changeCounter = () => {
        setCounter(counter + 1)
    }

    return (


        <div style={{ background: props.colorcode, margin: 5 }}>
            <p>Header {props.name}</p>
            <p>{counter}</p>
            <button onClick={changeCounter}>Click to increment</button>
            <p>{props.children}</p>
            {
                personList.length > 0 ? personList.map((per, i) => <h1 key={i}>{per.name}</h1>) : 'No Person'
            }
            <Content click={changeCounter} />
        </div>
    );
}

function componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            console.log(persons)
            return persons;
        })
}



export default Header;