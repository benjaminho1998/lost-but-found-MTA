import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card  from 'react-bootstrap/Card';
import './Body.sass'

const Body = () => {
    const url = '/data';
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(data)
    const renderGreeting = ( 
        <Card className="card-container center-align" style={{ width: '70%' }}>
            <Card.Body>
                <Card.Title className="card-title">MTA Lost and Found Tracker</Card.Title>
                <Card.Text>
                    Every year, millions of personal belongings are lost on New York City's Metropolitan Transportation Authority (MTA). Thankfully, many items are turned into the system's lost and found service. This website tracks every subcategory of those items and their counts.
                </Card.Text>
            </Card.Body>
        </Card>
    );

    const renderTrackers = (
        <div>
            <Card className="card-container center-align" style={{ width: '70%' }}>
                <Card.Body>
                <Card.Title className="card-title">Number of Lost Articles: </Card.Title>
                <Card.Text>
                    
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

    return (
        <div>
            {renderGreeting}
            {/* {renderTrackers} */}
        </div>
    );
}

export default Body;