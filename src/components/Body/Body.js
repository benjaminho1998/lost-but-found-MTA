import React from 'react';
import Card  from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './Body.sass';
import Featured from '../Featured/Featured';
import SideBar from '../Sidebar/Sidebar';


const Body = (props) => {
    const data = props.data;
    const renderGreeting = ( 
        <div>
        {/* <Card className="card-shadow">
            <Card.Header className="card-title" style={{backgroundColor: "#FFDAC1"}}> */}
                {/* MTA Lost and Found Tracker */}
            {/* </Card.Header>
            <Card.Body> 
                <Card.Text> */}
                <div className="greeting">
                    Every year, millions of personal belongings are lost on New York City's Metropolitan Transportation Authority (MTA). Thankfully, many items are turned into the system's lost and found service. This website tracks every subcategory of those items and their counts. Use the menu above to choose a category.
                </div>
                {/* </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1542168300-b6d2279063af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></Card.Img> */}
            <img className="img" src="https://images.unsplash.com/photo-1542168300-b6d2279063af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
        {/* </Card> */}
        </div>
    );

    const renderLostArticles = (
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
    );

    const renderClaimedArticles = (
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
    );

    return (
        <Container className="body-container">
            <Row>
                <Col>
                    <p className="title">Lost But Found</p>
                </Col>
            </Row>
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
                    <SideBar />
                </Col>
            </Row>
            <Row>
                <div className="feature-container"> 
                    <Featured data={data} />
                </div>
            </Row>
        </Container>
    );
}

export default Body;