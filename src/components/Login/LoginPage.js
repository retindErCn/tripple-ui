import { Form, Icon, Input, Button, Checkbox } from 'antd';
import  React  from 'react';
import  styles from  './Login.less';
import  classnames from 'classnames';
import logoimg from './../../assets/Logo.jpg';
const FormItem = Form.Item;

class LoginPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div name='login-page' className={classnames(styles.loginform)}>
        <div>
        <img src={logoimg} alt="tripple-Logo" className={classnames(styles.logo)} />
          </div>
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>自动登录</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
           登录
          </Button>
          Or <a href="">注册</a>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrapperLoginPage = Form.create()(LoginPage);
export default WrapperLoginPage;