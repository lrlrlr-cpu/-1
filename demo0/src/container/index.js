import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div className="box">
    <form action="" method="post">
        <table>
            <tr>
                <td align="right">用户名：</td>
                <td><input type="text" name="username" value="请输入用户名" maxLength="6"/></td>
            </tr>
            <tr>
                <td align="right">密 码：</td>
                <td><input type="password" name="userpwd" maxLength="6"/></td>
            </tr>
            <tr>
                <td><input type="submit" name="submit" value="登陆"/></td>
                <td><a href="register.php">注册</a></td>
            </tr>
        </table>
    </form>
</div>,document.getElementById('root'));