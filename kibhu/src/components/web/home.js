import Header from "./header";
import Login from "./login";
import News from "./news";
import Precios from "./prices";
import Servicios from "./services";
import Team from "./team";
import "./home.css";
import logo from "../../assets/logo pequeño kibhu new.png";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <div class="principal">
        <div class="header-menu">
          <img src={logo} className="logoo"></img>
          <ul class="breadcrumb">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#sobre-nosotros">Sobre nosotros</a>
            </li>
            <li>
              <a href="#noticias">Noticias</a>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <section id="inicio">
        <Login />
        <br />
      </section>
      <section id="noticias">
        <News />
        <br />
      </section>
      <section id="servicios">
        <Servicios />
        <br />
      </section>
      <section id="precios">
        <Precios />
        <br />
      </section>
      <section id="sobre-nosotros">
        <Team />
      </section>
      <div class="footerp">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
