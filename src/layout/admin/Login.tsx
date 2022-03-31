import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { login } from '@/store/user/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get } from '@/utils/storage';

interface IForm {
  account: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogin = (values: IForm) => {
    (async () => {
      await dispatch(login({ ...values }));
      if (get('role') === '1') {
        navigate('/admin/content');
      }
    })();
  };

  useEffect(() => {
    // TODO 自动登陆
    if (get('role') === '1') {
      navigate('/admin/content');
    }
  }, []);

  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <Form name="login" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={submitLogin} autoComplete="off">
        <Form.Item label="管理员账号" name="account" rules={[{ required: true, message: '请输入账号!' }]}>
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
