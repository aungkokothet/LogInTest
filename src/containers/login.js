import React,{ useRef, useEffect } from 'react';
import dchannel from './../img/dchannel.png';

function Login(props) {

    return(
      <div className="wrap">
          <div className="container">
              <div className="login">
                  <p className="orange none">Login</p>
                  <div className="form">
                      <div className="login-icon text-center">
                          <img src={dchannel} alt="dchannel"/>
                      </div>
                      <input type="text" name="" placeholder="User Name"/>
                      <input type="password" name="" placeholder="Password" />
                      <button className="btn-com mt-3" >LOGIN</button>
                      <button className="btn-com mt-3" >REGISTER</button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Login;
