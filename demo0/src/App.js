import React from 'react';
import './App.css';
import $ from 'jquery';
import axios from "axios";
import qs from "qs";
class App extends React.Component{
  login(){
    axios.post('/check1/check',qs.stringify({
      username:$("#uname").val(),
      password:$("#userpwd").val(),
    })).then(res => {
      console.log(res.data);
      alert(res.data.label);
    })

  }
  render(){
    return(
        <form action="" method="post" onSubmit={this.login}>
          <table>
            <tr>
              <td align="right">用户名：</td>
              <td><input type="text" name="username"  id="uname"/></td>
            </tr>
            <tr>
              <td align="right">密 码：</td>
              <td><input type="password" id="userpwd" /></td>
            </tr>
            <tr>
              <td><input type="submit" name="submit" value="登陆" /></td>
              <td>< a href=" ">注册</ a></td>
            </tr>
          </table>
        </form>
    );


  };


}

export default App;