import React from 'react';
import './App.css';
import $ from 'jquery'
class App extends React.Component{
    login(){
        $(".send_jsonp").click(function () {
            var datas={
                username:$("#uname").val(),
                pass:$("#userpwd").val()
            };
            $.ajax({
                url:"login.php",
                type:'post',
                dataType:'json',
                data:datas,
                success:function(reslut){
                    alert('login success');
                }
            })
        })
    }
    render() {
        return (
            <form action="" method="post">
                <table>
                    <tr>
                        <td align="right">�û�����</td>
                        <td><input type="text" name="username" value="user" id="uname"/></td>
                    </tr>
                    <tr>
                        <td align="right">�� �룺</td>
                        <td><input type="password" id="userpwd" /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="submit" value="��½" onClick={this.login}/></td>
                        <td>< a href=" ">ע��</ a></td>
                    </tr>
                </table>
            </form>
            // <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>

        );
    }


}

export default App;