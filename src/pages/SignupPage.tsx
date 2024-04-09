import React from "react";
import { useSignupMutation } from "../services/auth.api";
import { Button, Form, Input, message } from "antd";
import { SignupBody, SignupRequest, SignupResponse } from "../types/auth";

const SignupPage = () => {
  const [signupMutation] = useSignupMutation();
  const handleLogin = async (values: Record<string, any>) => {
    const request: SignupRequest = {
      body: values as SignupBody,
    };
    const res: any = await signupMutation(request);
    if (res.error) {
    } else {
      console.log(res.data);
      const response: SignupResponse = res.data;
      if (response.result === "failed") {
        message.error(response.message);
      } else {
        message.success(response.message);
      }
    }
  };
  return (
    <div>
      <div>
        <div>Login</div>
        <Form onFinish={handleLogin}>
          <Form.Item label="メールアドレス" name={"email"}>
            <Input />
          </Form.Item>
          <Form.Item label="パスワード" name={"password"}>
            <Input />
          </Form.Item>
          <Form.Item label="ユーザーネーム" name={"username"}>
            <Input />
          </Form.Item>
          <Button htmlType="submit">アカウント作成</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
