import React, { Component } from 'react';
import face from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import './footer.css';


export default class Footer extends Component {

    render() {
        return (
            <div class="mainfooter">
                <div class= "kibhufooter">
                <h5>  MinTic2022 Grupo32-03, ©Kibhu 2021 </h5>
                </div>
                <div class="socialFooter">
                <div class="imgface btface">
                    <a href="https://www.facebook.com/" target="blank">
                        <img src={face} class="imgSocial"></img>
                    </a>
                </div>
                <div class="imginsta btsocial">
                    <a href="https://www.instagram.com/" target="blank">
                    <img src={instagram} class="imgSocial"></img>
                    </a>
                </div>
                <div class="imgtwitter btsocial">
                    <a href="https://twitter.com/" target="blank">
                    <img src={twitter} class="imgSocial"></img>
                    </a>
                </div>
                </div>
            </div>

        )
    }
}
