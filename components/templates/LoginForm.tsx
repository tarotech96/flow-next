import React from 'react';
import Button from '../atoms/button/Button';
import Checkbox from '../atoms/input/CheckBox';
import InputField from '../atoms/input/InputField';
import Heading2 from '../atoms/typography/Heading2';
import Span from '../atoms/typography/Span';
import Form from '../organisms/Form';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading2 title="Login" />
      <Form>
        <InputField
          id="email"
          label="email"
          type="email"
          placeholder="Enter your email"
        />
        <InputField
          id="password"
          label="password"
          type="password"
          placeholder="Enter your password"
        />
        <Checkbox id="remember-me" children={<Span title="Remember me" />} />
        <Button
          buttonLabel="Login"
          color="success"
          gradientDuoTone="purpleToBlue"
          styles={{
            width: '100%',
            fontSize: '1.2rem',
            marginTop: 20,
          }}
        />
      </Form>
    </div>
  );
};

export default LoginForm;
