import React from 'react'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

class Login extends React.Component{
    constructor(props){
        super(props);
        //��thisʱ�䣬������󶨣��޷�����this
        this.register = this.register.bind(this);
    }
    register(){
        console.log(this.props);
        //��ת��ע��ҳ��
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2>���ǵ�¼ҳ</h2>
                <WingBlank>
                    <List>
                        <InputItem>�û���</InputItem>
                        <InputItem  type="password">����</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">��¼</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">ע��</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
