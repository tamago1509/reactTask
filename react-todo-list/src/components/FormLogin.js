import React from "react";
import './FormLogin.css';

const FormLogin = ()=>{
    return (
        <div>
            <form class="form">
                <label for="name" class="label">UserName</label><br/>
                <input type="text" placeholder="Luong Quy Tan" name = "userName" class="input"/><br/>
                <label for="password" class="label">Passsword</label><br/>
                <input type="password" name = "password" class="input" value="123456"/><br/>
                <button>Sign Up to Coders-X</button><br/>
                <input type="checkbox"  name="keepSignIn" value="check"/>
                <label for="keepSignIn"> Keep me sign in</label><br/>
                <a href="#">Forgot user name?</a>
                <a href="#">Forgot password?</a><br/>
            </form>
        </div>
        
    )
}
export default FormLogin;