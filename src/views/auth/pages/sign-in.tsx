import { Button, Form, Input } from 'antd'
import { useLogin } from '../../../hooks/auth'

export default () => {
  const {password, setPassword, username, setUsername, onSubmit} = useLogin()
  return (
    <div className='login-section'>
      <div className='login-form-wrapper'>
        <h2 className='auth-title'>Sign-in</h2>
        <Form
          name='wrap'
          layout='vertical'
          labelWrap
          wrapperCol={{flex: 1}}
          colon={false}
          onFinish={onSubmit}
        >
          <Form.Item label='Username' name='username' rules={[{required: true}]}>
            <Input
              size='large'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item label='Password' name='password' rules={[{required: true}]}>
            <Input.Password
              size='large'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item label=' '>
            <Button size='large' block type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}