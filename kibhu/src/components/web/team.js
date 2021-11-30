import React, { Component } from "react";
import "./team.css";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import acosta from "../../assets/Acosta.jpg";
import daniel from "../../assets/Daniel.jpg";
import dosman from "../../assets/Dosman.jpg";
import myriam from "../../assets/Myriam.jpeg";
import juan from "../../assets/Bastidas.jpg";

export default class Team extends Component {
  render() {
    return (
      <div classame="Team">
        <h1 class="text-center">
          <Badge pill bg="secondary">
            EQUIPO SCRUM
          </Badge>{" "}
        </h1>
        <br></br>
        <br></br>
        <Container>
          <div class="row">
            <div class="slider">
              <div class="card">
                <div class="img">
                  <img src={acosta} alt="Andres Acosta"></img>
                </div>
                <div class="content">
                  <div class="title">Andrés Acosta</div>
                  <div class="sub-title">Full Stack Developer</div>
                  <p class="card-text">
                    Cursando la Tecnología en Desarrollo de Software, y
                    mejorando conocimientos de programación con MinTic2022.
                    <br />
                    <br />
                    <label class="fontgray">acostabuitrago0123@gmail.com</label>
                  </p>
                  <div class="btn">
                    <button>Contacto</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="slider">
              <div class="card">
                <div class="img">
                  <img src={dosman} alt="Jhon Dosman"></img>
                </div>
                <div class="content">
                  <div class="title">Jhon Dosman</div>
                  <div class="sub-title">Desarrollador back-end</div>
                  <p class="card-text">
                    Cursando Tecnología en Sistemas y adquiriendo conocimientos
                    en programación con Mintic2022.
                    <br />
                    <br />
                    <label class="fontgray">
                      dosman.diazjhon4166@gmail.com
                    </label>
                  </p>
                  <div class="btn">
                    <button>Contacto</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="slider">
              <div class="card">
                <div class="img">
                  <img src={daniel} alt="Daniel Arias"></img>
                </div>
                <div class="content">
                  <div class="title">Daniel Arias</div>
                  <div class="sub-title">Full Stack Developer</div>
                  <p class="card-text">
                    Economista al que se le atravesó el deseo de aprender a
                    programar con el programa MinTic2022.
                    <br />
                    <br />
                    <label class="fontgray">alejolarias542@gmail.com</label>
                  </p>
                  <div class="btn">
                    <button>Contacto</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="slider">
              <div class="card">
                <div class="img">
                  <img src={myriam} alt="Myriam Hernandez"></img>
                </div>
                <div class="content">
                  <div class="title">Myriam Hernandez</div>
                  <div class="sub-title">Senior Analyst</div>
                  <p class="card-text">
                    Ingeniera Electrónica integral, con amplia experiencia en
                    pruebas calidad de software, modelamiento y automatización
                    de procesos de negocio BPMN.
                    <br />
                    <br />
                    <label class="fontgray">myriam.hdez@gmail.com</label>
                  </p>
                  <div class="btn">
                    <button>Contacto</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="slider">
              <div class="card">
                <div class="img">
                  <img src={juan} alt="Juan Mendez"></img>
                </div>
                <div class="content">
                  <div class="title">Juan Mendez</div>
                  <div class="sub-title">Full Stack Developer</div>
                  <p class="card-text">
                    Diseñador Gráfico y músico, proceso formativo como full
                    stack developer y aprendiendo con el programa MinTic2022.
                    <br />
                    <br />
                    <label class="fontgray">juan10cmendez@gmail.com</label>
                  </p>
                  <div class="btn">
                    <button>Contacto</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
