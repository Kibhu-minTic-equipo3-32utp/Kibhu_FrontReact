import Header from "./header";
import Login from "./login";
import News from "./news";
import Precios from "./prices";
import Servicios from "./services";
import Team from "./team";


function Home() {
    return (
        <div>
            <Header/>
            <br/>
            <Login/>
            <br/>
            <News/>
            <br/>
            <Servicios/>
            <br/>
            <Precios/>
            <br/>
            <Team/>
        </div>
    )
}
export default Home;