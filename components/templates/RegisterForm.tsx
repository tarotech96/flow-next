import React from 'react';
import Button from '../atoms/button/Button';
import InputField from '../atoms/input/InputField';
import Heading2 from '../atoms/typography/Heading2';
import Form from '../organisms/Form';

const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center">
      <Heading2 title="Register" />
      <Form>
        <InputField
          id="first-name"
          label="First Name"
          type="text"
          placeholder="Enter first name"
        />
        <InputField
          id="last-name"
          label="Last Name"
          type="text"
          placeholder="Enter last name"
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter email"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter password"
        />
        <Button
          buttonLabel="Register"
          color="success"
          size="md"
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

export default RegisterForm;
