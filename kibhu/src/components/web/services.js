import React, {Component} from 'react';
import './Services.css';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Container from 'react-bootstrap/Container';

export default class Servicios extends Component {

    render () {
        return (
            <div classname="Servicios">
                <h1 class="text-center">
                    <Badge pill bg="secondary">SERVICIOS</Badge> </h1>
                    <br></br>
                    <br></br>
                    <h3 class="text-center"> ¿Qué puedes hacer con Kibhu?</h3>
                    <br></br>
                    <br></br>
                    <Container fluid> 
                    <Accordion defaultActiveKey="0" flush>
                        <AccordionItem eventKey="0"> 
                            <AccordionHeader>
                                <h2>Guarda tu inventario</h2>
                            </AccordionHeader>
                            <AccordionBody>
                                <h4><strong>Guarda los products que vendes, en la nube.</strong> Con nuestra app
                            puedes hacerlo. Tu inventario no sólo estará seguro, sino que será de fácil acceso 
                            siempre que necesites revisarlo</h4>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="1"> 
                            <AccordionHeader><h2>Actualiza tus productos</h2></AccordionHeader>
                            <AccordionBody>
                                <h4><strong>Al realizar una venta o compra de un producto.</strong> Podrás mirar en 
                            tiempo real la cantidad que queda de ese item, de forma rápida y eficaz tu inventario 
                            se actualiza para mantenerte al tanto de tus necesidades.</h4>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="2"> 
                            <AccordionHeader><h2>Mejora tu empresa</h2></AccordionHeader>
                            <AccordionBody>
                                <h4><strong>Mira el desempeño de tus productos:</strong> los más vendidos, 
                            más demandados, dificiles de conseguir, y mucha más información para que
                            siempre puedas tomar la mejor decisión.</h4>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="3"> 
                            <AccordionHeader><h2>Ve más allá</h2></AccordionHeader>
                            <AccordionBody>
                                <h4><strong>No te conformes</strong> a organizar tu inventario de productos,
                            con Kibhu puedes armar tu propia base de datos con información de clientes,
                            proveedores, y empleados. Así puedes detectar clientes destacados, anotar 
                            los proveedores más necesarios y destacar tus empleados.</h4>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    </Container>
            </div>
        )
    }
}

