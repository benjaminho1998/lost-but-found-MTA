import React from 'react';
import Card  from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import './Body.sass'


const Body = (props) => {
    const data = props.data;
    console.log("data", data);
    
    const renderGreeting = ( 
        <Card className="card-shadow">
            <Card.Header className="card-title" style={{backgroundColor: "#FFDAC1"}}>
                MTA Lost and Found Tracker
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Every year, millions of personal belongings are lost on New York City's Metropolitan Transportation Authority (MTA). Thankfully, many items are turned into the system's lost and found service. This website tracks every subcategory of those items and their counts.
                </Card.Text>
            </Card.Body>
        </Card>
    );

    const renderLostArticles = (
        <div>
            <Card className="card-shadow mg-top">
                <Card.Header className="card-title">
                    Lost Items
                </Card.Header>
                <Card.Body>
                    <Card.Text className="big-counter">
                        {data[0] && data[0].LostProperty.NumberOfLostArticles}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

    const renderClaimedArticles = (
        <div>
            <Card className="card-shadow mg-top">
                <Card.Header className="card-title">
                    Claimed Items
                </Card.Header>
                <Card.Body>
                    <Card.Text className="big-counter">
                        {data[0] && data[0].LostProperty.NumberOfItemsclaimed}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

    const renderSideBar = (
        <div>
            <Card className="card-shadow sidebar" style={{backgroundColor: "#F1F2F4"}}>
                <Card.Header className="card-title">
                    Filler:
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Filler
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

    return (
        <Container>
            <Row>
                <Col lg="8">
                    <Row>
                        <Col lg="12">
                            {renderGreeting}
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            {renderLostArticles}
                        </Col>
                        <Col md="6">
                            {renderClaimedArticles}
                        </Col>
                    </Row>
                </Col>
                <Col lg="4">
                    {renderSideBar}
                </Col>
                <Col>
                    hi
                </Col>
            </Row>
        </Container>
    );
}

export default Body;