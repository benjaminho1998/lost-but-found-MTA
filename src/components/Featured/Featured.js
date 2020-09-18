import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import './Featured.sass';

const Featured = (props) => {
    const data = props.data;
    const numberOfFeatured = 14;

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const createFeaturedArray = () => {
        const categoryArray = [...data[0].LostProperty.Category]
        let featuredArray = [];
        for(let i = 0; i < numberOfFeatured; i++) {
            const categoryIndex = randomNumber(0, categoryArray.length);
            const subCategoryIndex = randomNumber(0, categoryArray[categoryIndex].SubCategory.length)
            featuredArray.push(categoryArray[categoryIndex].SubCategory[subCategoryIndex])
        }
        return featuredArray;
    }

    const featuredArray = createFeaturedArray();

    return (
        <div>
            <Row>
                <Col>
                    <p className="featured-title feature-mg-top">Featured Items</p>
                </Col>
            </Row>
            <Row>
                {featuredArray.map((item, i) => 
                    <Col key={i} sm="6" md="4">
                        <Card className="card-shadow mg-bottom">
                            <Card.Header className="card-title" style={{backgroundColor: (i % 2) ? "#E3ECFF" : "#FFDAC1"}}>
                                {item.SubCategory}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <h5>
                                        Count: <Badge pill={true} variant="secondary">{item.count}</Badge>
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default Featured;