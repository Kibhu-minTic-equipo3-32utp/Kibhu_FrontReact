import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';

export default class Precios extends Component {

    render() {
        return (
            <div class="pricing text-center bloque" id="Precios">
                <br />
                <h1><b>Precios</b></h1>
                    <p>
                        Mira nuestras tarifas y escoge la que mejor se ajuste a tu plan de
                        negocios.
                    </p>
                    <CardGroup className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        
                        <Col>  
                        <Card className="mb-4 rounded-3 shadow-sm">
                                <Card.Title class="card-header py-3 bg-warning">
                                    <h4 class="my-0 fw-normal">Plan Básico</h4>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Subtitle class="card-title pricing-card-title">
                                        $15<small class="text-muted fw-light">/yr</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>
                                            No tienes que empezar de cero tu inventario: lo actualizamos por
                                            ti
                                        </li>
                                        <li>Almacenamiento en la nube. Siempre disponible para ti</li>
                                        <li>Guía de uso</li>
                                        <li>
                                            Asesorías personalizadas para darle mejor uso a tu inventario
                                        </li>
                                    </ul>
                                    </Card.Text>
                                    <button 
                                        variant="warning"
                                    >
                                        Únete ya
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-4 rounded-3 shadow-sm">
                                <Card.Title class="card-header py-3 bg-warning">
                                    <h4 class="my-0 fw-normal">Plan Básico</h4>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Subtitle class="card-title pricing-card-title">
                                        $15<small class="text-muted fw-light">/yr</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>
                                            No tienes que empezar de cero tu inventario: lo actualizamos por
                                            ti
                                        </li>
                                        <li>Almacenamiento en la nube. Siempre disponible para ti</li>
                                        <li>Guía de uso</li>
                                        <li>
                                            Asesorías personalizadas para darle mejor uso a tu inventario
                                        </li>
                                    </ul>
                                    </Card.Text>
                                    <button 
                                        variant="warning"
                                    >
                                        Únete ya
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card className="mb-4 rounded-3 shadow-sm">
                                <Card.Title class="card-header py-3 bg-warning">
                                    <h4 class="my-0 fw-normal">Plan Básico</h4>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Subtitle class="card-title pricing-card-title">
                                        $15<small class="text-muted fw-light">/yr</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>
                                            No tienes que empezar de cero tu inventario: lo actualizamos por
                                            ti
                                        </li>
                                        <li>Almacenamiento en la nube. Siempre disponible para ti</li>
                                        <li>Guía de uso</li>
                                        <li>
                                            Asesorías personalizadas para darle mejor uso a tu inventario
                                        </li>
                                    </ul>
                                    </Card.Text>
                                    <button
                                        variant="warning"
                                    >
                                        Únete ya
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </CardGroup>
                    </div>
                    )
    }
}
