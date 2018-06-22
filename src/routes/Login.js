import React from 'react';
import WrapperLoginPage
 from '../components/Login/LoginPage';
import {connect } from 'dva';
const Login =({dispath,login}) => {
  function handleLogin(name,passwd){
    dispath({
      type:'login/submit',
      username:name,
      passwd:passwd,
    });
  }
  
  return ( 
    <WrapperLoginPage onSubmit={handleLogin} />
  );
};

export default connect(({login})=>({login,})) (Login);