import React from 'react';
import { Form, Input, Button, message } from 'antd';
import query from '@/utils/query';

interface IForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const onFinish = (values: IForm) => {
    (async () => {
      const res = await query.post('admin/login', { ...values });
      console.log(res);
      const data = res.data;
      if (data.code === 'ok') {
        const token = data.data.token;
        window.localStorage.setItem('token', token);
        message.success('登陆成功');
      }
    })();
  };

  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <Form name="login" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
        <Form.Item label="管理员账号" name="username" rules={[{ required: true, message: '请输入账号!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="管理员密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
