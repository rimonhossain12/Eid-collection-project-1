import React from 'react';
import { Card } from 'react-bootstrap';

const Ladie = ({product}) => {
    const { name, images,price,rating,country } = product;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='img-fluid' src={images} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Ladie;