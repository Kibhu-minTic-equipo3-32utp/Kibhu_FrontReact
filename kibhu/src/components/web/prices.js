import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Container from 'react-bootstrap/Container';


export default class Precios extends Component {

    render() {
        return (
            <div class="pricing text-center bloque" id="Precios">
                <br />
                <h1><Badge pill bg="secondary">PRECIOS</Badge></h1>
                    <br></br>
                    <h3>
                        Mira nuestras tarifas y escoge la que mejor se ajuste a tu plan de
                        negocios.
                    </h3>
                    <br></br>
                    <Container fluid> 
                    <CardGroup className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        
                        <Col>  
                        <Card className="mb-4 rounded-3 shadow-sm">
                                <Card.Title class="card-header py-3 bg-light">
                                    <h4 class="my-0 fw-normal">Prueba gratis</h4>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Subtitle class="card-title pricing-card-title">
                                        $0<small class="text-muted fw-light">/yr</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroupItem>
                                            Prueba de una semana de la aplicación
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Guía de uso
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Guarda tu inventario con nosotros y si decides seguir se actualizará
                                        </ListGroupItem>
                                    </ListGroup>
                                    </Card.Text>
                                    <button 
                                        variant="secondary"
                                    >
                                        Registrate aquí
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-4 rounded-3 shadow-sm">
                                <Card.Title class="card-header py-3 bg-secondary">
                                    <h4 class="my-0 fw-normal">Plan Básico</h4>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Subtitle class="card-title pricing-card-title">
                                        $15<small class="text-muted fw-light">/yr</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroupItem>
                                            No tienes que empezar de cero tu inventario: lo actualizamos por
                                            ti
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Almacenamiento en la nube. Siempre disponible para ti
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Guía de uso
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Asesorías personalizadas para darle mejor uso a tu inventario
                                        </ListGroupItem>
                                    </ListGroup>
                                    </Card.Text>
                                    <button 
                                        variant="secondary"
                                    >
                                        Únete ya
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card className="mb-4 rounded-3 shadow-sm">
                                <Card.Title class="card-header py-3 bg-warning">
                                    <h4 class="my-0 fw-normal">Premium</h4>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Subtitle class="card-title pricing-card-title">
                                        $29<small class="text-muted fw-light">/yr</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroupItem>
                                            Une todas tus franquicias en un solo inventario
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Almacenamiento en la nube. Siempre disponible para ti
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Asesorías personalizadas para darle mejor uso a tu inventario
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Reporte constante sobre el desempeño de tu inventario
                                            con la mejor información disponible para el crecimiento de tu empresa
                                        </ListGroupItem>
                                    </ListGroup>
                                    </Card.Text>
                                    <button
                                        variant="secondary"
                                    >
                                        ¿Te interesa?
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </CardGroup>
                    </Container>
                    </div>
                    )
    }
}
