import React,{Component} from "react";
import './FormLogin.css';

class FormLogin extends Component {
    render(){
        return (
            <div>
            <form class="form">
                <label for="name" class="label">UserName</label><br/>
                <input type="text" placeholder="Luong Quy Tan" name = "userName" class="input"/><br/>

                <label for="mail" class="label">Email</label><br/>
                <input type="email" name = "mail" class="input" email={this.props.email}/><br/>

                <label for="password" class="label">Passsword</label><br/>
                <input type="password" name = "password" class="input" placeholder="******"/><br/>
                
                <button>Sign Up to Coders-X</button><br/>
                <input type="checkbox"  name="keepSignIn" value="check"/>
                <label for="keepSignIn"> Keep me sign in</label><br/>
                <a href="#">Forgot user name?</a>
                <a href="#">Forgot password?</a><br/>
            </form>
        </div>
        )
    }
        
        
    
}
export default FormLogin;