import React from 'react';
import { Col, Card, Badge } from 'react-bootstrap';
import './CardContainer.sass';

const CardContainer = (props) => {
    const item = props.item;
    const index = props.index;

    return (
        <Col sm="6" md="4">
            <Card className="card-shadow mg-top">
                <Card.Header className="card-title" style={{backgroundColor: (index % 2) ? "#E3ECFF" : "#FFDAC1"}}>
                    {item.SubCategory}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <h5>
                            {/* Count: {item.count} */}
                            Count: <Badge variant="secondary">{item.count}</Badge>
                        </h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardContainer;