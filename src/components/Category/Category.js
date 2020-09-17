import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Category.sass';
import CardContainer from '../CardContainer/CardContainer';

const Category = (props) => {
    const title = props.title;
    const subCatArr = props.subCatArr;

    return (
        <Container>
            <Row>
                <h1>{title}</h1>
            </Row>
            <Row>
                {subCatArr.map((item, i) => 
                    <CardContainer key={i} item={item} index={i} />
                )}
            </Row>
        </Container>
    );
}

export default Category;