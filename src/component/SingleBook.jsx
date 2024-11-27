import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100">
                        <Card.Img variant="top" src={book.img} alt={book.title} />
                        <Card.Body>
                            <Card.Title>{book.title }</Card.Title>
                            <Card.Text>Prezzo:{book.price}$<strong>{book.category}</strong></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleBook;
