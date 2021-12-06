import React, { Component } from "react";
import "./team.css";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import acosta from "../../assets/Acosta.jpg";
import daniel from "../../assets/Daniel.jpg";
import dosman from "../../assets/Dosman.jpg";
import myriam from "../../assets/Myriam.jpeg";
import juan from "../../assets/Mendez.jpg";

export default class Team extends Component {
  render() {
    return (
      <div className="Team">
        <h1 className="titulo">
          <Badge pill bg="secondary">
            EQUIPO SCRUM
          </Badge>{" "}
        </h1>
        <br></br>
        <br></br>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div className="slider">
                <div className="card">
                  <div className="img">
                    <img src={acosta} alt="Andres Acosta"></img>
                  </div>
                  <div className="content">
                    <div className="title">Andrés Acosta</div>
                    <div className="sub-title">Full Stack Developer</div>
                    <p className="card-text">
                      Cursando Tecnología en Desarrollo de Software, adquiriendo
                      conocimientos de programación con MinTic2022.
                      <br />
                      <br />
                      <label className="fontgray">
                        acostabuitrago0123@gmail.com
                      </label>
                    </p>
                    <div className="btn">
                      <button>Contacto</button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={dosman} alt="Jhon Dosman"></img>
                  </div>
                  <div className="content">
                    <div className="title">Jhon Dosman</div>
                    <div className="sub-title">Desarrollador back-end</div>
                    <p className="card-text">
                      Cursando Tecnología en Sistemas y adquiriendo
                      conocimientos en programación con Mintic2022.
                      <br />
                      <br />
                      <label className="fontgray">
                        dosman.diazjhon4166@gmail.com
                      </label>
                    </p>
                    <div className="btn">
                      <button>Contacto</button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={daniel} alt="Daniel Arias"></img>
                  </div>
                  <div className="content">
                    <div className="title">Daniel Arias</div>
                    <div className="sub-title">Full Stack Developer</div>
                    <p className="card-text">
                      Economista al que se le atravesó el deseo de aprender a
                      programar con el programa MinTic2022.
                      <br />
                      <br />
                      <label className="fontgray">
                        alejolarias542@gmail.com
                      </label>
                    </p>
                    <div className="btn">
                      <button>Contacto</button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slider">
                <div className="card">
                  <div className="img">
                    <img src={myriam} alt="Myriam Hernandez"></img>
                  </div>
                  <div className="content">
                    <div className="title">Myriam Hernandez</div>
                    <div className="sub-title">Senior QA Analyst</div>
                    <p className="card-text">
                      Ingeniera Electrónica integral, diseño de sistemas de
                      optimización de procesos industriales, experiencia en
                      pruebas calidad de software, modelamiento y automatización
                      de procesos de negocio BPMN.
                      <br />
                      <br />
                      <label className="fontgray">myriam.hdez@gmail.com</label>
                    </p>
                    <div className="btn">
                      <button>Contacto</button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={juan} alt="Juan Mendez"></img>
                  </div>
                  <div className="content">
                    <div className="title">Juan Mendez</div>
                    <div className="sub-title">Full Stack Developer</div>
                    <p className="card-text">
                      Estudiante con conocimientos en energías fósiles y su
                      extracción el cual quiere mejorar sus conocimientos en
                      programación y aplicaciones web con el programa
                      MinTic2022.
                      <br />
                      <br />
                      <label className="fontgray">
                        juan10cmendez@gmail.com
                      </label>
                    </p>
                    <div className="btn">
                      <button>Contacto</button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}
