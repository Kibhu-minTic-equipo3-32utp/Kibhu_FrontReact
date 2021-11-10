import React, {Component} from 'react';



export default class Login extends Component {

    render () {
        return (
            <div>
                <form> 
                    <input username="username" placeholder="escriba su usuario"  /> 
                    <input password="password" placeholder="escriba su contraseña" /> 
                </form>
            </div>
        )
    }
}

