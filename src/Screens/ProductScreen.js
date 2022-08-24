import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products'

function ProductScreen() {
    const { id } = useParams();
    const product = products.find((p) => p._id == Number(id))
    return (
        <div>
            <Link to='/' className='btn btn-light m-3'>Go Back </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flash">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Rating value={product.rating} text = {` ${product.numReviews} reviews`} color="#f8e825"/>
                        </ListGroupItem>

                        <ListGroupItem>
                            Price : ${product.price}
                        </ListGroupItem>

                        <ListGroupItem>
                            Description : {product.description}
                        </ListGroupItem>

                    </ListGroup>
                </Col>
             <Col md={3}>
              <Card>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col> Price: </Col>
                            <Col><strong>${product.price} </strong></Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col> Status : </Col>
                            <Col>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button className='btn-block' disabled={product.countInStock == 0} type = "button">
                            Add to Cart
                        </Button>
                    </ListGroup.Item>

                </ListGroup>

              </Card>
             </Col>
            
            </Row>
        </div>
    )
}

export default ProductScreen
